import React, { useState } from 'react';

const BurgerMenu = () => {
    // State to manage the visibility of mobile and desktop menus
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

    return (
        <>
            {/* Burger menu */}
            {mobileMenuOpen && (
                <section
                    className="absolute left-0 right-0 z-50 h-screen w-full"
                    style={{ display: mobileMenuOpen ? 'block' : 'none' }}
                >
                    <div className="mx-auto">
                        <div className="mx-auto flex w-full justify-center gap-3 py-4">
                            <a
                                href="wishlist.html"
                                className="flex cursor-pointer flex-col items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                                <p className="text-xs">Wishlist</p>
                            </a>

                            <a
                                href="cart.html"
                                className="flex cursor-pointer flex-col items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-xs">Cart</p>
                            </a>

                            <a
                                href="account-page.html"
                                className="relative flex cursor-pointer flex-col items-center justify-center"
                            >
                                <span className="absolute bottom-[33px] right-1 flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                                <p className="text-xs">Account</p>
                            </a>
                        </div>

                        <form className="my-4 mx-5 flex h-9 items-center border">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mx-3 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>

                            <input
                                className="hidden w-11/12 outline-none md:block"
                                type="search"
                                placeholder="Search"
                            />

                            <button
                                type="submit"
                                className="ml-auto h-full bg-amber-400 px-4 hover:bg-yellow-300"
                            >
                                Search
                            </button>
                        </form>
                        <ul className="text-center font-medium">
                            <li className="py-2"><a href="index.html">Home</a></li>
                            <li className="py-2"><a href="catalog.html">Catalog</a></li>
                            <li className="py-2"><a href="about-us.html">About Us</a></li>
                            <li className="py-2"><a href="contact-us.html">Contact Us</a></li>
                        </ul>
                    </div>
                </section>
            )}

            {/* Nav bar */}
            <nav className="relative bg-black">
                <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
                    <button
                        onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                        className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-white"
                    >
                        <div className="flex justify-around">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mx-1 h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            All categories
                        </div>
                    </button>

                    <div className="mx-7 flex gap-8">
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="index.html">Home</a>
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="/product_list">Catalog</a>
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="/about">About Us</a>
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="/contact">Contact Us</a>
                    </div>

                    <div className="ml-auto flex gap-4 px-5">
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="/login">Login</a>
                        <span className="text-white">&#124;</span>
                        <a className="font-light text-white hover:text-blue-400 hover:underline" href="sign-up.html">Sign Up</a>
                    </div>
                </div>
            </nav>

            {/* Desktop dropdown menu */}
            {desktopMenuOpen && (
                <section
                    className="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white"
                    style={{ display: desktopMenuOpen ? 'block' : 'none' }}
                >
                    <div className="mx-auto flex max-w-[1200px] py-10">
                        {/* Sidebar menu categories */}
                        <div className="w-[300px] border-r">
                            <ul className="px-5">
                                <li className="flex items-center gap-2 bg-blue-400 py-2 px-3">
                                    <img width="15px" height="15px" src="./assets/images/bed.svg" alt="Bedroom icon" />
                                    Bedroom
                                    <span className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </span>
                                </li>

                                <li className="flex items-center gap-2 py-2 px-3 hover:bg-neutral-100">
                                    <img width="15px" height="15px" src="./assets/images/sleep.svg" alt="Matrass icon" />
                                    Matrass
                                    <span className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </span>
                                </li>

                                {/* Other categories */}
                            </ul>
                        </div>

                        {/* Main content */}
                        <div className="flex w-full justify-between">
                            <div className="flex gap-6">
                                {/* Subcategories */}
                                <div className="mx-5">
                                    <p className="font-medium text-gray-500">BEDS</p>
                                    <ul className="text-sm leading-8">
                                        <li><a href="product-overview.html">Italian bed</a></li>
                                        <li><a href="product-overview.html">Queen-size bed</a></li>
                                        <li><a href="product-overview.html">Wooden craft bed</a></li>
                                        <li><a href="product-overview.html">King-size bed</a></li>
                                    </ul>
                                </div>

                                {/* Other subcategories */}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BurgerMenu;
