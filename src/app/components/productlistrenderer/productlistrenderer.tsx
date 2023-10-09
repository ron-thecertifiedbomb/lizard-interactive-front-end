"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/interfaces/product";
import { setProductList } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProductCard from "../productcard/productcard";

interface ProductListRendererProps {
  productlist: Product[];
}

const ProductListRenderer: React.FC<ProductListRendererProps> = ({
  productlist,
}) => {

  const [reduxData, setReduxData] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const fetchReduxData: Product[] = useSelector(
    (state: RootState) => state.product.productList
  );

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setProductList(productlist));
      
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, [dispatch, productlist]);

    useEffect(() => {
    setReduxData(fetchReduxData);
  }, [fetchReduxData]);

  console.log("Redux Data", reduxData);

  return (
  
    <div className="flex flex-wrap gap-5 w-[1200px] justify-center pt-[20px] m-auto">
    {fetchReduxData.map((product, index) => (
      <ProductCard
        key={index} 
        productList={product}
        dateCreated={product.dateCreated}
        dateModified={product.dateModified}
        discountType={product.discountType}
        productId={product.productId}
        productName={product.productName}
        productPriceProductID={product.productPriceProductID}
        productUrl={product.productUrl}
        sellerId={product.sellerId}
        shopName={product.shopName}
      />
    ))}
  </div>
  
  );
};

export default ProductListRenderer;
