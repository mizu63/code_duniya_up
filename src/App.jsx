import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Catagory from './Components/Catagory'
import CrouseList from './Components/CrouseList'
import Review from "./Components/Review"
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
    </div>
  )
}

export default App
