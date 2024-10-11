import React from 'react';
import { FaSearch, FaHeart, FaStar } from 'react-icons/fa'; // Thêm các biểu tượng từ react-icons
import Ao from '../../../../assets/img/cuahang.jpg'

const StarRating = ({ rating, total }) => {
    const stars = [];
    for (let i = 0; i < total; i++) {
        stars.push(
            <FaStar
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
            />
        );
    }
    return <div className="flex items-center">{stars}<p className="text-sm text-gray-400">(38)</p></div>;
};

const ProductRecent = () => {
    return (
        <>
            <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p>
            <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
                <div className="flex flex-col">
                    <div className="relative flex">
                        <img className="mx-auto" alt='' src={Ao} />
                        <div className="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
                            <a href="product-overview.html">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                                    <FaSearch className="h-4 w-4" />
                                </span>
                            </a>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                                <FaHeart className="h-4 w-4" />
                            </span>
                        </div>
                        <div className="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
                            <p className="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
                        </div>
                    </div>

                    <div>
                        <p className="mt-2">CHAIR</p>
                        <p className="font-medium text-violet-900">$45.00 <span className="text-sm text-gray-500 line-through">$500.00</span></p>
                        <StarRating rating={4} total={5} />
                        <button className="my-5 h-10 w-full bg-violet-900 text-white">Add to cart</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductRecent;
