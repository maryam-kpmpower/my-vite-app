import './ProductPage.scss';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/Product';
import type { Product } from '../../types/ProductType';
import ProductsTable from '../../components/Table/ProductsTable';
import { Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // // event handler when clicking a button
    // const handleFetch = async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const result = await fetchProducts();
    //         setProducts(result);
    //     } catch (error) {
    //         setError('Failed to fetch products.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
                console.log(products);
            } catch (error) {
                console.log('error is:', error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []); // useEffect is only run once due to []. all set attributes are scheduled for after useEffect is done running.

    return (
        <div className="product-page">
            <h2>Products Page</h2>
            <ul>
                <li>
                    Notice that router is case insensitive; e.g. "/proDucTs"
                    works fine.
                </li>
                <li>
                    Notice that "/product" without the "s" would redirect to
                    "/products".
                </li>
            </ul>
            {/* automatic rendering of the table - useEffect */}
            <div className="products">
                <h2>Proucts Table</h2>
                <ProductsTable data={products}></ProductsTable>
            </div>
            {/* button to initiate api fetch
            <div className="action">
                <button className="fetch-data-btn" onClick={handleFetch}>
                    Fetch Products
                </button>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        id: {p.id}, user id: {p.userId}, title: {p.title}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductPage;
