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
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Auctions auctionsPromise={auctionsPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
