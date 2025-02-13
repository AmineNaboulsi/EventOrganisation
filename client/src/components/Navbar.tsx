import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect , useState} from "react"
import Cookies from 'js-cookie';

type User = {
  id: number,
  name: string,
  email: string ,
  avatar: string
}
export default function Navbar() {

  const [isLogin , setLogin] = useState<boolean>(false);
  const [User , setUser] = useState<User>();
  const [isLoading , setLoading] = useState(true);

  const Validatetoken = async () =>{
    setLoading(true)
    const url = process.env.NEXT_PUBLIC_API_URL;
    const authentoken = Cookies.get('authtoken');
    try{
      const res = await fetch(`${url}/validtk`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authentoken}`
        },
      });
      const data = await res.json();
      if(!data.error){
        setUser(data)
      }
      setLogin(true)
      setLoading(false)
    }catch(error){
      console.log(error)
      setLogin(false)
      setLoading(false)
    }
  }

  useEffect(()=>{
    Validatetoken();
  },[])
  
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
            {isLogin 
            ? 
              <>
                <div className="flex items-center gap-2 cursor-pointer transition-all p-2 hover:bg-[#262728] rounded-">
                  <div className="relative rounded-full p-4 bg-green-600">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <span className="text-xl capitalize mb-0.5">{User?.name[0]}</span>
                    </div>
                  </div>
                  <span className="text-gray-300">{User?.email}</span>
                </div> 
              </>
            : 
              <>
              {
                isLoading  ? 
                <>
                </> 
                :
                <>
                 <Link href="/auth/signin">
                  <Button className="text-gray-300 hover:bg-transparent bg-transparent hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-[#a56bf0] text-black hover:bg-[#6d499c]/94 rounded-md">Sign Up</Button>
                </Link>
                </>
              }
              </>
            }
            
          </div>
        </div>
      </div>
    </nav>
  )
}

