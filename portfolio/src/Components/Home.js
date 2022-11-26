import React from "react"
import ImageHome from "./ImageHome"

export default function Home() {
    return(
        <main className="flex pl-40 pt-20">
           
            <div className='space-y-3 text-white font-mono'> 
               <p className='text-6xl'>Hello there!</p> 
                <p className='text-4xl'>My name is, </p>
                <div className='flex'>
                <p className='absolute text-6xl text-red-500 font-bold'>S</p>
                <p className='text-6xl text-cyan-600 pl-0.5 font-bold'>S</p>
                <div className='pt-3.5'>
                <p className='text-4xl text-right text-end'>toqn,</p>
                </div>
                </div>
                <p className='text-4xl'>web developer</p>
                </div>

            <div className=''>
            <ImageHome/>
            </div>
                
        </main>
    )
}