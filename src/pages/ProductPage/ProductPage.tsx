import './ProductPage.scss';
import { useEffect, useState } from 'react';
// import { fetchProducts } from '../../api/ProductsApi';
import type { Product } from '../../types/ProductType';
import ProductsTable from '../../components/Table/ProductsTable';
// import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/Searchbar/Searchbar';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const productsPerPage: number = 12;
    const [searchArgs, setSearchArgs] = useState<{
        id?: number;
        title?: string;
    }>({});

    // server-side pagination
    useEffect(() => {
        const callProducts = async () => {
            try {
                setLoading(true);
                let url = `https://jsonplaceholder.typicode.com/albums?_page=${currentPage}&_limit=${productsPerPage}`;
                if (searchArgs.id !== undefined && !isNaN(searchArgs.id)) {
                    url += `&id=${searchArgs.id}`;
                }
                if (searchArgs.title && searchArgs.title.trim() !== '') {
                    url += `&title_like=${encodeURIComponent(
                        searchArgs.title.trim(),
                    )}`;
                }
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`Response error: ${response}`);
                const products: Product[] = await response.json(); // don't forget the await keyword
                const totalProducts: number = Number(
                    response.headers.get('X-Total-Count'),
                );
                setProducts(products);
                setTotalProducts(totalProducts);
                console.log(products);
            } catch (error) {
                console.log('error is:', error);
                setError('Failed to fetch products.');
            } finally {
                setLoading(false);
            }
        };
        callProducts();
    }, [currentPage, searchArgs]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="product-page">
            <h2>Products Page</h2>
            {/* automatic rendering of the table - useEffect */}
            <div className="products">
                <h2>Proucts Table</h2>
                <Searchbar
                    onSearch={(searchArgs) => {
                        setSearchArgs(searchArgs);
                        setCurrentPage(1);
                    }}
                />
                <div className="table-container">
                    {loading ? (
                        <p>Loading ...</p>
                    ) : (
                        <ProductsTable data={products}></ProductsTable>
                    )}
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={totalProducts}
                        currentPage={currentPage}
                        paginate={setCurrentPage}
                    />
                </div>

                {/* with no server-side pagination
                <ProductsTable data={products}></ProductsTable> */}
            </div>
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
        </div>
    );
};

export default ProductPage;
