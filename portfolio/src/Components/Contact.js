export default function Contact() {
    return(
        <main className=''>
            <selection className='flex justify-center pt-10 pb-5 select-none'>
        <p className='font-mono text-2xl text-white font-bold'>Contact Me:</p>        
            </selection>

            <header>
                <form>
                    <div className='grid grid-col-1 gap-y-5 justify-center text-center font-bold'>
                        <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your name:</p>
                        <input type='text' placeholder='Name' className='border-solid border-gray-600 bg-gray-300 rounded-lg p-2'/>
                    </div>
                    <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your email:</p>
                        <input type='email' placeholder='Email' className='border-solid border-gray-600 bg-gray-300 rounded-lg p-2 w-80'/>
                    </div>
                    <div>
                        <p className='text-white pb-1 cursor-default select-none'>Enter your message:</p>
                        <textarea type='text' rows='6' placeholder='Message' className='border-solid border-gray-600 bg-gray-300 rounded-lg w-full p-2 font-normal'/>
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-500 text-white rounded w-full hover:bg-blue-700 hover:shadow-lg duration-300'>SEND</button>
                    </div>
                    </div>
                </form>
            </header>
        </main>
    )
}