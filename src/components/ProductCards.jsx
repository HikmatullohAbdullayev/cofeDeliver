import React from 'react';
import addProductImg from "../assets/img/save.png"

function ProductCards({item}) {
    return (
        

        <div className='w-[270px] mx-auto text-center bg-[#F3F2F2] rounded-[6px] rounded-bl-[20px] rounded-tr-[20px] mt-[50px]' >
            <div >
                <img className='mt-[-30px] mx-auto' src={item.img} alt={item.title} />
                <span className='inline-block px-2 py-1 bg-[#F1E9C9] rounded-[20px]  text-[#C47F17] text-[14px] font-bold'>{item.type}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{item.info}</p>
            <div className="flex justify-between items-center  px-[20px] ">
                <span>{item.price}</span>
                <div className="flex">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
               <button>
               <img src={addProductImg} alt="add Product Img" />
               </button>
            </div>
        </div>
    );
}

export default ProductCards;