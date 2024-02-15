'use client'
import Image from "next/image";
import Link from 'next/link'

export default function Home() {

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
    <Link href={"/homee"}>    <button className="surprise-button"  >¿Te atreves?</button></Link>

</div>
  );
}
