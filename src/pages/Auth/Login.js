import React from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import các biểu tượng
// import Logo from '../../../../assets/img/logo.png'; // Giả sử bạn có logo ở đây

const Login = () => {
    return (
        <>
            <div className="flex justify-center items-center p-8">

                <div className="border p-6 rounded-lg shadow-md max-w-sm w-full border-zinc-300 bg-white">
                    <div className="flex items-center justify-center mb-6">
                        {/* <img src={Logo} alt="Logo" className="w-16 h-auto mr-4" /> */}
                        <div className="text-lg">
                            <span className="text-custom-red font-bold">H2H Tech</span>{" "}
                            <span className="font-semibold text-zinc-900">Energy</span>
                        </div>
                    </div>
                    <form className="flex flex-col space-y-4">
                        <label htmlFor="username" className="text-black">
                            Username:
                        </label>
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                            id="username"
                            autoComplete="off"
                            className="px-4 py-2 border rounded-lg border-zinc-400 bg-white text-black"
                            required
                        />
                        <label htmlFor="password" className="text-black">
                            Password:
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                className="px-4 py-2 border rounded-lg w-full border-zinc-400 bg-white text-black"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-2"
                                aria-label="Show password"
                            >
                                <FaEye size={20} />
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="text-center mt-4 text-black">
                        Don't have an account?{" "}
                        <a href="/register" className="text-blue-500">
                            Sign up
                        </a>
                    </div>
                    <div className="text-center mt-2 text-black">
                        Forgot your password?{" "}
                        <a href="/password/reset/" className="text-blue-500">
                            Reset it
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
