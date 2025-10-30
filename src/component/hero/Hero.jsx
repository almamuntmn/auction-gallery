import React from 'react';
import Banner from '../../assets/Banner-min.jpg'

const Hero = () => {
    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundImage: `url(${Banner})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="text-neutral-content my-[100px] w-11/12 mx-auto flex items-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-medium">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn btn-default bg-white text-black rounded-full px-6">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;