'use client'

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navlinks=[
    {name:'sign in',href:'/signin'},
    {name:'sign out',href:'/signout'},
    {name:'forget password',href:'/password'}
]



const AuthLayout = ({children}:{children:React.ReactNode}) => {
    const [input, setInput]=useState('')

    const pathname=usePathname()
    return (
        <div>
            <div>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 value={input} onChange={(e)=>setInput(e.target.value)} />
            </div>
        {navlinks.map((link)=>{
        const isActive= pathname.startsWith(link.href)
            return(
                <Link className={isActive?'text-bold ':'text-blue-400'} href={link.href} key={link.name}>{link.name}</Link>
            )
        })}
      <div>
          {children}
          <h2>product Layouts</h2>
      </div>
        </div>

    )
  }
  
  export default AuthLayout