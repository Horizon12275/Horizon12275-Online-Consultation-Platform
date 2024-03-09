import React, { createContext, useState } from 'react';

// 创建一个Context对象
const TagContext = createContext();

export const TagProvider = ({ children }) => {
    // 创建一个状态
    const [selectedTags, setSelectedTags] = useState('All');

    // 创建一个方法，用于修改状态
    const handleChange = (tag) => {
        console.log('You are interested in: ', tag);
        setSelectedTags(tag);
    };

    // 将状态和方法以对象的形式传递给Context.Provider
    return (
        <TagContext.Provider value={{ selectedTags, setSelectedTags , handleChange }}>
            {children}
        </TagContext.Provider>
    );
};

// 导出Context对象
export default TagContext;
