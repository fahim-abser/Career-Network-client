import React from 'react';
import { Link } from 'react-router-dom';
import serachimg from "../../../assets/opinion/Web search-bro.svg"
const SearchSection = () => {
    return (
        <section className="m-10">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none text-green-600 sm:text-4xl">
            variations of passages of Lorem Ipsum 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">With Career Network. Save time and reduce Centralize your HR Activities With Freshteam. Sadsflsdfsdfdsve time and reduce
				<br className="hidden md:inline lg:hidden"/>
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="" rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-full dark:bg-green-600 text-white">Explore This</Link>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={serachimg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    );
};

export default SearchSection;