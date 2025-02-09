import "./globals.css"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import type React from "react"


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
      <body className={`flex flex-col min-h-screen bg-black text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

