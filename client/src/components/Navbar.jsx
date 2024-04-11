import React from 'react';

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-black bg-white px-4">
      <nav className="mx-auto flex max-w-7xl items-center py-2">
        <div className="mr-4 w-12 sm:w-16">
          <img src="/logo.ico" alt="Logo" /> {/* Fixed image src */}
        </div>
        <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
          <input
            className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-gray-400 outline-none sm:py-2"
            placeholder="Search"
          />
          <span className="absolute left-2.5 top-1/2 transform -translate-y-1/2"> {/* Fixed translation */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <button className="ml-auto sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button className="group peer ml-4 flex w-6 sm:hidden"> {/* Removed unnecessary styles */}
          <p>menu</p>
        </button>
        <div className="fixed inset-y-0 right-0 flex w-full max-w-xs transform translate-x-full flex-col border-l border-black text-black bg-white duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
          <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
            {/* This seems to be a placeholder */}
          </div>
          <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
          <button class="relative inline-block text-lg group">
      <span class="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight text-red transition-colors duration-300 ease-out border-2 border-red-600 rounded-lg group-hover:text-white">
      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-600 group-hover:-rotate-180 ease"></span>
      <span class="relative">Login in</span>
      </span>
      <span class="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </button>
            <button class="relative inline-block text-lg group">
      <span class="relative z-10 block px-2 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-red-600 rounded-lg group-hover:text-red-600">
      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-600"></span>
      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
      <span class="relative">Sign up</span>
      </span>
      <span class="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

