import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../redux/actions/card-action";

export default function Card() {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  
  const deleteCard = (id)=>{
    dispatch(removeCard(id))
  }
  
  
  return (
    <div className="w-1/3 p-3 h-full border fixed top-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">My Cart</h1>
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
      </div>

      {cardItems?.map((card, index) => (
        <div key={index} className="h-42 flex items-center justify-between mt-8">
          <img
            className="h-20"
            src={card?.image}
            alt=""
          />
          <div className="w-72">
            <div className="font-bold text-sm text-center mt-5">{card?.title} ({card?.qty})</div>
            <div className="opasity-70 text-xs">{card?.description}</div>
          </div>
          <div className="font-bold text-lg">{card?.price} &euro;</div>
          <button onClick={()=>deleteCard(card.id)} className="bg-red-500 rounded-lg p-2 w-28 text-white">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
