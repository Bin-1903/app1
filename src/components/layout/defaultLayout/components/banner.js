import React from 'react'
import bannerImage from '../../../../assets/img/banner gucci.jpg'

const Banner = () => {
    return (
        <div className="relative">
            <img
                className="w-full object-cover brightness-50 filter lg:h-[500px]"
                src={bannerImage}
                alt=''
            />

            <div
                className="absolute top-1/2 left-1/2 mx-auto flex w-11/12 max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col text-center text-white lg:ml-5"
            >
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-left">
                    Content
                </h1>
                <p className="pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-left lg:text-base">
                    Des
                </p>
                <button
                    className="mx-auto mt-5 w-1/2 bg-blue-400 px-3 py-1 text-black duration-100 hover:bg-blue-400 lg:mx-0 lg:h-10 lg:w-2/12 lg:px-10"
                >
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Banner
