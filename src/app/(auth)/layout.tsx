'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navlinks=[
    {name:'sign in',href:'/signin'},
    {name:'sign out',href:'/signout'},
    {name:'forget password',href:'/password'}
]

const AuthLayout = ({children}:{children:React.ReactNode}) => {
    const pathname=usePathname()
    return (
        <div>
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