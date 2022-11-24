import React from "react";
import { useState } from "react";

export default function NavBar() {
    const [arrow, setArrow] = useState(true);
    return(

        <main className='flex text-white cursor-default'>
<header className="flex space-x-10 p-1">
    <div className='text-7xl'>
        <div className='shadow-sm shadow-black'> S </div>
    </div>

    <button className={`${arrow ? "h-8" : "h-15"} duration-600 border-x-8 border-y-transparent border-b-[1.2rem] border-b-white-600 cursor-pointer`} 
     onClick={() => setArrow(!arrow)}
    //  onClick={() => console.log("what's up hoomie?")}
    />

    
    
    <nav className={`${arrow ? 'invisible flex space-x-2 items-center' : 'flex text-2xl items-center space-x-8'} duration-700`}>
    <ul className='hover:text-black hover:bg-white cursor-pointer'> Home </ul>
    <ul className='hover:text-black hover:bg-white cursor-pointer'> About me</ul>
    <ul className='hover:text-black hover:bg-white cursor-pointer'> Projects</ul>
    <ul className='hover:text-black hover:bg-white cursor-pointer'> Contacts</ul>
    </nav>
    </header>
    </main>
    );
}
