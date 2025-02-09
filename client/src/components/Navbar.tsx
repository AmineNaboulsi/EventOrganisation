import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-[#131415] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl glow">
              Eventler
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="/events" className="text-gray-300 hover:text-white transition duration-300">
              Events
            </Link>
            <Link href="/auth/signin">
              <Button className="text-gray-300 hover:bg-transparent bg-transparent hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-[#a56bf0] text-black hover:bg-[#6d499c]/94 rounded-md">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

