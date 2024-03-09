import { createContext, useContext, useState } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductCounterProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value}: ProductCardProps) => {

       const {counter, increaseBy } =  useProduct({onChange, product, value});

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