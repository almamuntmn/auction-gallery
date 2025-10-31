import { Suspense } from 'react'
import './App.css'
import Hero from './component/hero/Hero'
import Navbar from './component/navbar/Navbar'
import Auctions from './component/body/Auctions'
import Footer from './component/Footer/Footer'

function App() {

  const auctionsPromise = fetch('/Bid.json').then(res => res.json())

  


  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className='h-screen flex flex-col justify-center items-center'><h1 className='mb-5'>Auction Data Loading</h1><span className="loading loading-ring loading-xl"></span></div>}>
        <Auctions auctionsPromise={auctionsPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
