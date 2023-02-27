import React from 'react';
import { Link } from 'react-router-dom';

const CandidateProfile = () => {
    return (
        <div>
            <div class="flex items-center py-2 overflow-x-auto whitespace-nowrap">
                <Link to="/" class="text-sky-700 dark:text-gray-200">
                    Home
                </Link>

                <span class="mx-2 text-sky-700 dark:text-gray-300 rtl:-scale-x-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>

                <p class="text-sky-700 dark:text-gray-200 ">Profile</p>
            </div>
        </div>
    );
};

export default CandidateProfile;