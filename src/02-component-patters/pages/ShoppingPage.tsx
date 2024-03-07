import { useState } from 'react';
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - meme',
    img: './foto.png'
}

interface ProductInCart extends Product {
    count: number;
}

const products: Product[] = [product1, product2]

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart ]  = useState<{ [key:string] : ProductInCart }>({});

    const onProductCountChange = ({ count, product} : {count: number, product: Product}) => {

        setShoppingCart(oldShoppingCart => {

            if(count === 0) {
               const {[product.id]: toDelete, ...rest} = oldShoppingCart;
               return rest;
            } 
            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        })

    }


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( product => (

                    <ProductCard key={product.id} product={product} className='bg-dark shopping-card' onChange={ onProductCountChange } >
                        <ProductImage  className='custom-image'/>
                        <ProductTitle className='text-white'/>
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                    ))
                }


                <ProductCard product={product1} className='bg-dark' onChange={ onProductCountChange }>
                    <ProductImage  className='custom-image'/>
                    <ProductTitle className='text-white'/>
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard product={product2} className='bg-dark' onChange={ onProductCountChange }>
                    <ProductImage  className='custom-image'/>
                    <ProductTitle className='text-white'/>
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

            </div>

        <div>
            <code>
                {JSON.stringify(shoppingCart, null, 5)}
            </code>
        </div>

        </div>
    )
}