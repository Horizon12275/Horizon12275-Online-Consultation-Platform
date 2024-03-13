import React, { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = value => {
        setSearchValue(value);
        console.log('searchValue:', searchValue);
    };

    return (
        <SearchContext.Provider value={{ searchValue, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
