export default function Footer() {

    return(
        <main className='hidden lg:contents'>
            <header>
                <div className='flex justify-center gap-x-10 bg-gray-400 p-4 font-bold'>
                <p>Email: stoqn.sisimen@gmail.com</p>
                <p>Discord: RedFlash#3678</p>
                <p>DEMO CV:</p>
                <div className='relative
                                hover:p-0.5 hover:bg-blue-600 hover:shadow-lg duration-300
                                focus:bg-blue-600 focus:shadow-2xl focus:outline-none focus:ring-0
                                before:block before:absolute before:-inset-1 before:bg-blue-400'>
                <p className='relative font-mono text-black hover:text-white cursor-pointer select-none'>DOWNLOAD HERE!</p>
                </div>
                </div>
                
            </header>
        </main>
    )
}