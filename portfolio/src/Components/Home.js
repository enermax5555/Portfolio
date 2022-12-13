
import React from "react"
import ImageHome from "./ImageHome"
import DancingLines from "react-dancing-lines"

export default function Home() {
    return(
        
        <main id='Home'>
            <selection className='flex pt-10 justify-center select-none'>

            </selection>
            <header className='flex gap-x-5 lg:pl-40 lg:pt-10 pl-5 text-center select-none'>

            <div className='mr-60 space-y-3 text-white  font-montserratb font-bold'> 
         
               <h1 className='h-20 w-40 text-6xl'>
               <span className='test'>H</span>
               <span className='test'>e</span>
               <span className='test'>l</span>
               <span className='test'>l</span>
               <span className='test'>o</span>
               <span className='test tab'>T</span>
               <span className='test'>h</span>
               <span className='test'>e</span>
               <span className='test'>r</span>
               <span className='test'>e</span>
               </h1>
                <h1 className='h-10 w-40 ml-10 text-4xl'>
                    <span className='test'>M</span>
                    <span className='test'>y</span>
                    <span className='test tab'>n</span> 
                    <span className='test'>a</span>
                    <span className='test'>m</span>
                    <span className='test'>e</span> 
                    <span className='test tab'>i</span> 
                    <span className='test'>s</span>
                    </h1>
                <div className='flex'>
                <p className='absolute text-6xl text-red-500 pl-0.5 font-bold'>S</p>
                <p className='text-6xl text-cyan-500 font-bold'>S</p>
                <div className='pt-3.5'>
                <h1 className='h-10 w-10 text-4xl text-right text-end'>
                    <span className='test'>t</span>
                    <span className='test'>o</span>
                    <span className='test'>y</span>
                    <span className='test'>a</span>
                    <span className='test'>n</span>
                    <span >,</span>
                </h1>
                </div>
                </div>
                <h1 className='h-10 w-40 text-4xl'>
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
                <img className='h-40 px-30 ml-40 mr-10 mt-20' src={require('../Assets/images/jonyTheExplorerWithRemovedBgNEW.png')} alt='Explorer Web Dev' />
                <ImageHome/>
                </div>
                
                </header>
        </main>
    )
}