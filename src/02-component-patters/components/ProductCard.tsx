import { createContext, useContext, useState } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductCounterProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {

       const {counter, increaseBy } =  useProduct();
    return (

        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
            {children}
        </div>
        </Provider>
    )
}