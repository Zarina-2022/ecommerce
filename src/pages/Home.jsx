import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../redux/actions/products-action";
import ProductCard from "../components/Product-card";
import { searchAction } from "../redux/actions/search-action";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(productsAction());
    dispatch(searchAction());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center">
      {search.length > 0
        ? search.map((prd, i) => <ProductCard key={i} prd={prd} />)
        : products &&
          products.map((prd, i) => <ProductCard key={i} prd={prd} />)}
    </div>
  );
}
