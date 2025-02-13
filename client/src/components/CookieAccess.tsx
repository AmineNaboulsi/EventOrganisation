'use client'


export default function CookieAccess({visibility}:any) {
  const Accept = () =>{
    localStorage.setItem('termsaccept' , '1')
    visibility(true)
  }
  return (
    <div className="w-auto fixed left-0 right-0 bottom-16 flex justify-center items-center shadow-md z-10 ">
        <div className="bg-white rounded-full px-4 py-3 text-black flex justify-center items-center gap-4 ">
            <span>This website uses cookies to improve your web experience.</span>
            <span onClick={Accept} className="bg-[#eff3f5] hover:bg-[#184240] hover:text-white rounded-full cursor-pointer px-3 py-1">Accept</span>
        </div>
    </div>
  )
}