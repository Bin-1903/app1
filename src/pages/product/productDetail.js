import React from 'react';
import { FaStar, FaStarHalfAlt, FaHeart, FaShoppingCart, FaLock } from 'react-icons/fa';

const ProductDetail = () => {
    return (
        <>
            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                <div className="container mx-auto px-4">
                    <img className="w-full" src="./assets/images/product-bigsofa.png" alt="Sofa image" />

                    <div className="mt-3 grid grid-cols-4 gap-4">
                        <div>
                            <img className="cursor-pointer" src="./assets/images/kitchen.png" alt="kitchen image" />
                        </div>
                        <div>
                            <img className="cursor-pointer" src="./assets/images/living-room.png" alt="living room image" />
                        </div>
                        <div>
                            <img className="cursor-pointer" src="./assets/images/outdoors.png" alt="outdoor image" />
                        </div>
                        <div>
                            <img className="cursor-pointer" src="./assets/images/product-chair.png" alt="chair image" />
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-5 lg:px-5">
                    <h2 className="pt-3 text-2xl font-bold lg:pt-0">BIG ITALIAN SOFA</h2>
                    <div className="mt-1 flex items-center">
                        {/* React icons for ratings */}
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStarHalfAlt className="text-gray-200" />
                        <p className="ml-3 text-sm text-gray-400">(150 reviews)</p>
                    </div>

                    <p className="mt-5 font-bold">
                        Availability: <span className="text-green-600">In Stock</span>
                    </p>
                    <p className="font-bold">Brand: <span className="font-normal">Apex</span></p>
                    <p className="font-bold">Category: <span className="font-normal">Sofa</span></p>
                    <p className="font-bold">SKU: <span className="font-normal">BE45VGTRK</span></p>

                    <p className="mt-4 text-4xl font-bold text-violet-900">
                        $450 <span className="text-xs text-gray-400 line-through">$550</span>
                    </p>

                    <p className="pt-5 text-sm leading-5 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                        exercitationem voluptate sint eius ea assumenda provident eos
                        repellendus qui neque! Velit ratione illo maiores voluptates commodi
                        eaque illum, laudantium non!
                    </p>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Size</p>
                        <div className="flex gap-1">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <div
                                    key={size}
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Color</p>
                        <div className="flex gap-1">
                            {['bg-gray-600', 'bg-violet-900', 'bg-red-900'].map((color) => (
                                <div
                                    key={color}
                                    className={`h-8 w-8 cursor-pointer border border-white ${color} focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Quantity</p>
                        <div className="flex">
                            <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                &minus;
                            </button>
                            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">1</div>
                            <button className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                &#43;
                            </button>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-row items-center gap-6">
                        <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                            <FaShoppingCart className="mr-3 h-4 w-4" />
                            Add to cart
                        </button>
                        <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
                            <FaHeart className="mr-3 h-4 w-4" />
                            Wishlist
                        </button>
                    </div>
                </div>
            </section>

            <section className="container mx-auto max-w-[1200px] px-5 py-5 lg:py-10">
                <h2 className="text-xl">Product details</h2>
                <p className="mt-4 lg:w-3/4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                    consequatur temporibus deserunt id labore. Et, iusto nostrum repellat
                    laudantium iure fuga quibusdam laborum laboriosam earum. Fugit
                    possimus impedit harum dolor? <br />
                    Laboriosam quo impedit, reprehenderit eum eaque eius tempore non
                    blanditiis, labore quibusdam nesciunt atque doloribus cum autem?
                    <br />
                    Autem magni ullam alias pariatur corporis officiis animi neque, quo,
                    ab aperiam ratione! Similique deserunt dolore dignissimos, iure
                    quisquam mollitia perferendis pariatur reprehenderit dolorem, cum enim
                    aut ad amet in ducimus sint, commodi neque quis saepe libero dolor
                    dolores. Sequi voluptas adipisci minus!
                </p>

                <table className="mt-7 w-full table-auto divide-x divide-y lg:w-1/2">
                    <tbody className="divide-x border">
                        <tr>
                            <td className="border pl-4 font-bold">Color</td>
                            <td className="border pl-4">Black, Brown, Red</td>
                        </tr>
                        <tr>
                            <td className="border pl-4 font-bold">Material</td>
                            <td className="border pl-4">Latex</td>
                        </tr>
                        <tr>
                            <td className="border pl-4 font-bold">Weight</td>
                            <td className="border pl-4">55 Kg</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default ProductDetail;
