"use client";
import React from "react";
import { Product } from "@/app/interfaces/product";


interface ProductListRendererProps {
  productlist: Product[];
}

const ProductListRenderer: React.FC<ProductListRendererProps> = ({
  productlist,
}) => {
  

  console.log("Fetch Data from the Server", productlist);

  return <div>Product List Renderer Page</div>;
};

export default ProductListRenderer;
