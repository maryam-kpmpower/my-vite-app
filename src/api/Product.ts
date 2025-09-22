import type { Product } from '../types/ProductType';

export const fetchProducts = async (): Promise<Product[]> => {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Status error: ${response.status}`);
        }
        const result: Product[] = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        // console.error('Failed to fetch products:', error);
        console.log(`Failed to fetch products: ${error}`);
        return [];
    }
};
