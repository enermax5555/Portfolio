import { hover } from "@testing-library/user-event/dist/hover"
import React from "react"
import ImageHome from "./ImageHome"

export default function Home() {
    return(
        
        <main id='Home'>
            <selection className='flex pt-10 justify-center select-none'>
            <p className='font-mono text-2xl text-white font-bold'></p>
            </selection>
            <header className='flex gap-x-5 lg:pl-40 lg:pt-10 pl-5 text-center select-none'>
            <div className='space-y-3 text-white font-poppins shadow-sm'> 
               <h1 className='text-6xl pb-5 lg:hover:scale-125 duration-700'>
               <span className='test'>H</span>
               <span className='test'>e</span>
               <span className='test'>l</span>
               <span className='test'>l</span>
               <span className='test'>o</span>
               <span className='test tab'>T</span>
               <span className='test'>h</span>
               <span className='test'>e</span>
               <span className='test'>r</span>
               <span className='test'>e</span></h1>
                <h1 className='text-4xl lg:hover:scale-125 duration-700'>
                    <span className='test'>M</span>
                    <span className='test'>y</span>
                    <span className='test tab'>n</span> 
                    <span className='test'>a</span>
                    <span className='test'>m</span>
                    <span className='test'>e</span> 
                    <span className='test tab'>i</span> 
                    <span className='test'>s</span>
                    </h1>
                <div className='flex lg:hover:scale-125 duration-700'>
                <p className='absolute text-6xl text-red-500 pl-1 font-bold'>S</p>
                <p className='text-6xl text-cyan-500 font-bold'>S</p>
                <div className='pt-3.5'>
                <h1 className='text-4xl text-right text-end'>
                    <span className='test'>t</span>
                    <span className='test'>o</span>
                    <span className='test'>q</span>
                    <span className='test'>n</span>
                    <span >,</span>
                </h1>
                </div>
                </div>
                <h1 className='text-4xl hover:scale-125 duration-700'>
                    <span className='test'>w</span>
                    <span className='test'>e</span>
                    <span className='test'>b</span>
                    <span className='test tab'>d</span>
                    <span className='test'>e</span>
                    <span className='test'>v</span>
                    <span className='test'>e</span>
                    <span className='test'>l</span>
                    <span className='test'>o</span>
                    <span className='test'>p</span>
                    <span className='test'>e</span>
                    <span className='test'>r</span>
                    </h1>
                </div>
                <div className='flex hidden lg:contents'>
                <img className='w-20 m-10' src={require('../Assets/images/jonyTheExplorerWithRemovedBg.png')} alt='Explorer Web Dev' />
                <div className='flex gap-x-40'>
                <ImageHome/>
                </div>
                </div>
                </header>
        </main>
    )
}