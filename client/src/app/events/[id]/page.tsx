"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


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
}

export default function EventPage({ params }: Props) {
    //Event state
    const [Event , setEvent] = useState<EventType>();
    const [isFound , setFound] = useState(true);

    //Fetch for events by id
    const GetEvent = async () => {
        
        const url = process.env.NEXT_PUBLIC_API_URL;

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
        {isFound ? 
        <div className="max-w-7xl mx-auto px-4">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold tracking-tight glow">
                {Event?.title}
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {Event?.description}
            </motion.p>
            <Image 
                src={Event?.image ?? ''}
                width={500}
                height={500}
                className="fixed inset-0 z-[-1] w-full h-full blur-sm brightness-50"
                alt=""
            />
        </div>
        :
        <div className="flex justify-center items-center">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The Event you looking for is not found or was deleted.
            </motion.p>
        </div> }
    </div>
  )
}