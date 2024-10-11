import React from 'react'
import Nav from './components/nav'
import BurgerMenu from './components/burgerMenu'
import Footer from './components/Footer'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Nav />
            <BurgerMenu />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
