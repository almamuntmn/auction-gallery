import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Auction = ({ auction, handleFavorite }) => {

    const { title, currentBidPrice, timeLeft, image } = auction;

    const [isFav, setIsFav]= useState(false);
    const toggleFav=()=>{
        if(!isFav){
            handleFavorite(auction, currentBidPrice);
        }
        setIsFav(!isFav);
    }
    return (
        <div className='mx-auto'>
            <div className="overflow-x-auto rounded-box border border-base-content/5">
                <div className="div">
                    <div>
                        {/* row */}
                        <div className='text-black flex justify-between items-center mx-4 border-b border-gray-300 pb-4 mb-4'>
                            <div>
                                <div><img className='w-24 h-24 rounded-xl' src={image} alt="" /></div>
                                <div className='text-lg font-normal'>{title}</div>
                            </div>
                            <div className='flex gap-28 items-center mx-10'>
                                <div className='text-lg font-normal'>{currentBidPrice}</div>
                                <div className='text-lg font-normal'>{timeLeft} left</div>
                                <div onClick={toggleFav} className='mr-5 text-xl'>
                                    {isFav?(<FaHeart className='text-red-700' />):(<FaRegHeart />)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;