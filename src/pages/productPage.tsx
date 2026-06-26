import {  useEffect, useState } from "react";
import Product from "../components/product";

export type RatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

  const ProductsPage = () => {
  const [productList, setProductList] = useState([]);
  const fetchData=async()=>{
    const data=await fetch("https://fakestoreapi.com/products");
    const response=await data.json();
    setProductList(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-5xl mx-auto bg-gray-100 min-h-screen">
   
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {productList.map((productItem:ProductType)=>(
      <Product data={productItem} key={productItem.id}/>
     ))}
      </div>
  
  </div>
  )
}

export default ProductsPage