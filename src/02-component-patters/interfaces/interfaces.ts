import { ReactElement } from "react";
import { products } from '../data/products';



export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCounterProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount: number;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface initialValues {
    count?: number;
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}

