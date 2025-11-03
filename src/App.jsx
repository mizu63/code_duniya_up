import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Catagory from './Components/Catagory'
import CrouseList from './Components/CrouseList'
function App() {
  return (
    <div>
     <Header/>
     <Banner/>
     <div className='relative'>
<Catagory/>
     </div>
     <CrouseList/>
     
    </div>
  )
}

export default App
