import { ReactElement, createContext, useContext, useState } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductCounterProps, initialValues, onChangeArgs } from '../interfaces/interfaces';


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues
}

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: ProductCardProps) => {

       const {counter, increaseBy } =  useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}`}>
            {children}
        </div>
        </Provider>
    )
}