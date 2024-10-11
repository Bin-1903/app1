import React from 'react'
import Ao from '../../../../assets/img/cuahang.jpg'


const Category = () => {
    return (
        <>
            <h2 className="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATEGORY</h2>

            <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Ao
                        </p>
                    </div>
                </a>

                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Matrass
                        </p>
                    </div>
                </a>

                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Outdoor
                        </p>
                    </div>
                </a>

                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Sofa
                        </p>
                    </div>
                </a>

                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Kitchen
                        </p>
                    </div>
                </a>

                <a href="/">
                    <div className="relative cursor-pointer">
                        <img
                            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
                            src={Ao}
                            alt='' />
                        <p className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
                            Living room
                        </p>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Category
