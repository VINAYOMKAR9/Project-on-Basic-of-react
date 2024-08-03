import React from 'react'

const ProductCard = ({title,id,handleDelete}) => {
  return (
    <div style={{background:'lightgreen',margin:'10px'}}>
        <b>{id}. {title}</b>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
  )
}

export default ProductCard
