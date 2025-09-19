import './AboutPage.scss';
import { useNavigate } from 'react-router-dom';

// TODO: nav bar displayed on every page. tracking current page.
const AboutPage = () => {
    const navigate = useNavigate();
    const goToProducts = () => navigate('/products');

    return (
        <div className="about-page">
            <h2>About Page</h2>
            <div className="router-btns">
                {/* <button className="about-page-btn">About</button> */}
                <button className="products-page-btn" onClick={goToProducts}>
                    Products
                </button>
            </div>
        </div>
    );
};

export default AboutPage;
