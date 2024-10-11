import React from 'react'
import ProductSidebar from './ProductSidebar'
import ProductList from './ProductList'

const Product = () => {
    return (
        <section
            className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
        >
            <ProductSidebar />
            <ProductList />
        </section>
    )
}

export default Product
