import { ArrowUp } from "lucide-react";
import { useNavigate } from "react-router";

export function Header(){
    const router = useNavigate();
    const user = false;
    return(
        <div className="p-6 bg-white sticky top-0 backdrop-blur-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <img src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755106848/bit_df5hvq.png" className="h-16 rounded-full" alt="" />
                    <img src="https://codecirclebitsathy.netlify.app/images/codecirclelogo.png" className="size-16 rounded-full" alt="" />
                    <img src="/logo.jpg" className="size-16 rounded-full" alt="" />
                </div>
                <div className="flex items-center gap-x-4">
                    <button onClick={()=> router("/")} className="cursor-pointer font-semibold  text-gray-700 text-xl hover:border-gray-700 border-transparent border-b-2 outline-0 px-3 py-2">Home</button>
                    <button onClick={()=> router("/events")} className="cursor-pointer font-semibold  text-gray-700 text-xl hover:border-gray-700 border-transparent border-b-2 outline-0 px-3 py-2">Events</button>
                    <button onClick={()=> router("/schedule")} className="cursor-pointer font-semibold  text-gray-700 text-xl hover:border-gray-700 border-transparent border-b-2 outline-0 px-3 py-2">Schedule</button>
                    <button onClick={()=> router("/combo")} className="cursor-pointer font-semibold  text-gray-700 text-xl hover:border-gray-700 border-transparent border-b-2 outline-0 px-3 py-2">Combos</button>
                    <button onClick={()=> router("/team")} className="cursor-pointer font-semibold  text-gray-700 text-xl hover:border-gray-700 border-transparent border-b-2 outline-0 px-3 py-2">Team</button>
                </div>
                <div className="flex items-center gap-x-4">
                    <button onClick={()=> router("/combo")} className="bg-gradient-to-r from-amber-500 to-pink-500 rounded-md text-white px-5 py-2.5 cursor-pointer flex items-center gap-x-2 font-semibold text-sm "><p>Register Now</p><ArrowUp className="rotate-90" /></button>
                    <div></div>
                    {user && (
                        <button className="size-12 rounded-full flex items-center justify-center bg-orange-600 text-white cursor-pointer">
                            <p className="text-2xl">R</p>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
