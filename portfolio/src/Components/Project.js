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
            text:'3D printing Project'
        },
         {
            ref:'https://github.com/enermax5555/The-Magic-Knight---Love',
            src: knightIMG,
            alt:'The Magic Knight 2D lua',
            text:'Lua extension - Love2D pure script game'
        },
    

    ]
    const projectsItems = projects.map((item) => {
        return (
            <div>
                <a href={item.ref}>
                    <img className='rounded-lg h-40 w-80 lg:blur hover:blur-none hover:scale-125 duration-300 cursor-pointer' src={item.src} alt={item.alt} />
                    </a>
                    <p className='py-5 cursor-default font-montserrat font-bold'>{item.text}</p>
                
            </div>
        )
    })
    return(
        <main id='Projects' className='border-2 border-gray-600 border-solid lg:m-20 lg:mb-10 rounded-lg hover:border-gray-400'>
            <selection className='flex p-10 justify-center select-none'>
                <p className='font-mono text-3xl text-white font-montserrat'>PROJECTS </p>
            </selection>
            <header className='p-5 pb-0 m-auto container grid 
                               lg:grid-cols-3 sm:grid-cols-1 gap-y-10 lg:gap-x-12 text-center 
                               rounded-lg text-white'>
               {projectsItems}
            </header>
        </main>
    )
}