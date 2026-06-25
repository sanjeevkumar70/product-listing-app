import { useEffect, useState } from "react";
import { getCategories } from "../api/productApi";
import { useProducts } from "../context/ProductContext";
import "./Filters.css";

export default function Filters({ brands }) {
    const {
        selectedCategories,
        setSelectedCategories,
        selectedBrands,
        setSelectedBrands,
        setMinPrice,
        setMaxPrice,
    } = useProducts();

    const [categories, setCategories] = useState([]);
    const [localMin, setLocalMin] = useState("");
    const [localMax, setLocalMax] = useState("");

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    const handleApply = () => {
        setMinPrice(localMin);
        setMaxPrice(localMax);
    };

    const toggleBrand = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(
                selectedBrands.filter((b) => b !== brand)
            );
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter(
                    (c) => c !== category
                )
            );
        } else {
            setSelectedCategories([
                ...selectedCategories,
                category,
            ]);
        }
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-search">
                <input
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="category-filter">
                <h4>Categories</h4>

                {categories.map((cat) => (
                    <label key={cat.slug}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(
                                cat.slug
                            )}
                            onChange={() =>
                                toggleCategory(cat.slug)
                            }
                        />
                        &nbsp; {cat.name}
                    </label>
                ))}
            </div>

            <div className="price-filter">
                <h4>Price Range</h4>

                <div className="price-row">
                    <input
                        type="number"
                        placeholder="Min"
                        value={localMin}
                        onChange={(e) =>
                            setLocalMin(e.target.value)
                        }
                    />

                    <input
                        type="number"
                        placeholder="Max"
                        value={localMax}
                        onChange={(e) =>
                            setLocalMax(e.target.value)
                        }
                    />
                </div>

                <button
                    className="apply-btn"
                    onClick={handleApply}
                >
                    Apply
                </button>
            </div>

            <div className="brands-filter">
                <h4>Brands</h4>

                {brands.map((brand) => (
                    <label key={brand}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(
                                brand
                            )}
                            onChange={() =>
                                toggleBrand(brand)
                            }
                        />
                        &nbsp; {brand}
                    </label>
                ))}
            </div>
        </aside>
    );
}