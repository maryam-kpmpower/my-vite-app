import './ProductPage.scss';
import ProductsTable from '../../components/Table/ProductsTable';

const ProductPage: React.FC = () => {
    return (
        <div className="product-page">
            <h2>Products Page</h2>
            <div className="products">
                <h2>Proucts Table</h2>
                {/* automatic rendering of the table - useEffect */}
                {/* with server-side pagination */}
                <ProductsTable />
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
