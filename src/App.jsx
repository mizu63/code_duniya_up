import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Catagory from './Components/Catagory'
import CrouseList from './Components/CrouseList'
import Review from "./Components/Review"
import About from "./Components/About"
import Sectionvideo from "./Components/Sectionvideo"
import Information from "./Components/Information"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
     <Header/>
     <Banner/>
     <div className='relative'>
<Catagory/>
     </div>
     <CrouseList/>
     <Review/>
     <About/>
     <Sectionvideo/>
     <Information/>
     <Footer/>
    </div>
  )
}

export default App
