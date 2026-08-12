import React from 'react'
import { Link } from 'react-router-dom'
import { productsData } from '../components/Data'
import Personne from '../components/Personne'
import Button from '../components/Button'

const HomePage = () => {
  return (
    <div>
      <h1>Listes des mes produits</h1>
    
  <div className='flex gap-5 mb-16'>


     {productsData.map(product => (
       <Link key={product.id} className='border border-black rounded p-2' to={`/product/${product.id}`}>
         {product.name}
       </Link>
     ))}
  </div>


{/* J'affiche un button en lui envoyant les props: le titre et le style  */}
<Button title='Ajouter' style={{backgroundColor: 'green', color: 'white',padding:'20px'}} />
<Button title='Modifier' style={{backgroundColor: 'blue', color: 'white'}} />
<Button title='Supprimer' style={{backgroundColor: 'red', color: 'white'}} />

  <hr className='mt-16' /> 


{/* Faire passer le props en temps que lettre (string) */}
  <Personne lastName='Christ' city='Abidjan'  />

{/* Faire passer le props en temps que chiffre (number) */}
<Personne age={12} />

{/* Faire passer le props en temps que boolean (true/false) */}
<Personne disponible={true} />
<Personne disponible={false} />


{/* Faire passer le props en temps que tableau (array) */}
<Personne hobbies={['Lire', 'Marcher', 'Coder']} />





    </div>
  )
}

export default HomePage