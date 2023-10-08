export interface RootObject {
    [x: string]: any;
    data:         Data;
    isLogin:      boolean;
    isSuccessful: boolean;
    message:      string;
    statusCode:   number;
   }
   
   export interface Data {
    products: Product[];
    total:    number;
   }
   
   export interface Product {
    attributes:            Attributes;
    available:             number;
    brand:                 null | string;
    categories:            Categories;
    dateCreated:           string;
    dateModified:          string;
    description:           string;
    discountType:          number;
    images:                Image[];
    inWishlist:            number;
    isActive:              number;
    metrics:               Metrics;
    price:                 Price;
    productId:             string;
    productName:           string;
    productPriceProductID: string;
    productUrl:            null | string;
    sellerId:              string;
    shopName:              string;
    sku:                   null | string;
    stats:                 Stats;
    subVariationName:      null | string;
    totalQuantity:         number;
    variationName:         null | string;
    variations:            Variation[] | null;
    warranty:              Warranty | null;
    wishlistId:            string;
    withPrescription:      boolean;
   }
   
   export interface Attributes {
    attribute1: null | string;
    attribute2: null | string;
    attribute3: null | string;
   }
   
   export interface Categories {
    category: string;
   }
   
   export interface Image {
    isCoverPhoto: boolean;
    originalPath: string;
    path:         string;
    uploadDate:   string;
   }
   
   export interface Metrics {
    height: number;
    length: number;
    weight: number;
    width:  number;
   }
   
   export interface Price {
    discountPercentage: number;
    discountPrice:      number;
    discountType:       number;
    endDate:            null | string;
    quantity:           number;
    retailPrice:        number;
    salesPrice:         number;
    startDate:          null | string;
   }
   
   export interface Stats {
    addedToWishList: null;
    averageRating:   number;
    bought:          number;
    totalRating:     number;
    views:           null;
   }
   
   export interface Variation {
    discountPercentage:  number;
    image:               string;
    optionForVariation:  string;
    productVariationId:  string;
    subVariantPrice:     number;
    subVariation?:       SubVariation[];
    totalQuantity:       number;
    variationSalesPrice: number;
   }
   
   export interface SubVariation {
    discountPercentage:    number;
    productSubVariationId: string;
    subVariantOption:      string;
    subVariantPrice:       number;
    totalQuantity:         number;
    variationSalesPrice:   number;
   }
   
   export interface Warranty {
    returnDays:   string;
    warranty:     string;
    warrantyType: string;
   }
   