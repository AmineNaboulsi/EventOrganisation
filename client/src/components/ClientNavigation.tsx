// components/ClientNavigation.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from "./Footer"

export default function ClientNavigation({childrenA}:any) {
  const pathname = usePathname()
  
  return (
    <>
      {pathname !== '/dashboard' ?
      (
          <>
          <Navbar />
                <main className="flex-grow">{childrenA}</main>
          <Footer />
          </>
      ):
      <>{childrenA}</>
      }
    </>
  )
}