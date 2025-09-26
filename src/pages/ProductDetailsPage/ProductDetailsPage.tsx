import { useParams } from 'react-router-dom';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="product-details">
            <p>item id is: {id}</p>
        </div>
    );
};
export default ProductDetailsPage;
