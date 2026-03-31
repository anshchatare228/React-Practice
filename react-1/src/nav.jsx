import reactLogo from './assets/react.svg'

export default function Nav(){
    return (
        <>
            <nav className='bg-black/80 h-[8rem] flex items-center'>
                <div className='ml-12 flex'>
                <img src={reactLogo} className='h-10'/>
                <h1 className='text-[rgb(88,196,220)] text-4xl'>React facts</h1>
                </div>
            </nav>
        </>
    )
}