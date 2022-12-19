import skillIMG from '../Assets/images/Skillgroup.png'
import cssIMG from '../Assets/images/BaseCSS.png'
import jsIMG from '../Assets/images/BaseJS.png'
import pythonIMG from '../Assets/images/BasePython.png'
import luaIMG from '../Assets/images/Lua.png'
import gitIMG from '../Assets/images/git.png'
import dbIMG from '../Assets/images/BaseDB.png'
import htmlIMG from '../Assets/images/HTML.png'
import otherIMG from '../Assets/images/othertech.png'
import { useState } from 'react'

export default function AboutCard() {
    const [flipcard, setflipcard] = useState(false)
    const FrontCradStacks = [
        {
            alt: 'CSS',
            src: cssIMG,
            label: 'CSS',
            t1: 'Bootstrap',
            t2: 'Tailwind'
        },
        {
            alt: 'JavaScript',
            src: jsIMG,
            label: 'JS',
            t1: 'React',
            t2: 'PIXI'
        },
        {
            alt: 'Python',
            src: pythonIMG,
            label: 'Python',
            t1: 'Django',
            t2: 'Pygame'
        },
        {
            alt: 'Lua',
            src: luaIMG,
            label: 'Lua',
            t1: 'Love2D',
            t2: 'WoWlua'
        }
    ]

    const BackCardStacks = [
        {
            alt: 'GitHub',
            src: gitIMG,
            label: 'Git',
            t1: 'GitHub CLI',
            t2: 'GitKraken'
        },
        {
            alt: 'DataBase',
            src: dbIMG,
            label: 'DB',
            t1: 'SQL',
            t2: 'SQLite'
        },
        {
            alt: 'Markup/Markdown Languages',
            src: htmlIMG,
            label: 'HTML5',
            t1: 'XML',
            t2: 'Markdown'
        },
        {
            alt: 'Other Technologies',
            src: otherIMG,
            label: 'Other',
            t1: 'Unreal4',
            t2: 'MuiCore'
        },
    ]

    const FrontCard = FrontCradStacks.map((e) => {
        return (
            <div>
                <img className='m-auto rounded-full w-7' src={e.src} alt={e.alt} />
                <p className='p-3 font-montserrat'><b>{e.label}</b><br />{e.t1}<br />{e.t2}</p>
            </div>
        )
    })

    const BackCard = BackCardStacks.map((e) => {
        return(
        <div>
            <img className='m-auto rounded-full w-7' src={e.src} alt={e.alt} />
            <p className='p-3 font-montserrat'><b>{e.label}</b><br />{e.t1}<br />{e.t2}</p>
        </div>
        )
    })
    
    return(
        <main>
            <div className='group m-10'>
                <div className=''>
                    <div className={`${flipcard ? 'hidden' : ''}`}>
                        <p className='text-center py-1 font-bold text-xl pb-2 font-montserrat'>Skills</p>
                        <img className='m-auto rounded-full w-7' src={skillIMG} alt='My Skils' />
                        <div className='grid grid-cols-4 pt-10'>
                            {FrontCard}
                        </div>
                    </div>

                        <div className={`${flipcard ? '' : 'hidden'}`}>
                            <p className='text-center py-1 font-bold text-xl pb-2 font-montserrat'>Skills</p>
                            <img className='m-auto rounded-full w-7' src={skillIMG} alt='My Skils' />
                            <div className='grid grid-cols-4 pt-10'>
                            {BackCard}
                            </div>
                        </div>
                </div>
                <div className='mt-10'>
            <button type="button"
                    onClick={() => setflipcard(!flipcard)} 
                    class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-40
                            bg-gradient-to-br from-purple-700 to-blue-700
                            hover:bg-gradient-to-bl">{`${flipcard ? 'Back' : 'Check other'}`}</button>
                               
                </div>
            </div>
        </main>
    )
}