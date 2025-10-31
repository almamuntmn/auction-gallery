import React, { use, useState } from 'react';
import Auction from './Auction';
import { FaRegHeart } from "react-icons/fa";
import Favorite from '../favotite/Favorite';

const Auctions = ({ auctionsPromise }) => {


    const auctions = use(auctionsPromise)

    const [favoriteAuctions, setFavoriteAuctions] = useState([]);
    const [favBidPrice, setFavBidPrice] = useState(0);

    const handleFavorite = (auctions, currentBidPrice) => {
        const newFavoriteAuctions = ([...favoriteAuctions, auctions])
        if (favoriteAuctions.find(a => a.id === auctions.id)) return
        setFavoriteAuctions(newFavoriteAuctions)
        const newPrice = (favBidPrice + currentBidPrice)
        setFavBidPrice(newPrice);
    }

    const handleRemoveAuctions = (id) => {
        const auctionToRemove = favoriteAuctions.find((a) => a.id === id);
        console.log(auctionToRemove);
        if (!auctionToRemove) return;

        const remainingAuctions = favoriteAuctions.filter((a) => a.id !== id);
        setFavoriteAuctions(remainingAuctions);

        // Subtract this item's currentBidPrice from total
        setFavBidPrice(prev => prev - auctionToRemove.currentBidPrice);
    };


    return (
        <div className='bg-gray-100 mt-12'>
            <div className='w-11/12 mx-auto py-8'>
                <h1 className='text-3xl text-semibold'>Active Auctions</h1>
                <p className='mb-8'>Discover and bid on extraordinary items</p>
                <div className='flex gap-8'>
                    <div className='w-[70%] bg-white rounded-lg p-5'>
                        <div>
                            {/* head */}
                            <div>
                                <div className='text-black flex justify-between border-b border-gray-300 pb-4 mx-12 mb-4'>
                                    <h2>Items</h2>
                                    <ul className='flex gap-27'>
                                        <li>Current Bid</li>
                                        <li>Time Left</li>
                                        <li>Bids Now</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {
                            auctions.map(auction => <Auction handleFavorite={handleFavorite} handleRemoveAuctions={handleRemoveAuctions} key={auction.id} auction={auction} />)
                        }
                    </div>
                    <div className='w-[30%] h-fit bg-white rounded-lg p-5'>
                        <div className='flex items-center justify-center gap-4 border-b border-gray-300 pb-4'>
                            <FaRegHeart className='text-2xl' />
                            <h2 className='text-2xl font-semibold'>Favorite Items</h2>
                        </div>
                        {
                            favoriteAuctions.length === 0 ? (
                                <div className=''><p className='mt-4 text-lg text-center'>No favorite items yet.</p>
                                    <p className='text-center text-sm'>Click the heart icon on any item to add it to your favorites</p>
                                </div>
                            ) : (
                                favoriteAuctions.map((favoriteAuction, index) => (
                                    <Favorite key={index} handleRemoveAuctions={handleRemoveAuctions} favoriteAuction={favoriteAuction} />
                                ))
                            )
                        }
                        <div className='flex justify-between items-center border-t-2 border-gray-200 mt-10 py-4'>
                            <h1 className='text-lg'>Total bids Amount</h1>
                            <h1 className='text-lg'>${favBidPrice}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;