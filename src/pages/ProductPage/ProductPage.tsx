import './ProductPage.scss';
import { useState } from 'react';
import { fetchProducts } from '../../api/product';
import type { Product } from '../../types/product';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetch = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchProducts();
            setProducts(result);
        } catch (error) {
            setError('Failed to fetch products.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-page">
            <h2>Products Page</h2>
            <p className="just">
                Notice that router is case insensitive; e.g. "/proDucTs" works
                fine.
            </p>
            <p>
                Notice that "/product" without the "s" would redirect to
                "/products".
            </p>
            <div className="action">
                <button className="fetch-data-btn" onClick={handleFetch}>
                    Fetch Products
                </button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ProductPage;
