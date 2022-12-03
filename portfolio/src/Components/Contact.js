import React from "react"
import { useRef } from "react"
import emailjs from 'emailjs-com'


export default function Contact() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('portfolio_service', 'portfolio_form', form.current, '_ZuCaNlgv1P8lkjzI')
            .then((result) => {
                console.log('SUCCSES! :', result.text);
                alert('SUCCESS!');
            }, (error) => {
                console.log('Failed :', error.text);
                alert('Failed... :(. \n Try again later!');
            });
        e.target.reset()
    };
    return(
        <main id='Contact'>
            <selection className='flex justify-center pt-10 pb-5 select-none'>
        <p className='font-mono text-2xl text-white font-bold'>Contact Me</p>        
            </selection>

            <header>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid grid-col-1 gap-y-5 justify-center text-center font-bold pb-10'>
                        <input type='hidden' name='contact_number'/>
                        <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your name:</p>
                        <input type='text' name='user_name' placeholder='Name' className='border-solid border-gray-600 bg-gray-300 rounded-lg p-2'/>
                    </div>
                    <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your email:</p>
                        <input type='email' name='user_email' placeholder='Email' className='border-solid border-gray-600 bg-gray-300 rounded-lg p-2 w-80'/>
                    </div>
                    <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your message:</p>
                        <textarea type='text' name='message' rows='6' placeholder='Message' className='border-solid border-gray-600 bg-gray-300 rounded-lg w-full p-2 font-normal'/>
                    </div>
                    <div>
                        <button type='submit' value='Send' className='bg-blue-500 text-white rounded px-5 py-2 hover:bg-blue-700 hover:shadow-lg duration-300'>SEND</button>
                    </div>
                    </div>
                </form>
            </header>
        </main>
    )
}