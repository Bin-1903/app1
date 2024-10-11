import React from 'react'
import Infor from './Infor'
import Order from './Order'

const Account = () => {
    return (
        <section
            class="container mx-auto w-full flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
        >
            <Infor />
            <Order />
        </section>
    )
}

export default Account
