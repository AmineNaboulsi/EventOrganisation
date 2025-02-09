"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  // const { toast } = useToast()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      // toast({
      //   title: "Error",
      //   description: "Passwords do not match.",
      //   variant: "destructive",
      // })
      setIsLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Registered with:", { name, email, password })
      // toast({
      //   title: "Success",
      //   description: "Your account has been created. Please check your email to verify your account.",
      // })
      router.push("/signin") 
    } catch (error) {
      console.error("Registration failed:", error)
      // toast({
      //   title: "Error",
      //   description: "Failed to create account. Please try again.",
      //   variant: "destructive",
      // })
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
          <div className="grid gap-4">
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

