import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../components/Data'

const HomePage = () => {
  return (
    <div>
      <h1>Listes des mes produits</h1>
    
  <div className='flex gap-5'>


     {productsData.map(product => (
       <Link key={product.id} className='border border-black rounded p-2' to={`/product/${product.id}`}>
         {product.name}
       </Link>
     ))}
  </div>
    </div>
  )
}

export default HomePage