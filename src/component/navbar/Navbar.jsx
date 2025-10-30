import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='navbar flex justify-between w-11/12 mx-auto items-center py-4'>
            <div>
                <h1 className='text-2xl font-semibold text-[#ffd337]'>Auction<span className='text-[#003ea4]'>Gallery</span></h1>
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Categories</li>
                    <li>How it works</li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <IoNotificationsOutline className='text-2xl' />
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;