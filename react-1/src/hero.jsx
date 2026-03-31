import reactLogo from './assets/react.svg'

export default function HeroSection(){
    return(
        <>
            <main className='mx-6'>
                <h1 className='text-[4rem] text-white'>Fun Facts About React</h1>
                <img src={reactLogo} className='absolute left-[77rem] top-[9rem] h-[35rem] mt-10'/>
            </main>
        </>
    )
}