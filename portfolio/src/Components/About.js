import Typical from 'react-typical'
import AboutCard from './AboutCard'
export default function About() {

    const DynamicAbout = (e) => {
        return (
            <Typical
                steps={['I like to create and enjoy', 2000, 'I like to create and claim', 2000, 'I like to create and explore', 2000]}
                loop={Infinity}
                wrapper='strong'
            />
        )
    }
 
    return (
        <main id='About' className='border-2 border-gray-600 border-solid lg:m-20 rounded-lg hover:border-gray-400 duration:700'>
            <selection className='flex justify-center pt-10 select-none'>
                <p className='font-mono text-3xl text-white font-montserrat'>ABOUT ME</p>
            </selection>
            <header className=''>
                <div className='m-auto text-center text-white pt-3 px-10 font-montserrat font-bold'>
                    <DynamicAbout/>
                    <p className="py-2"></p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-center text-white'>
                    <div className='m-10 text-left font-montserrat'>
                        <img className='m-auto pb-5 rounded-full w-10' src={require('../Assets/images/Skillgroup.png')} alt='My interests and what i like to do' />

                        <p className='p-2 text-center font-bold text-lg'>What I like to create:</p>
                        <p className='pt-1'>-Cool looking Web-Pages and Apps.</p>
                        <p className='pt-1'>-Respossive content</p>
                        <p className='pt-1'>-Dynamic content which not overwelm the DOM</p>
                        <p className='p-2 text-center font-bold text-lg'>What I like to do?</p>
                        <p className='pt-1'>-I like to learn and use new technologies</p>
                        <p className='pt-1'>-I love to work in team and communicate with team members</p>
                        <p className='pt-1'>-I enjoy and found it interesting, to work on huge projects!</p>



                    </div>
                        <AboutCard/>
                    {/* <div className='group m-10'>
                        <div className='transform-gpu preserve-3d group-hover:rotate-y-full duration-1000'>
                            <div className='absolute backface-hidden w-full h-full'>
                                <p className='text-center py-1 font-bold text-xl pb-2 font-montserrat'>Skills</p>
                                <img className='m-auto rounded-full w-7' src={require('../Assets/images/Skillgroup.png')} alt='My Skils' />
                                <div className='grid grid-cols-4 pt-10'>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseCSS.png')} alt='CSS' />
                                        <p className='p-3 font-montserrat'><b>CSS</b> <br /> Bootstrap  <br /> Tailwind </p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseJS.png')} alt='JavaScript' />
                                        <p className='p-3 font-montserrat'><b>JS</b><br/>React<br/>PIXI</p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/BasePython.png')} alt='Python' />
                                        <p className='p-3 font-montserrat'><b>Python</b> <br /> Django  <br /> Pygame</p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/Lua.png')} alt='Lua' />
                                        <p className='p-3 font-montserrat'><b>Lua</b>  <br /> LÖVE  <br /> WowLua</p>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute backface-hidden rotate-y-full w-full h-full'>

                                <p className='text-center py-1 font-bold text-xl pb-2 font-montserrat'>Skills</p>
                                <img className='m-auto rounded-full w-7' src={require('../Assets/images/Skillgroup.png')} alt='My Skils' />
                                <div className='grid grid-cols-4 pt-10'>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/git.png')} alt='CSS' />
                                        <p className='p-3 font-montserrat'><b>Git</b> <br /> Github CLI  <br /> GitKraken</p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseDB.png')} alt='JavaScript' />
                                        <p className='p-3 font-montserrat'><b>DB</b> <br />SQL <br />SQLite</p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/HTML.png')} alt='Python' />
                                        <p className='p-3 font-montserrat'><b>HTML5</b>  <br /> Markdown  <br /> XML</p>
                                    </div>
                                    <div>
                                        <img className='m-auto rounded-full w-7' src={require('../Assets/images/othertech.png')} alt='DataBase' />
                                        <p className='p-3 font-montserrat'><b>Other</b>  <br /> Unreal4  <br /> MuiCore</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div> */}
                </div>
                <p className='italic text-gray-400 text-center pt-5 font-montserrat'>´Everyday, is a learning day´</p>
                <p className='font-bold text-center text-white pb-5 font-montserrat'>Winston Marshall</p>
            </header>
        </main>
    )
}