import React from 'react'

const Review = ({params}:{
    params:
    {reviewId:string,productId:string}}) => {
  return (
    <div>Review {params.reviewId} of product {params.productId}</div>
  )
}

export default Review