"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"


type Props = {
    params: {
      id: string
    }
}
type EventType = {
    id: number,
    title: string,
    datetime: string,
    description: string,
    location: string,
    image: string,
    category: string,
    places: number,
}

export default function EventPage({ params }: Props) {
    //Event state
    const [Event , setEvent] = useState<EventType | undefined >(undefined);
    const [isFound , setFound] = useState(true);

    //Fetch for events by id
    const GetEvent = async () => {
        
        const url = process.env.NEXT_PUBLIC_API_URL;
        // await new Promise((resolve)=>{
        //     setTimeout(resolve,5000)
        // })
        //Paramteres
        const parametres = new URLSearchParams();
        const eventid = params?.id ;
        parametres.append('id' , eventid );

        const res = await fetch(`${url}/event?${parametres.toString()}`,{
            method: 'GET',
        });
        if(!res.ok){
            return;
        }
        const data = await res.json()
        if(data!=false){
            setEvent(data);
        }else{
            setFound(false)
        }
    }

    //Initialisation
    useEffect(()=>{
        GetEvent();
    },[])
  return (
    <div className="min-h-screen py-12">
        {Event == undefined ? 
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 col-span-4 py-20">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="animate-spin text-center justify-self-center will-change-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            </motion.div>
        :
        <>
        {
            <>{
                isFound? 
                (
                    <div className="max-w-7xl mx-auto px-4">
            <Image 
                src={Event?.image ?? ''}
                width={500}
                height={500}
                className="fixed inset-0 z-[-1] w-full h-full blur-sm brightness-50"
                alt=""
            />
                    <main className="flex-grow py-12 bg-gradient-to-b  via-purple-900/10 to-black">
                            <div className="max-w-7xl mx-auto px-4"></div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                                        <Image 
                                            width={500}
                                            height={500}
                                            src={Event?.image} 
                                            alt="Event Image" 
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute top-4 right-4 bg-[#00E599]/90 text-black px-4 py-2 rounded-full backdrop-blur-sm font-semibold">
                                            {Event?.category}
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                                            <span className="text-2xl font-bold text-white">FREE </span>
                                            <span className="text-white/70">/person</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                                        <div className="space-y-4">
                                        <motion.h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-pink-500 bg-clip-text text-transparent"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}>
                                                    {Event?.title}
                                                </motion.h1>
                                            <div className="flex flex-wrap gap-6 text-gray-300">
                                                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                                                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                                                    </svg>
                                                    {Event?.datetime}
                                                </div>
                                                <div className="flex items-center bg-white/5 px-4 py-2 rounded-full">
                                                    <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                                                    </svg>
                                                    {Event?.location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-white/10 pt-6">
                                            <h3 className="text-xl font-semibold mb-4 text-purple-400">About Event</h3>
                                            <p className="text-gray-300 leading-relaxed">{Event?.description}</p>
                                        </div>

                                        <div className="border-t border-white/10 pt-6">
                                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Available Places</h3>
                                            <div className="bg-white/5 p-4 rounded-xl">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-300">Remaining seats:</span>
                                                    <span className="text-2xl font-bold text-white">{Event?.places}</span>
                                                </div>
                                                <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <div id="pbar" className="h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/payment?eventId=event.id"><button  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold transition duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                                            Book Now
                                        </button></a>
                                    </div>
                                </div>
                    </main>
                </div>
                )
                :
                (
                    //Event not found
                    <div className="flex justify-center items-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            The Event you looking for is not found or was deleted.
                            </motion.p>
                    </div>
                )
            }</>
        }
        </>
        }
    </div>
  )
}