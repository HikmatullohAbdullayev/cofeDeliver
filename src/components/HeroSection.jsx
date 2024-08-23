import heroData from '../data/heroData'
import heroImg from '../assets/img/heroCofe.png'

function HeroSection() {
  return (
    <div className=" flex justify-between items-center gap-[20px] mt-[94px] ">
      <div className="bgImg   max-w-[588px]  table845:w-full table845:mx-auto">
        <div className=" ">
          <h2 className="text-[48px] font-extrabold text-[#272221] table:text-[36px]">
            Har lahza uchun ideal kofeni toping.
          </h2>
          <p className="text-[20px] font-normal text-[#403937] table:text-[18px ]">
            Istalgan joyda va har qanday vaqtda Coffee Delivery bilan sevimli
            kofeingizdan bahramand bo'ling.
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-[20px] mt-[60px]">
          {heroData.map((item) => (
            <li key={item.id} className="flex  gap-[20px] items-center ">
              <img src={item.img} alt="img" />
              <p className="text-[16px] font-normal text-[#574F4D]">
                {item.text}
              </p>
            </li>
          ))}
        </div>
      </div>
      <div className="max-w-[476px] w-full table:w-[400px] table845:hidden">
        <img src={heroImg} alt="img" />
      </div>
    </div>
  )
}

export default HeroSection
