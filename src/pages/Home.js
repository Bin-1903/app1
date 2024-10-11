import React from 'react'
import Banner from '../components/layout/defaultLayout/components/banner'
import Sup from '../components/layout/defaultLayout/components/sup'
import Category from '../components/layout/defaultLayout/components/Category'
import ProductRecent from '../components/layout/defaultLayout/components/ProductRecent'

const Home = () => {
    return (
        <div>
            <Banner />
            <Sup />
            <Category />
            <ProductRecent />
        </div>
    )
}

export default Home
