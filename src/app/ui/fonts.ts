import {Roboto, Montserrat, Lusitana, Dancing_Script} from 'next/font/google'

/*CARGAR FUENTES DESDE GOOGLE*/ 
/*Utilizando Monserrat */
export const montserrat= Montserrat({subsets:['latin'] })

/*Podemos utilizar asi otro de esta manera */
export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: 'normal',
    display: 'swap',
  })
  export const lusitana= Lusitana({    weight: ['400', '700'],
  subsets: ['latin'], })

  export const dancingScript = Dancing_Script({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: 'normal',
    display: 'swap',
  });
  
