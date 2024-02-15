'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"


export default function page() {
  const router= useRouter()


return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 rain">
    <img src="/rosa-removebg-preview.png" alt="Rosa hermosa" className="rose"></img>
 <audio autoPlay loop>
        <source src="/primeracita.mp3" type="audio/mpeg" />
        
        Your browser does not support the audio element.
      </audio>
   
    <img src="/rosa-removebg-preview.png" alt="Rosa hermosa" className="rose"></img>
    <img src="/rosa-removebg-preview.png" alt="Rosa hermosa" className="rose"></img>
    <img src="/rosa-removebg-preview.png" alt="Rosa hermosa" className="rose"></img>
   
    
    <div className="heart"></div> {/* Corazón latiendo */}
    <br/>
    <br/>
    <br/>
    <br/>  
   
    <h1 className="text-white text-4xl font-bold mb-8">Feliz día de San Valentín, Esposa</h1>
    {/* Inserta los corazones flotantes aquí */}
    <button className="surprise-button"  onClick={() => router.push('/carta')}>¿Quieres recibir tu sorpresa?</button>

  </div>
)
}
