import heroData from "../data/heroData";



function HeroSection() {
    return (
        <div className="bgImg  mt-[94px] max-w-[588px]   ">
            <div className=" ">
                <h2 className="text-[48px] font-extrabold ">Har lahza uchun ideal kofeni toping.</h2>
                <p className="text-[20px] font-normal text-[#403937] ">Istalgan joyda va har qanday vaqtda Coffee Delivery bilan sevimli kofeingizdan bahramand bo'ling.</p>
            </div>
            <div className="flex flex-wrap gap-[20px]">
                {
                    heroData.map((item)=>(
                        <li key={item.id} className="flex" >
                            <img src={item.img} alt="img" />
                            <p>{item.text}</p>
                        </li>
                    ))
                }
            </div>
        </div>
    );
}

export default HeroSection;