'use client'

import { useRouter } from "next/navigation"

export default function OrderProduct(){
const router=useRouter()
    const handleClick=()=>{
        console.log('placing your order')
        router.push('/')
    }
  return (
    <div>
        <h1>order product</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>place order</button>
    </div>
  )
}
