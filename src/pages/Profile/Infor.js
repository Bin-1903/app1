import React from 'react';

const Infor = () => {
    return (
        <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
            <div className="border-b py-5">
                <div className="flex items-center">
                    <img
                        width="40px"
                        height="40px"
                        className="rounded-full object-cover"
                        src="./assets/images/avatar-photo.png"
                        alt="Hình người phụ nữ đỏ"
                    />
                    <div className="ml-5">
                        <p className="font-medium text-gray-500">Xin chào,</p>
                        <p className="font-bold">Sarah Johnson</p>
                    </div>
                </div>
            </div>

            <div className="flex border-b py-5">
                <div className="w-full">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-2">
                            <a
                                href="/"
                                className="flex items-center gap-2 font-medium text-violet-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                                Quản lý tài khoản</a
                            >
                            <a
                                href="/edit_profile"
                                className="active:blue-900 text-gray-500 duration-100 hover:text-yellow-400"
                            >Thông tin cá nhân</a
                            >

                            <a
                                href="/change_password"
                                className="text-gray-500 duration-100 hover:text-yellow-400"
                            >Đổi mật khẩu</a
                            >
                        </div>
                    </div>
                </div>
            </div>





            <div className="flex border-b py-5">
                <div className="flex w-full">
                    <div className="flex flex-col gap-2">
                        <a
                            href="wishlist.html"
                            className="flex items-center gap-2 font-medium active:text-violet-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>

                            Danh sách yêu thích</a
                        >
                    </div>
                </div>
            </div>

            <div className="flex py-5">
                <div className="flex w-full">
                    <div className="flex flex-col gap-2">
                        <a
                            href="/"
                            className="flex items-center gap-2 font-medium active:text-violet-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                />
                            </svg>

                            Đăng xuất</a
                        >
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Infor;
