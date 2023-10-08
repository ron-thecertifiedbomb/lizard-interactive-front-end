import React from 'react';
import { Product } from '@/app/interfaces/product';

interface ProductCardProps {
  productList: Product;
  dateCreated: string;
  dateModified: string;
  discountType: number;
  productId: string;
  productName: string;
  productPriceProductID: string;
  productUrl: null | string;
  sellerId: string;
  shopName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productList,
  dateCreated,
  dateModified,
  discountType,
  productId,
  productName,
  productPriceProductID,
  productUrl,
  sellerId,
  shopName,
}) => {
  return (
    <div className="flex flex-col w-[220px] min-h-[180px]">
      <div className="card-body">
        <p className="card-text">Product ID: {productId}</p>
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Shop Name: {shopName}</p>
        <p className="card-text">Seller ID: {sellerId}</p>
       
      </div>
    </div>
  );
};

export default ProductCard;
