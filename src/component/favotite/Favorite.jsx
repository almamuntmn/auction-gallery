import React from 'react';
import { GrClose } from "react-icons/gr";

const Favorite = ({ favoriteAuction, handleRemoveAuctions }) => {

    const { title, currentBidPrice, image, bidsCount, id } = favoriteAuction;
    console.log('Favorite component rendered with auctionId:', favoriteAuction, handleRemoveAuctions);
    return (
        <div className='flex justify-between items-center'>
            <div className='flex mb-3 items-center gap-4 mt-3'>
                <img className='w-24 h-24 rounded-2xl' src={image} alt="" />
                <div>
                    <h1 className='text-xl'>{title}</h1>
                    <div className='flex gap-10 mt-2'>
                        <h1 className='text-gray-600'>${currentBidPrice}</h1>
                        <h1 className='text-gray-600'>Bids: {bidsCount}</h1>
                    </div>
                </div>
            </div>
            <GrClose onClick={() => { handleRemoveAuctions(id) }} />
        </div>
    );
};

export default Favorite;