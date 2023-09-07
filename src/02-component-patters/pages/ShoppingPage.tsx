import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffe-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
            <ProductCard product={product} />
        </div>
    )
}