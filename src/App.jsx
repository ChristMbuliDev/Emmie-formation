import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/product/:productId" element={<ProductPage />} />
       <Route path="/cart" element={<CartPage />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App