import React from 'react';

const AsNav = () => {
    return (
        <nav className="text-lg flex items-center justify-between content-center">
            <div className="font-semibold text-xl text-gray-800 flex space-x-4 items-center">
                <a href="/">
                    <span className="md:hidden">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                        </svg>
                    </span>
                </a>
                <span>Invoices</span>
            </div>

            <div className="flex space-x-5 md:space-x-10 text-gray-500 items-center content-center text-base">
                <a
                    className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-indigo-100"
                    href="/"
                >
                    <span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                    </span>
                    <span className="hidden sm:block">Preferences</span>
                </a>

                <a
                    className="px-4 py-2 bg-indigo-100 rounded-md flex items-center space-x-2 text-indigo-500 hover:bg-indigo-200"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 fill-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <div className="hidden xs:block">
                        <span className="hidden sm:inline-block">Create</span> New
                    </div>
                </a>

                <a href="/">
                    <img
                        className="rounded-full w-10 h-10 border-2 border-indigo-200 hover:border-indigo-300"
                        src="images/avatar.jpg"
                        alt="User Avatar"
                        srcSet=""
                    />
                </a>
            </div>
        </nav>
    );
};

export default AsNav;