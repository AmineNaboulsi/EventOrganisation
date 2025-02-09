"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    // Add your password reset logic here
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000) // Simulate API call
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight glow">Reset password</h1>
        <p className="text-gray-400">Enter your email address and we&apos;ll send you a link to reset your password</p>
      </div>
      {!isSubmitted ? (
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
              className="bg-black/40 border-white/10 focus:border-[#a56bf0]/50 focus:ring-[#a56bf0]/50"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#a56bf0] text-black hover:bg-[#a56bf0]/90" disabled={isLoading}>
            {isLoading ? "Sending link..." : "Send Reset Link"}
          </Button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#a56bf0]/10 rounded-lg text-center"
        >
          <p className="text-[#a56bf0]">Check your email for a link to reset your password.</p>
        </motion.div>
      )}
      <div className="text-center text-sm">
        <Link href="/auth/signin" className="text-gray-400 hover:text-[#a56bf0] transition-colors">
          Back to sign in
        </Link>
      </div>
    </motion.div>
  )
}

