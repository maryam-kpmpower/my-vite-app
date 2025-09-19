import type { Product } from '../types/product';

const url = 'https://jsonplaceholder.typicode.com/albums';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`status error: ${response.status}`);
        }
        const result: Product[] = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
};
