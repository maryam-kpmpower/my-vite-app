import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProductPage from '../pages/ProductPage/ProductPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route
                path="/about"
                element={<AboutPage />}
                caseSensitive={false}
            ></Route>
            <Route
                path="/products"
                element={<ProductPage />}
                caseSensitive={false}
            ></Route>
            <Route
                path="/product"
                element={<Navigate to="/products" replace />}
                caseSensitive={false}
            ></Route>
            <Route path="/*" element={<h2>Page Not Found</h2>}></Route>
        </Routes>
    );
};

export default AppRouter;
