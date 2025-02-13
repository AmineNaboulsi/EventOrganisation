"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner";
import Cookies from 'js-cookie';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      // await new Promise((resolve) => setTimeout(resolve, 500))
      const url = process.env.NEXT_PUBLIC_API_URL;
      const parametres = new FormData();
      parametres.append('email', email);
      parametres.append('password', password);
      const res = await fetch(`${url}/signin`,{
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
      toast.error(data.message);
      Cookies.set('authtoken', data.token, { expires: 1 });
      if(data.role=="organisator") router.push("/dashboard")
      else if(data.role=="admin") router.push("/admin")
      else router.push("/events")
    } catch {
      toast.error("Login failed, please try later");
    } finally{
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
        <h1 className="text-3xl font-bold tracking-tight glow">Welcome back</h1>
        <p className="text-gray-400">Enter your email to sign in to your account</p>
      </div>
      <div className="space-y-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
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
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/40 border-white/10 focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Button type="submit" className="w-full bg-[#a56bf0] text-black hover:bg-[#a56bf0]/90" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
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
        <Link href="/auth/forgot-password" className="text-gray-400 hover:text-[#a56bf0] transition-colors">
          Forgot your password?
        </Link>
      </div>
      <div className="text-center text-sm">
        <span className="text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-[#a56bf0] hover:text-[#a56bf0]/90 transition-colors">
            Sign up
          </Link>
        </span>
      </div>
    </motion.div>
  )
}

