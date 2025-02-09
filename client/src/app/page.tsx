"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold tracking-tight glow"
          >
            Experience Events
            <br />
            Like Never Before
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Discover and attend amazing events in your area. From tech conferences to music festivals, find your next
            unforgettable experience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Button asChild className="bg-[#a56bf0] text-black hover:bg-[#a56bf0]/105 h-12 px-8 text-lg">
              <Link href="/events">Explore Events</Link>
            </Button>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

