import React, { useEffect, useState } from 'react';
import type { Product } from '../Table/ProductsTableUtils';
import ProductsTable from '../Table/ProductsTable';
import Pagination from './Pagination';

// interface ProductResponse {
//     products: Product[];
//     totalCount: number;
// }

const ServerSidePagination: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1); // initialize to avoid errors
    const [totalProducts, setTotalProducts] = useState<number>(0); // initialize to avoid errors
    const productsPerPage: number = 10;

    useEffect(() => {
        const callProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/albums?_page=${currentPage}&_limit=${productsPerPage}`,
                );
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
            } finally {
                setLoading(false);
            }
        };
        callProducts();
    }, [currentPage]);

    return (
        <div className="container">
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
    );
};
