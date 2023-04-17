import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products-action";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { productCard } from "../redux/actions/card-action";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };

  const addCard = ()=>{
    dispatch(productCard(id,count))
    dispatch({type:"DRAWER", payload:true})
  }


  return (
    <div className="w-full flex justify-center items-center space-x-10">
      <img className="w-1/3 " src={product?.image} alt="" />
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{product?.title}</div>
        <div className="opacity-70">{product?.description}</div>
        <div className="font-bold opacity-70">
          Category: {product?.category}
        </div>
        <div className="font-bold opacity-70">
          Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}
        </div>
        <div className="font-bold opacity-90 text-green-900 text-lg">
          Price: {product?.price} &euro;
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => decrement()}
            className="bg-indigo-800 text-white text-lg rounded-lg p-1"
          >
            {" "}
            <CgMathMinus />{" "}
          </button>
          <span className="text-red-700 font-bold text-2xl">{count}</span>
          <button
            onClick={() => increment(product?.rating?.count)}
            className="bg-indigo-800 text-white text-lg rounded-lg p-1"
          >
            {" "}
            <CgMathPlus />{" "}
          </button>
        </div>
        <button onClick={addCard} className="bg-indigo-600 w-full p-2 rounded-lg  text-white  max-h-10">
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
}
