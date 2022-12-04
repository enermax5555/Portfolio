import React from "react"
import { useRef } from "react"
import emailjs from 'emailjs-com'


export default function Contact() {
    const form=useRef();

    const inputform = [
        {
            pText: 'Enter your name:',
            type: 'text',
            name: 'user_name',
            placeholder: 'Name',
            rows: 0
        },
        {
            pText: 'Enter your email:',
            type: 'email',
            name: 'user_email',
            placeholder: 'Email',
            rows: 0
        },
        {
            pText: 'Enter your message',
            type:'text',
            name:'message',
            placeholder:'Message',
            rows: 4
        },
    ]
    const InputForms = inputform.map((e) => {
        return(
            <div>
                <p className='text-white pb-1 cursor-default select-none'>{e.pText}</p>
                <input type={e.type} name={e.name} placeholder={e.placeholder} rows="6" cols='20' className='border-solid border-gray-600 rounded-lg p-2 w-80' />
            </div>
        )
    })
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
        <main id='Contact' className='border-2 border-gray-600 border-solid lg:m-20 rounded-lg hover:border-gray-400'>
            <selection className='flex justify-center pt-10 pb-5 select-none'>
        <p className='font-mono text-2xl text-white font-bold'>Contact Me</p>        
            </selection>

            <header className='grid lg:grid-cols-3'>
                <div className='border-2 border-solid rounded-lg p-10 text-center text-white m-5'>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid gap-y-5 justify-center text-center font-bold pb-10'>
                        <input type='hidden' name='contact_number'/>
                        {InputForms}
                    <div>
                        <button type='submit' value='Send' className='bg-blue-500 text-white rounded px-5 py-2 hover:bg-blue-700 hover:shadow-lg duration-300'>SEND</button>
                    </div>
                    <div>

                    </div>
                    </div>
                </form>
                <div className='border-2 border-solid rounded-lg p-10 text-center text-white m-5'>
                        
                        </div>
            </header>
        </main>
    )
}