import React from 'react';
import { type Product } from './ProductsTableUtils';
import './ProductsTable.scss';
import { useState, useMemo } from 'react';

type ProductsTableProps = {
    data: Product[];
    colOrder?: (keyof Product)[];
};

const ProductsTable: React.FC<ProductsTableProps> = ({ data, colOrder }) => {
    const [sortConfig, setSortConfig] = useState<{
        key: keyof Product | null;
        direction: 'ascending' | 'descending';
    }>({ key: null, direction: 'ascending' });

    if (!data.length) return <p>No Data Available.</p>;

    const headers: (keyof Product)[] =
        colOrder ?? (Object.keys(data[0]) as (keyof Product)[]); // only returns a string of valid keys defiend in type Product

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return data;
        const sorted = [...data].sort((a, b) => {
            const aVal = a[sortConfig.key!];
            const bVal = b[sortConfig.key!];
            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return aVal - bVal;
            } else {
                return String(aVal).localeCompare(String(bVal));
            }
        });
        return sortConfig.direction === 'ascending' ? sorted : sorted.reverse();
    }, [data, sortConfig]);

    const handleSort = (key: keyof Product) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                return {
                    key,
                    direction:
                        prev.direction === 'ascending'
                            ? 'descending'
                            : 'ascending',
                };
            }
            return { key, direction: 'ascending' };
        });
    };

    return (
        <table className="products-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={String(header)} className={`col-${header}`}>
                            <span>{String(header)}</span>
                            <button onClick={() => handleSort(header)}>
                                {sortConfig.key === header
                                    ? sortConfig.direction === 'ascending'
                                        ? '▲'
                                        : '▼'
                                    : '⇅'}
                            </button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, index) => (
                    <tr key={row.id || index}>
                        {headers.map((header) => (
                            <td
                                key={String(header)}
                                className={`cell-${header}`}
                            >
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
