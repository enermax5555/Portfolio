import Typical from 'react-typical'
import AboutCard from './AboutCard'
// import 'tw-elements'
import 'flowbite'
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
                <p className='text-3xl text-white font-montserrat'>ABOUT ME</p>
            </selection>
            <header className=''>
                <div className='m-auto text-center text-white pt-3 px-10 font-montserrat font-bold'>
                    <DynamicAbout />
                    <p className="py-2"></p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 text-center text-white'>

                    <div id='about-carousel' data-carousel="static" className='border-2 border-solid rounded-lg'>
                        <div className='relative overflow-hidden m-10 h-60 border-2 border-solid rounded-lg'>
                            <div className='hidden duration-500 ease-in-out' data-carousel-item='active'>
                                <img src={require('../Assets/images/CodeAbout.png')} className=''></img>
                            </div>
                            <div className='hidden duration-500 ease-in-out' data-carousel-item>
                                <img src={require('../Assets/images/SportsAbout.png')} className=''></img>
                            </div>
                            <div className='hidden duration-500 ease-in-out' data-carousel-item>

                            </div>
                        </div>  
                        <div className='space-x-3 bottom-5'>
                            <button className='w-3 h-3 rounded-full bg-gray-500' type='button' data-carousel-slide-to='0'></button>
                            <button className='w-3 h-3 rounded-full bg-gray-500' type='button' data-carousel-slide-to='1'></button>
                            <button className='w-3 h-3 rounded-full bg-gray-500' type='button' data-carousel-slide-to='2'></button>
                        </div>
                    </div>
                    {/* <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"></script> */}
                    
                    <AboutCard />
                </div>
                <p className='italic text-gray-400 text-center pt-5 font-montserrat'>´Everyday, is a learning day´</p>
                <p className='font-bold text-center text-white pb-5 font-montserrat'>Winston Marshall</p>
            </header>
        </main>
        
    )
}