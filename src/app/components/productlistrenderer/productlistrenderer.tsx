"use client";
import React, { useEffect } from "react";
import { Product } from "@/app/interfaces/product";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setProductList } from "@/redux/reducers/productReducer";

interface ProductListRendererProps {
  productlist: Product[];
}

const ProductListRenderer: React.FC<ProductListRendererProps> = ({
  productlist,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataToRedux = productlist;
        dispatch(setProductList(dataToRedux));
        console.log("data from the server to redux", dataToRedux);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, setProductList]);

  console.log("data from the server", productlist);


 const productState = useSelector(
    (state: RootState) => state.product
  );

  console.log("Current Redux Data", productState);

  return <div>Product List Renderer Page</div>;
};

export default ProductListRenderer;
