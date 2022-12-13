import React from "react"
import { useRef } from "react"
import Icons from "./IconsNav";
import ContactForm from "./ContactForm";

export default function Contact() {
    const form=useRef();
    return(
        <main id='Contact' className='lg:p- lg:pt-5 rounded-lg hover:border-gray-400'>
            <selection className='flex justify-center py-5 select-none'>
        <p className='font-mono text-2xl text-white font-montserrat font-bold'>Contact Me</p>        
            </selection>

            <header className='grid lg:grid-cols-3'>


                <div className=''>
                <div className='ml-40 w-50 h-28 rounded-full border-2 text-center py-10'>
                    <p className='font-bold font-montserrat text-white'>I would love to answer you!</p>
                </div>
                <div className='absolute ml-28 w-20 h-10 rounded-full border-2'>
                </div>

                <img className='h-60' src={require('../Assets/images/Contact1.png')}alt='Contact Me'/>

                </div>
                    <div className='justify-center text-center font-bold font-montserrat'>
                    <ContactForm/>
                    </div>
                <div className='grid grid-cols-8 p-5 text-white font-montserrat'>
                    <div className='col-start-1 col-end-2 space-y-4'>
                        <img className='w-7'src={require('../Assets/images/Mail.png')} alt='Gmail'/>
                        <img className='w-7'src={require('../Assets/images/Discord.png')} alt='Discord'/>
                        </div>
                     
                        <div className='col-start-2 col-end-8 space-y-5'>
                        <p>stoqn.sisimen@gmail.com</p>
                        <p>RedFlash#3678</p>
                        
                        <div className='col-start-4 col-end-8 text-center space-y-5'>
                            <p>Demo Cv</p>
                            <img className='m-auto w-12 cursor-pointer hover:scale-125 duration-300'src={require('../Assets/images/Download.png')} alt='Download my Demo CV'/>
                            <p>You can find me, also, on the platforms bellow:</p>
                            <Icons/>

                        </div>
                        </div>
                        </div>     

            </header>
        </main>
    )
}