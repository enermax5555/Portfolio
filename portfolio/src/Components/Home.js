import React from "react"
import ImageHome from "./ImageHome"

export default function Home() {
    return(

        <main className="">
            <selection className='flex pt-10 justify-center select-none'>
            <p className='font-mono text-2xl text-white font-bold'>Home:</p>
            </selection>
            <header className='flex pl-40 pt-10 select-none'>
            <div className='space-y-3 text-white font-poppins shadow-sm'> 
               <p className='text-6xl pb-5'>Hello there!</p> 
                <p className='text-4xl'>My name is</p>
                <div className='flex'>
                <p className='absolute text-6xl text-red-500 pl-1 font-bold'>S</p>
                <p className='text-6xl text-cyan-500 font-bold'>S</p>
                <div className='pt-3.5'>
                <p className='text-4xl text-right text-end'>toqn,</p>
                </div>
                </div>
                <p className='text-4xl'>web developer</p>
                </div>
                <div className=''>
                <img className='w-20 m-10' src={require('../Assets/images/jonyTheExplorerWithRemovedBg.png')} alt='Explorer Web Dev' />
                
                </div>
                <ImageHome/>
                </header>
        </main>
    )
}