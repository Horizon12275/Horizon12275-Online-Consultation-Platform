import React, { createContext, useState } from 'react';

const TagContext = createContext();

export const TagProvider = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState('All');

    const handleChange = (tag) => {
        console.log('You are interested in: ', tag);
        setSelectedTags(tag);
    };

    return (
        <TagContext.Provider value={{ selectedTags, setSelectedTags , handleChange }}>
            {children}
        </TagContext.Provider>
    );
};

export default TagContext;
