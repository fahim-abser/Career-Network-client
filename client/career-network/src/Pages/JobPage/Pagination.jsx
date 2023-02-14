import React from 'react';

const Pagination = ({ totalJobs, postsPerPage, setCurrentPage, setPostsPerPage, currentPage }) => {
    const pageNum = []
    for (let i = 1; i <= Math.ceil(totalJobs / postsPerPage); i++) {
        pageNum.push(i)

    }
    return (
        <div className='mt-20'>


            <>


                {/* new */}
                <div class="flex justify-center ">
                    {
                        currentPage === 1 ? <button class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
                            <div class="flex items-center -mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>

                                <span class="mx-1">
                                    previous
                                </span>
                            </div>
                        </button>
                            :
                            <button onClick={() => setCurrentPage(currentPage - 1)} class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                                <div class="flex items-center -mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>

                                    <span class="mx-1">
                                        previous
                                    </span>
                                </div>
                            </button>

                    }

                    {/* numbers */}
                    {
                        pageNum.map(number => <button key={number} className={currentPage === number ? " px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-blue-500 dark:bg-blue-500 rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200" : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-500 hover:text-white dark:hover:text-gray-200"}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>)
                    }

                    {/* numbers */}
                    {
                        pageNum.length > currentPage && <button onClick={() => setCurrentPage(currentPage + 1)} class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            <div class="flex items-center -mx-1">
                                <span class="mx-1">
                                    Next
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </button>
                    }
                </div>


            </>




        </div>
    );
};

export default Pagination;