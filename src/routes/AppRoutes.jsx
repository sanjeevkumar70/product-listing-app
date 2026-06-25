import { Routes, Route } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
import ProductDetail from "../pages/ProductDetail";
import Header from "../components/Header";

export default function AppRoutes() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
}