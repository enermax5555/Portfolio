export default function Projects() {
    return(
        <main className=''>
            <selection className='flex p-10 justify-center select-none'>
                <p className='font-mono text-2xl text-white font-bold'> Projects: </p>
            </selection>
            <header className='p-5 pb-0 m-auto container grid grid-cols-3 gap-x-12 w-max text-center border-2 border-slate-400 border-black rounded-lg text-white'>
                <div>
                <img className='rounded-lg h-40 w-80 blur hover:blur-none duration-300' src={require('../Assets/images/ProMed.png')} alt='ProMed Bulgaria'/>
                <p>Python-Django project</p>
                </div>
                <div>
                <img className='rounded-lg h-40 w-80 blur hover:blur-none duration-300'src={require('../Assets/images/3Dprinting.png')} alt='3D printing'/>
                <p>3D printing Project, created only via HTML, css and some js</p>
                </div>
                <div>
                <img className='rounded-lg h-40 w-80 blur hover:blur-none duration-300'src={require('../Assets/images/TheMagicKnight.png')} alt='The Magic Knight'/>
                <p>Lua extension - Love2D pure script game</p>
                </div>
            </header>
        </main>
    )
}