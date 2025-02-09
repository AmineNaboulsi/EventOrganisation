import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Eventler",
    description: "Book now you favourite events on our platform.",
    keywords: ["events" , "book", "platform"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-black text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

