export default function Hero(){
    return(
        <>
            <div>
                <form className="flex justify-center items-center mt-10 ">
                    <input className="bg-white w-[35rem] rounded-xl h-10 border-2 outline-none pb-[0.1rem] border-yellow-700 pl-2 text-[1.2rem] font-serif" placeholder="e.g. Potato"></input>
                    <button className="h-10 bg-yellow-500 rounded-xl px-5 text-[1.2rem] border-2 border-white font-serif ml-3">Add Ingredient</button>
                </form>
            </div>
        </>
    )
}