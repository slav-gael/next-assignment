'use client';

import React from "react";
import { useState } from "react";
import "./SearchBar.css";

type SearchBarProps = {
    products: string[];
};

const SearchBar = ({ products }: SearchBarProps) => {
    const [searchValue, setSearchValue] = useState("Search for an item")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    };

    const handleClearClick = () => {
        setSearchValue("")
    };

    const shouldDisplayButton = searchValue.length > 0;

    const filteredProducts = products.filter((product) => {
        return product.includes(searchValue)
    });

    // onChange executes function argument when input value changes
    // shouldDisplayButton shortcircuiting - conditionally render if true
    return (
        <div>
            <input className="search-bar" type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

            <ul>
            {filteredProducts.map((product) => {
                return <li key={product}>{product}</li>
            })}
            </ul>
        </div>
    );
};

export default SearchBar;