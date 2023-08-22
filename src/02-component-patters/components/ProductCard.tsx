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
export const ProductCard = ({product}: Props) => {

       const {counter, increaseBy } =  useProduct();
    return (
        <div className={styles.productCard}>
            <img className={styles.productImg}  src='./coffee-mug.png' alt='Coffe Mug'/>

            <span className={styles.productDescription}>{product.title}</span>

            <div className={styles.buttonsContainer}>
                    <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                        -
                    </button>
                    <div className={styles.countLabel}> {counter} </div>

                    <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}> + </button>
            </div>
        </div>
    )
}