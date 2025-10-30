import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white rounded p-10">
                <div><h1 className='text-2xl font-semibold text-[#ffd337]'>Auction<span className='text-[#003ea4]'>Gallery</span></h1>
                    <h2 className='text-xl'>Bit. Win. Own</h2></div>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-black">Home</a>
                    <a className="link link-hover text-black">Auctions</a>
                    <a className="link link-hover text-black">Categories</a>
                    <a className="link link-hover text-black">How it works</a>
                </nav>

                <aside>
                    <p className='text-black'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;