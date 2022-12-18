export default function FlipCard() {
    retrun(
        <div className='group m-10'>
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
                    </div>
    )
}
