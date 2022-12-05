import Typical from 'react-typical'
export default function About(){
    const DynamicAboutTexts = ['sadawd','dkogfg','cmxokfe']
    const DynamicAbout = DynamicAboutText => {
        return(
            <Typical
            steps={['I like to create and enjoy', 2000, 'I like to create and claim', 2000, 'I like to create and explore', 2000]}
            loop={Infinity}
            wrapper='strong'
            />
        )
    }
    return(
    <main id='About' className='border-2 border-gray-600 border-solid lg:m-20 rounded-lg hover:border-gray-400 duration:700'>
        <selection className='flex justify-center pt-10 select-none'>
            <p className='font-mono text-2xl text-white font-bold'>About me</p>
        </selection>
        <header className=''>
            <div className='m-auto text-center text-white pt-3 px-10 font-mono font-bold'>
                <div></div>
        <DynamicAbout className=''/>
        <p className="py-2"></p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-center text-white'>
        <div className='m-10 border-2 border-solid rounded-lg '>
            Qnkozzeeee 
        </div>
        <div className='m-10'>
        <p className='text-center py-1 font-bold text-xl pb-2'>Skills</p>
        <img className='m-auto rounded-full w-7' src={require('../Assets/images/Skillgroup.png')}/>
            <div className='grid grid-cols-4 pt-10'>
                <div className=''>
                <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseCSS.png')}/>
            <p className='p-3'>CSS <br/> Bootstrap  <br/> Tailwind  <br/> Vanilla  <br/> SASS</p>
            </div>
            <div>
            <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseJS.png')}/>
            <p className='p-3'>JS <br/> React <br/> PIXI</p>
            </div>
            <div>
            <img className='m-auto rounded-full w-7' src={require('../Assets/images/BasePython.png')}/>
                <p className='p-3'>Python  <br/> Django  <br/> Pygame</p>
            </div>
            <div>
            <img className='m-auto rounded-full w-7' src={require('../Assets/images/BaseDB.png')}/>
                <p className='p-3'>DB  <br/> SQL  <br/> SQLlite</p>
            </div>
            </div>
            <p className='italic text-gray-400'>´Everyday, is a learning day´</p>
            <p className='font-bold'>Winston Marshall</p>
        </div>
        </div>


        </header>
    </main>
    )
}