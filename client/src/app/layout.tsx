import "./globals.css"

import type React from "react"
import { Toaster } from "sonner";
import ClientNavigation from '../components/ClientNavigation'

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
    <body className="flex flex-col min-h-screen bg-black text-white">
      <ClientNavigation childrenA={children} />
      <Toaster />
    </body>
  </html>
  )
}

