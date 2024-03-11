import { ReactElement, createContext, useContext, useState } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductCardHandlers, ProductCounterProps, initialValues, onChangeArgs } from '../interfaces/interfaces';


export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues
}

export const ProductContext = createContext({} as ProductCounterProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: ProductCardProps) => {

       const {counter, increaseBy, isMaxCountReached, reset } =  useProduct({onChange, product, value, initialValues});
       const maxCount = initialValues?.maxCount!;

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={ `${styles.productCard} ${className}`}>
            {children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValues?.maxCount,
                product,
                increaseBy,
                reset
            })}
        </div>
        </Provider>
    )
}