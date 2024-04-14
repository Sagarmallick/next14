import { Metadata } from "next"

type Props={
  params:{
    productId:string
  }
}

export const generateMetadata= async({params}:Props):Promise<Metadata>=>{

  const title= await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iphone ${params.productId}`)
    },1000)
  })

return{
  title:`product ${title}`
}
}

const Product = ({params}:Props) => {
  return (
    <div>Product list {params.productId}</div>
  )
}

export default Product