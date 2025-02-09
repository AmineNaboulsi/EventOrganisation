"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "UM6P Party",
    date: "2023-09-15",
    location: " , Mar",
    image: "https://i.ibb.co/YT7KJtFB/pexels-wendywei-1190297.jpg",
    category: "Party & Tech",
  },
  {
    id: 2,
    title: "Music Festival",
    date: "2023-10-01",
    location: "Austin, TX",
    image: "https://i.ibb.co/m59t6S3C/pexels-joshsorenson-976866.jpg",
    category: "Music",
  },
  {
    id: 3,
    title: "Amine's engaged",
    date: "2023-11-05",
    location: "engaged married event",
    image: "https://i.ibb.co/tMHndMZ6/pexels-asadphoto-169198.jpg",
    category: "married",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow">Upcoming Events</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through our curated list of upcoming events and secure your spot today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border group cursor-pointer"
            >
              <Link href={`/events/${event.id}`}>
                <div className="p-4 space-y-4">
                  <div className="relative h-48 overflow-hidden rounded">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute top-2 right-2 z-20 bg-[#00E599]/90 text-black px-2 py-1 rounded text-sm">
                      {event.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-[#a56bf0] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{event.date}</p>
                    <p className="text-gray-400">{event.location}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Button variant="outline" className="border-[#00E599]/20 hover:border-[#00E599]/40">
            Previous
          </Button>
          <Button variant="outline" className="border-[#00E599]/20 hover:border-[#00E599]/40">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

