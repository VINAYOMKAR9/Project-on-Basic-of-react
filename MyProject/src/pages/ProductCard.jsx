import React from 'react'

const ProductCard = ({title,id}) => {
  return (
    <div style={{background:'lightgreen',margin:'10px'}}>
        <b>{id}. {title}</b>
        </div>
  )
}

export default ProductCard
