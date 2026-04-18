import chefBg from "./assets/codeClaudeBg.png"

export default function Hero(){
    const ingredients = ["Tomato","Onion","Potato","kanda","batata","pepsi"];
    const ingredientsListItems = ingredients.map(item => (
        <li>{item}</li>
    ))

    

    function submitInput(){
        return(
            ingredients.push()
        )
    }

    return(
        <>
            <div className="flex flex-col items-center">
                <img src={chefBg} alt="bgImg" className="absolute inset-0 -z-10 h-screen w-full object-cover blur-[0.2rem]" />

                <form onSubmit={submitInput} className="flex justify-center items-center mt-10 ">
                    <div className="h-[8rem] w-[50rem] bg-white/40 backdrop-blur-sm pl-5 flex-col justify-center items-center rounded-2xl ">
                        <div className="h-11 w-[47rem] bg-white border-yellow-700 flex justify-center items-center mt-[1.6rem] rounded-full focus-within:ring-2 focus-within:ring-yellow-400 focus-within:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-300">
                            <input className="bg-white w-[35rem] rounded-full h-10 border-none outline-none pl-4 text-[1.2rem] font-serif" placeholder="e.g. Potato"></input>
                            <button className="h-10 bg-yellow-500 rounded-full px-5 text-[1.2rem] border-2 border-white font-serif ml-4">Add Ingredient</button>
                        </div>
                        <span className="pl-3 text-black/30">Try adding multiple items(e.g. onion spinach)</span>
                    </div>
                </form>
                <div className="h-auto w-[50rem] bg-white/40 backdrop-blur-sm pl-5 rounded-2xl mt-10">
                    <p className="text-[1.5rem] pl-3 font-mono pt-3">Added Igredients :</p>
                    <ul className="text-[1.2rem] p-3">
                        {ingredientsListItems}
                    </ul>
                </div>
            </div>
        </>
    )
}