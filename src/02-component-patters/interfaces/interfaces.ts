import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCounterProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}
