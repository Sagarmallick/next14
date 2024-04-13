import React from 'react'

const Product = ({params}:{params:{productId:string}}) => {
  return (
    <div>Product list {params.productId}</div>
  )
}

export default Product