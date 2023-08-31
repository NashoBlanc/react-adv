import { useState } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

interface Props {
    product: Product
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductImage = ({ img = ''}) => {
        return (
            <img className={styles.productImg}  src={img} alt='Product'/>
        )
}

export const ProductTitle = ({ title = ''} : {title: string}) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    )
}

interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
}


export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
    return (
        <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
        </button>
        <div className={styles.countLabel}> {counter} </div>

        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}> + </button>
</div>
    )
}


export const ProductCard = ({product}: Props) => {

       const {counter, increaseBy } =  useProduct();
       console.warn(product)
    return (
        <div className={styles.productCard}>
           <img className={styles.productImg}  src={product.img} alt='Product'/>
        <ProductImage img={product.img}/>
            
        <ProductTitle title={product.title} />

        <ProductButtons increaseBy={increaseBy}  counter={counter} />

        </div>
    )
}