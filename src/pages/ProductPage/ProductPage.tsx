import './ProductPage.scss';

const ProductPage = () => {
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
        </div>
    );
};

export default ProductPage;
