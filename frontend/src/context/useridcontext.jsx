import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
    const [currentUserId, setCurrentUserId] = useState(localStorage.getItem('currentUserId') || null);

    useEffect(() => {
      localStorage.setItem('currentUserId', currentUserId);
    }, [currentUserId]);

    return (
        <UserIdContext.Provider value={{ currentUserId, setCurrentUserId }}>
            {children}
        </UserIdContext.Provider>
    );
}

export default UserIdContext;