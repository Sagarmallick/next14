import React from 'react'
import { notFound } from 'next/navigation'
const Review = ({params}:{
    params:
    {reviewId:string,productId:string}}) => {
        if(parseInt(params.reviewId)>1000){
            notFound()
        }
  return (
    <div>Review {params.reviewId} of product {params.productId}</div>
  )
}

export default Review