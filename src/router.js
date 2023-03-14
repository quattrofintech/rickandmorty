import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Character from './pages/character/Character'
import Characters from './pages/characters/Characters'
import Episodes from './pages/episodes/Episodes'
import Home from './pages/home/Home'
import Location from './pages/location/Location'
import Locations from './pages/locations/Locations'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/character/:id' element={<Character />} />
            <Route path='/locations/' element={<Locations />} />
            <Route path='/location/:id' element={<Location />} />
            <Route path='/episodes/' element={<Episodes />} />
            <Route path='/episode/:id' element={<Character />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router