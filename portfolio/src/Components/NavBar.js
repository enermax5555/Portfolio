import React from "react";
import { useState } from "react";
import Icons from "./IconsNav";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function NavBar() {
    const [arrow, setArrow] = useState(true);
    return(

        <main className='flex justify-center lg:fixed text-white cursor-default'>
<header className="flex space-x-10 p-1">
    <div className='w-80 lg:w-auto bg-black p-2 select-none'>
        <div className='hidden lg:contents'>
        <div className='absolute pl-6 text-red-500 text-7xl'>S</div>
        <div className='text-cyan-400 pl-5 text-7xl'> S </div>
        </div>
        <p className='text-center text-base pb-2'>Stoqn</p>
        <p className='text-center text-xs text-gray-400'>Web Developer</p>
        <hr className='mt-3'/>

        <nav className={`${arrow ? 'h-auto w-auto text-center text-gray-600 pt-5 pt-5 pb-5' : 'collapse pb-5 scale-75 text-center w-auto opacity-0 h-0 w-0 cursor-normal'} duration-300`}>
        <AnchorLink href='#Home'>
        <ul className='hover:text-black hover:bg-white cursor-pointer p-1'>
            Home
            </ul></AnchorLink><hr/>
        <AnchorLink href='#About'>    
        <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> 
            About me
            </ul></AnchorLink><hr/>
        <AnchorLink href='#Projects'>    
    <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> 
            Projects
            </ul></AnchorLink><hr/>
        <AnchorLink href='#Contact'>
    <ul className='hover:text-black hover:bg-white cursor-pointer p-1'>
            Contacts
            </ul></AnchorLink><hr/>
        {/* <Icons/> */}
        <hr/>
        </nav>

    
        <div className='flex pb-3 justify-center scale-125 text-gray-600 '>
            <div className='hover:text-white hover:animate-pulse hover:text-white-600 duration-500'>
            <button onClick={() => setArrow(!arrow)}>
            
         <div className={`${arrow ? 'visible' :'invisible h-0 w-0'}`}>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
        </div>
        <div className={`${arrow ? 'invisible h-0 w-0' :'visible'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
</div>
        </button>
        </div>
        </div>

        <hr/>
        
        </div>
    </header>
    </main>
    );
}
