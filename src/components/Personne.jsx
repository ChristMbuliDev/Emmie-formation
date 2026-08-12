import React from 'react'

const Personne = (props) => {

  console.log(props);
  
  return (
   <>
   <h1>Bonjour {props.lastName} vit à {props.city} et j'ai {props.age} ans 
    {props.disponible ? 'Disponible' : 'Non disponible'} 
      

   </h1>
    <ul>
        {props.hobbies?.map(hobby => <li>{hobby}</li>)}
    </ul>
   </>
  ) 
}

export default Personne