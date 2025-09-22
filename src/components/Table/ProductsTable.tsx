import React from 'react';
import type { Product } from './ProductsTableUtils';
import './ProductsTable.scss';

type ProductsTableProps = {
    data: Product[];
};

const ProductsTable = ({ data }: ProductsTableProps) => {
    if (!data.length) return <p>No Data Available.</p>;
    const headers = Object.keys(data[0]) as (keyof Product)[]; // only returns a string of valid keys defiend in type Product
    return (
        <table className="products-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={String(header)}>{String(header)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {headers.map((header) => (
                            <td key={String(header)}>
                                {typeof row[header] === 'object'
                                    ? JSON.stringify(row[header])
                                    : String(row[header])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductsTable;
