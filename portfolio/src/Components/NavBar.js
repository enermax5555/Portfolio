import React from "react";

import { useState } from "react";
import Icons from "./IconsNav";

export default function NavBar() {
    const [arrow, setArrow] = useState(true);
    return(

        <main className='flex text-white cursor-default'>
<header className="flex space-x-10 p-1">
    <div className='bg-black p-2'>
        <div className='absolute pl-6 text-red-500 text-7xl '>S</div>
        <div className='text-cyan-400 pl-5 text-7xl '> S </div>
        <p className='text-center text-base pb-2'>Stoqn</p>
        <p className='text-center text-xs text-gray-400'>Web Developer</p>
        <hr className='mt-3'/>
        <nav className={`${arrow ? 'h-auto w-auto text-center text-gray-600 pt-5 pt-5 pb-5' : 'invisible opacity-0 h-0 w-0 cursor-normal text-transperant'} duration-1000`}>
        <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> Home </ul><hr/>
    <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> About me</ul><hr/>
    <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> Projects</ul><hr/>
    <ul className='hover:text-black hover:bg-white cursor-pointer p-1'> Contacts</ul><hr/>
        <Icons/>
        <hr/>
        </nav>
        <div className='pt-3 mb-3 hover:animate-pulse hover:text-white-600 duration-100'>

            <button onClick={() => setArrow(!arrow)}>
            
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
        </button>
        </div>

        <hr/>
        
        </div>
    </header>
    </main>
    );
}
