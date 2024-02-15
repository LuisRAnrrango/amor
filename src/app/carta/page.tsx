import { dancingScript } from '../ui/fonts';
export default function Carta() {
    return (
        <div className="love-card">
                <audio autoPlay loop>
        <source src="/sabes.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        <div className="content2">
            <img src="amor.jpg" alt="Imagen" className="image"/>
            <div className="text">
                <h2>¡Feliz Día del Amor!</h2>
                <p className={`${dancingScript.className}`} >Un día como hoy quiero decirte,  gracias por formar parte de mi vida.Quiero expresarte cuánto significas para mí. Eres mi razón de ser y mi mayor inspiración. Espero que este día esté lleno de amor y alegría para ambos. Te amo con todo mi corazón.</p>
            </div>
        </div>
    </div>
    )
  }
  