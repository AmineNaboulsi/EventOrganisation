"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner";


export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isUser, setUser] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      toast.success("Password Not match!");
      setIsLoading(false)
      return
    }

    try {
      // await new Promise((resolve) => setTimeout(resolve, 500))
      const url = process.env.NEXT_PUBLIC_API_URL;
      const parametres = new FormData();
      parametres.append('name', name);
      parametres.append('email', email);
      parametres.append('password', password);
      parametres.append('role', isUser? 'user' : 'organisator');
      const res = await fetch(`${url}/signup`,{
        method : 'POST',
        body : parametres
      });
      if(!res.ok){
        toast.error("Error: our service face some issues ,please try again later");
        return ;
      }
      const data = await res.json();
      if(data.error){
        toast.error(data.error);
        return ;
      }
      router.push("/auth/signin") 
    } catch {
      toast.error("Registration failed, please try later");
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight glow">Create an account</h1>
        <p className="text-gray-400">Enter your details below to create your account</p>
      </div>
      <div className="space-y-4">
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 mt-3">
            <div className="relative grid grid-cols-1 h-8 gap-2  rounded-md w-full">
              <div className="grid grid-cols-2 items-start gap-2 text-center">
              <div className={`absolute top-0 bottom-0 bg-[#ffffffcf] ${isUser ? 'left-0' : 'left-52'} w-[50%]`}></div>
                <span 
                onClick={() => setUser(true)}
                className={`${isUser? 'text-black' : 'text-white'} z-10 cursor-pointer`}>user</span>
                <span
                onClick={() => setUser(false)}
                className={`${isUser? 'text-white' : 'text-black'} z-10 cursor-pointer`}>Organisator</span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/40 border-white/10 focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/40 border-white/10 focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/40  focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                disabled={isLoading}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-black/40 border-white/10 focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
                required
              />
            </div>
           
           
          </div>
          <Button type="submit" className="w-full bg-[#a56bf0] text-black hover:bg-[#a56bf0]/90" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-gray-400">Or continue with</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full border-white/10 hover:border-white/20 bg-black/40"
          disabled={isLoading}
          onClick={() => {
            console.log("GitHub OAuth clicked")
          }}
        >
          Google
        </Button>
      </div>
      <div className="text-center text-sm">
        <span className="text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[#a56bf0] hover:text-[#a56bf0]/90 transition-colors">
            Sign in
          </Link>
        </span>
      </div>
    </motion.div>
  )
}

