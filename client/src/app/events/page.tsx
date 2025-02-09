"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from 'next/image'

type EventType = {
    id: number,
    title: string,
    date: string,
    location: string,
    image: string,
    category: string,
}


export default function EventsPage() {
      const [ events ,  setevents] = useState<EventType[]>([]);
      setTimeout(() => {
      setevents([
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
      ]);
    }, 1000);
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
          {(events && events.length> 0) ? events.map((event, index) => (
            <motion.div
              key={`event ${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gradient-border group cursor-pointer"
            >
              <Link href={`/events/${event.id}`}>
                <div  className="p-4 space-y-4">
                  <div className="relative h-48 overflow-hidden rounded">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={500}
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
          )) : 
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 col-span-4 py-20">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="animate-spin text-center justify-self-center will-change-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
         </motion.div>
          }
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

