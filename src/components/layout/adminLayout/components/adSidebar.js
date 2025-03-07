import React from 'react';

const AdSidebar = () => {
    return (
        <aside className="bg-white w-1/5 py-10 pl-10 min-w-min border-r border-indigo-900/20 hidden md:block">
            <div className="font-bold text-2xl">Bin Store</div>

            {/* Menu */}
            <div className="mt-12 flex flex-col space-y-7 text-gray-500 font-medium">
                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                    </svg>
                    <span>Dashboard</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                    </svg>
                    <span>Transactions</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 font-semibold border-r-2 border-r-indigo-700 pr-20"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <span>Invoices</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                        />
                    </svg>
                    <span>Expenses</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                    </svg>
                    <span>Banking</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                    </svg>
                    <span>Cards</span>
                </a>

                <a
                    className="flex items-center space-x-2 py-1 group hover:border-r-2 hover:border-r-indigo-700 hover:font-semibold"
                    href="/"
                >
                    <svg
                        className="h-5 w-5 group-hover:stroke-indigo-700"
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
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span>Settings</span>
                </a>
            </div>
            {/* /Menu */}
        </aside>
    );
};

export default AdSidebar;
