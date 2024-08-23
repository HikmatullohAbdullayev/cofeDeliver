import React from 'react'
import addProductImg from '../assets/img/save.png'
import MinusIcon from '../assets/icon/MinusIcon'
import PlusIcon from '../assets/icon/PlusIcon'

function ProductCards({ item }) {
  return (
    <div className="w-[270px] mx-auto text-center bg-[#F3F2F2] rounded-[6px] rounded-bl-[20px] rounded-tr-[20px] mt-[50px] px-[20px] py-[10px] grid gap-[10px] ">
      <div>
        <img className="mt-[-50px] mx-auto" src={item.img} alt={item.title} />
        <span className="inline-block px-2 py-1 my-[12px] bg-[#F1E9C9] rounded-[20px]  text-[#C47F17] text-[14px] font-bold">
          {item.type}
        </span>
      </div>
      <h2 className='font-bold text-[24px] '>{item.title}</h2>
      <p className='text-[#8D8686] text-[14px] font-normal'>{item.info}</p>
      <div className="flex justify-between items-center  px-[8px]  gap-[2px]">
        <span className='text-[20px] font-extrabold'>{item.price}</span>
        <div className="flex justify-between  items-center gap-[6px] bg-[#E6E5E5] py-[8px] px-[8px] rounded-[8px]">
          <button className=''><MinusIcon/></button>
          <span className='font-normal text-[16px]'>1</span>
          <button className=''><PlusIcon/></button>
        </div>
        <button>
          <img src={addProductImg} alt="add Product Img" />
        </button>
      </div>
    </div>
  )
}

export default ProductCards
