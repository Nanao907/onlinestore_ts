import { Product } from "../features/ProductSlice";

export const calculateTotalOfProducts = (products: Product[]) => {
    // This tells TS that total is always a number 
   // let total: number=0;
   let total: number=0 ;
    products.forEach((product) => {
        total += product.price
    })
    return total;
}