'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="landing-page">
       <audio autoPlay loop>
        <source src="/amarte.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    <div className="content">
        <h1>Feliz Día del Amor</h1>
        <p>¡Celebremos el amor juntos!</p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  
    <br/>
    <div className="heart"></div>
    <br/>
    <br/>
    <br/>
    <br/>
    <button className="surprise-button"  onClick={() => router.push('/homee')}>¿Te atreves?</button>
</div>
  );
}
