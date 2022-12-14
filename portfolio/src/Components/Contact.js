import React from "react"
import { useRef } from "react"
import Icons from "./IconsNav";
import ContactForm from "./ContactForm";
import ContactImage from './ContactImage'

export default function Contact() {
    const form=useRef();
    return(
        <main id='Contact' className='lg:p- lg:pt-5 rounded-lg hover:border-gray-400'>
            <selection className='flex justify-center mb-5 select-none'>
        <p className='font-mono text-2xl text-white font-montserrat font-bold'>Contact Me</p>        
            </selection>

            <header className='grid lg:grid-cols-3'>


                <div className='mr-5'>
                <div className='ml-40 mt-20 w-45 h-28 rounded-full border-2 text-center py-10'>
                    <p className='font-montserrat text-white'>I would love to answer you!</p>
                </div>
                <div className='absolute ml-28 w-20 h-10 rounded-full border-2'>
                </div>
                <div className='w-40'>
                <ContactImage/>
                </div>
                </div>
                    <div className='justify-center text-center font-montserrat'>
                    <ContactForm/>
                    </div>
                <div className='grid grid-cols-8 p-5 text-white font-montserrat'>                 
                        <div className='col-start-1 col-end-8 space-y-5 '>
                        <div></div>
                        <div className='text-center space-y-5 mt-20'>
                            <p>Download Demo CV here:</p>
                            
                            <img className='m-auto w-12 cursor-pointer animate-bounce duration-400 hover:animate-none'src={require('../Assets/images/Download.png')} alt='Download my Demo CV'/>
                            
                            <p>You can find me, also, on the platforms bellow:</p>
                            <Icons/>

                        </div>
                        </div>
                        </div>     

            </header>
        </main>
    )
}