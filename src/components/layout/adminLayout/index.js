import React from 'react'
import AdSidebar from './components/adSidebar'
import AsNav from './components/Nav'

const AdminLayout = ({ children }) => {
    return (
        <div class="flex min-h-screen 2xl:max-w-7xl 2xl:mx-auto 2xl:border-x-2 2xl:border-indigo-50 ">
            <AdSidebar />

            <main class="bg-indigo-50/60 w-full py-10 px-3 sm:px-10">
                <AsNav />
                {children}
            </main>

        </div>
    )
}

export default AdminLayout
