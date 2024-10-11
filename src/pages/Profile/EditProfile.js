import React, { useState } from 'react';
import Infor from './Infor';

const EditProfile = () => {
    const [firstName, setFirstName] = useState('Sarah');
    const [lastName, setLastName] = useState('Johnson');
    const [bio, setBio] = useState('CEO, MayBell Inc.');
    const [avatar, setAvatar] = useState('./assets/images/avatar-photo.png');

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement save logic here
        console.log('Profile saved:', { firstName, lastName, bio, avatar });
    };

    return (
        <section
            class="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
        >
            <Infor />

            <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
                <div className="py-5">
                    <div className="w-full">
                        <h2>Avatar image</h2>
                        <div className="mx-auto mb-5 flex flex-row items-center bg-neutral-100 py-5 lg:mx-0 lg:w-1/2">
                            <img className="ml-5 h-20 w-20 rounded-full" src={avatar} alt={`${firstName} ${lastName}`} />

                            <form>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        type="file"
                                        className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                                        onChange={handleAvatarChange}
                                        accept="image/*"
                                    />
                                </label>
                            </form>
                        </div>
                    </div>

                    <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
                        <div className="flex w-full flex-col">
                            <label htmlFor="firstName" className="flex">
                                First Name
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                id="firstName"
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Sarah"
                                required
                            />
                        </div>

                        <div className="flex w-full flex-col">
                            <label htmlFor="lastName" className="flex">
                                Last Name
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                id="lastName"
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Johnson"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                className="w-full border px-4 py-2 text-gray-500 outline-none lg:w-1/2"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows="5"
                                placeholder="Write a short bio"
                            />
                        </div>

                        <button className="mt-4 w-40 bg-violet-900 px-4 py-2 text-white" type="submit">
                            Save changes
                        </button>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default EditProfile;
