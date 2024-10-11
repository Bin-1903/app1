import React from 'react'

const Order = () => {
    return (
        <section
            className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3"
        >
            <div className="">
                <div className="border py-5 shadow-md">
                    <div className="flex justify-between px-4 pb-5">
                        <p className="font-bold">Personal Profile</p>
                        <a
                            className="text-sm text-violet-900"
                            href="profile-information.html"
                        >Edit</a
                        >
                    </div>

                    <div className="px-4">
                        <p>Sarah Johnson</p>
                        <p>sarah@yandex.com</p>
                        <p>20371</p>
                        <p className="">1223 3432 3344 0082</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="border py-5 shadow-md">
                    <div className="flex justify-between px-4 pb-5">
                        <p className="font-bold">Shipping Address</p>
                        <a className="text-sm text-violet-900" href="manage-address.html"
                        >Edit</a
                        >
                    </div>

                    <div className="px-4">
                        <p>Sarah Johnson</p>
                        <p>Belgrade, Serbia</p>
                        <p>20371</p>
                        <p>1223 3432 3344 0082</p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="border py-5 shadow-md">
                    <div className="flex justify-between px-4 pb-5">
                        <p className="font-bold">Billing Address</p>
                        <a className="text-sm text-violet-900" href="/">Edit</a>
                    </div>

                    <div className="px-4">
                        <p>Sarah Johnson</p>
                        <p>Belgrade, Serbia</p>
                        <p>20371</p>
                        <p>1223 3432 3344 0082</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order
