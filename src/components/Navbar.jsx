import React, { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { BsFillBasketFill } from "react-icons/bs";
import Logo from "./logo.png"
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions/search-action";

export default function Navbar() {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch()
  const { cardItems } = useSelector((state) => state.card);
  const [search,setSearch]=useState('')


  useEffect(() => {
    const root = document.getElementById('root');
    if (mode) {
      root.style.backgroundColor = "#242424";
      root.style.color = "rgb(226, 226, 226)"
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black"
    }
  }, [mode]);

const searchPost = (e)=>{
  if(e.key === "Enter"){
    dispatch(searchAction(search))
  }
}

  return (
    <div className="flex item-center justify-between px-3 h-28">
      <div className="w-20 flex items-center">
        <img src={Logo} alt="" />
      </div>
      <div className="flex items-center space-x-4">
        <input
          className="hover:border-indigo-600 border p-2 rounded-lg outline-none"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={searchPost}
        />
        <div onClick={() => setMode(!mode)}>
          {mode ? (
            <FaSun size={25}  className="cursor-pointer" />
          ) : (
            <BsMoonFill size={25} className="cursor-pointer" />
          )}
        </div>
        <div onClick={()=>dispatch({type:"DRAWER", payload:true})} className="relative">
          <BsFillBasketFill
            size={25}
            className="cursor-pointer"
          />
          <span className="absolute -top-2 left-4 px-1 bg-red-600 text-white rounded-full text-sm">
           {cardItems.length}
          </span>
        </div>
      </div>
    </div>
  );
}

//   <div onClick={()=>setMode(!mode)}>  false ise true, true ise false eder
