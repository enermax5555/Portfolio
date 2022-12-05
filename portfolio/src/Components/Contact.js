import React from "react"
import { useRef } from "react"
import emailjs from 'emailjs-com'
import Icons from "./IconsNav";

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
        <main id='Contact' className='lg:p-10 lg:pt-5 rounded-lg hover:border-gray-400'>
            <selection className='flex justify-center pt-5 pb-5 select-none'>
        <p className='font-mono text-2xl text-white font-bold'>Contact Me</p>        
            </selection>

            <header className='grid lg:grid-cols-3'>
                <div className='border-2 border-solid rounded-lg p-10 text-center text-white m-5'>
                Qkozeeeeeee abv-to
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid gap-y-5 justify-center text-center font-bold'>
                        <input type='hidden' name='contact_number'/>
                        {InputForms}
                    <div>
                        <button type='submit' value='Send' className='bg-blue-500 text-white rounded px-5 py-2 hover:bg-blue-700 hover:shadow-lg duration-300'>SEND</button>
                    </div>
                    </div>
                </form>
                <div className='grid grid-cols-8 p-5 text-white'>
                    <div className='col-start-1 col-end-2 space-y-4'>
                        <img className='w-7'src={require('../Assets/images/Mail.png')}/>
                        <img className='w-7'src={require('../Assets/images/Discord.png')}/>
                        </div>
                     
                        <div className='col-start-2 col-end-8 space-y-5'>
                        <p>stoqn.sisimen@gmail.com</p>
                        <p>RedFlash#3678</p>
                        
                        <div className='col-start-4 col-end-8 text-center space-y-5'>
                            <p>Demo Cv</p>
                            <img className='m-auto w-12 cursor-pointer hover:scale-125 duration-300'src={require('../Assets/images/Download.png')}/>
                            <p>You can find me, also, on the platforms bellow:</p>
                            <Icons/>
                        </div>
                        </div>
                        </div>     
            </header>
        </main>
    )
}