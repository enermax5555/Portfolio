import promedIMG from '../Assets/images/ProMed.png'
import printingIMG from '../Assets/images/3Dprinting.png'
import knightIMG from '../Assets/images/TheMagicKnight.png'

export default function Projects() {
    const projects = [
        {
            ref:'https://github.com/enermax5555/ProMed',
            src: promedIMG,
            alt:'ProMed Bulgaria',
            text:'Python-Django project'
        },
        {
            ref:'https://github.com/enermax5555/3Dprinetrs',
            src: printingIMG,
            alt:'3D printing',
            text:'3D printing Project created only via HTML, css and some js'
        },
         {
            ref:'https://github.com/enermax5555/The-Magic-Knight---Love',
            src: knightIMG,
            alt:'The Magic Knight 2D lua',
            text:'Lua extension - Love2D pure script game'
        },
    

    ]
    const projectsItems = projects.map((item, a) => {
        return (
            <div key={a}>
                <a href={item.ref}>
                    <img className='rounded-lg h-40 w-80 lg:blur hover:blur-none duration-300 cursor-pointer' src={item.src} alt={item.alt} />
                    <p className='py-5'>{item.text}</p>
                </a>
            </div>
        )
    })
    return(
        <main id='Projects'>
            <selection className='flex p-10 justify-center select-none'>
                <p className='font-mono text-2xl text-white font-bold'>Projects </p>
            </selection>
            <header className='p-5 pb-0 m-auto container grid lg:grid-cols-3 sm:grid-cols-1 gap-y-10 lg:gap-x-12 text-center border-2 border-slate-400 border-black rounded-lg text-white'>
               {projectsItems}
            </header>
        </main>
    )
}