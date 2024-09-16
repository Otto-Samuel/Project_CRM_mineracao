import React, { createContext, useState } from 'react';

export const AnuncioContext = createContext();

export const AnuncioProvider = ({ children }) => {
    const [anuncios, setAnuncios] = useState([]);

    return (
        <AnuncioContext.Provider value={{ anuncios, setAnuncios }}>
            {children}
        </AnuncioContext.Provider>
    );
};
