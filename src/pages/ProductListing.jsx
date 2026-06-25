import "./ProductListing.css";
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../context/ProductContext";
import { getProducts, getProductsByCategory, } from "../api/productApi";
import ErrorMessage from "../components/ErrorMessage";

const LIMIT = 12;

export default function ProductListing() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const {
        selectedCategories = [],
        selectedBrands = [],
        minPrice,
        maxPrice,
    } = useProducts();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError("");
                let data;

                if (selectedCategories.length === 1) {
                    data = await getProductsByCategory(
                        selectedCategories[0]
                    );

                    setProducts(data.products);
                    setFilteredProducts(data.products);
                    setTotal(data.products.length);
                } else if (selectedCategories.length > 1) {
                    const responses = await Promise.all(
                        selectedCategories.map((category) =>
                            getProductsByCategory(category)
                        )
                    );

                    const mergedProducts = responses.flatMap(
                        (res) => res.products
                    );

                    setProducts(mergedProducts);
                    setFilteredProducts(mergedProducts);
                    setTotal(mergedProducts.length);
                } else {
                    const skip = (currentPage - 1) * LIMIT;

                    data = await getProducts(
                        LIMIT,
                        skip
                    );

                    setProducts(data.products);
                    setFilteredProducts(data.products);
                    setTotal(data.total);
                }
            } catch (error) {
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage, selectedCategories]);

    useEffect(() => {
        let temp = [...products];

        if (selectedBrands.length) {
            temp = temp.filter((p) =>
                selectedBrands.includes(p.brand)
            );
        }

        if (minPrice) {
            temp = temp.filter(
                (p) => p.price >= Number(minPrice)
            );
        }

        if (maxPrice) {
            temp = temp.filter(
                (p) => p.price <= Number(maxPrice)
            );
        }

        setFilteredProducts(temp);
    }, [
        products,
        selectedBrands,
        minPrice,
        maxPrice,
    ]);

    const brands = [
        ...new Set(
            products
                .filter((p) => p.brand)
                .map((p) => p.brand)
        ),
    ];

    return (
        <div className="layout">
            <Filters brands={brands} />
            <div className="content">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <>
                        <ProductGrid products={filteredProducts} />

                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(total / LIMIT)}
                            setCurrentPage={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
}