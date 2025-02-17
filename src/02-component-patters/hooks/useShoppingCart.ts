import { useState } from "react";
import { Product, ProductInCart } from '../interfaces/interfaces';
import { products } from '../data/products';


export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart ]  = useState<{ [key:string] : ProductInCart }>({});

    const onProductCountChange = ({ count, product} : {count: number, product: Product}) => {

        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...products, count: 0}

            if( Math.max(productInCart.count + count, 0 ) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
               
            } 

            // borrar
            const {[product.id] : toDelete, ...rest } = oldShoppingCart;
            return rest;
           
        })
    }


    return {
        products,
        shoppingCart,
        onProductCountChange
    }

}