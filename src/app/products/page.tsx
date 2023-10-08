import React from "react";
import { Product } from "../interfaces/product";
import ProductListRenderer from "../components/productlistrenderer/productlistrenderer";

interface ApiResponse {
  data: {
    products: Product[];
  };
}

async function getData(): Promise<Product[]> {

  const headers = {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
    "x-idempotence-key": "dad2sa",
    "platform-type": "sddd",
    "app-version": "1",
    "os-version": "2",
    "device-model": "apple",
    "device-id": "guest",
    "user-name": "guest",
  };

  const res = await fetch(
    "https://qagateway.eshop2drop.com/api/product/sales?dayLength=100&pageSize=100&username=panda91771",
    {
      method: "GET",
      headers: headers,
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const responseData: ApiResponse = await res.json();
  return responseData.data.products;
}


export default async function ProductList() {

  const data = await getData();
  const productlist = data
  console.log(productlist);

  return <main>
    <ProductListRenderer productlist={productlist} />
    </main>;
}
