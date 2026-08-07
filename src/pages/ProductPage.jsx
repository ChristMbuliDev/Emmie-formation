import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsData } from '../components/Data'

const ProductPage = () => {

  // recuprer l'id dans l'url
  const {productId} = useParams()

  //chercher le produit correspondant a l'id
  const product = productsData.find((item) => item.id == productId)

  //si aucun produit avec cet id n'est trouvé 
  if (!product) {
    return (
      <div>
        <h1>Produit non trouvé</h1>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    <div>
        <h1>Page details Produit</h1>
       
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        
        
    </div>
  )
}

export default ProductPage