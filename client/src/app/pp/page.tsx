"use client"

import Image from "next/image"
export default function SignlePage() {
  return (
    <div>
        <Image 
            width={500}
            height={500}
            className="w-full h-full blur-sm brightness-50"
            src='https://i.ibb.co/YT7KJtFB/pexels-wendywei-1190297.jpg'
            alt=""
        />
    </div>
  )
}