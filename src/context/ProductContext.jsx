import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    return (
        <ProductContext.Provider
            value={{
                selectedCategories,
                setSelectedCategories,
                selectedBrands,
                setSelectedBrands,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);