import { useState, useEffect } from 'react';

export default function useTheme(key, initialTheme) {

    const [ theme, setTheme ] = useState(() => {
        const storedTheme = localStorage.getItem(key);
        return storedTheme ? JSON.parse(storedTheme) : initialTheme        
    })

    useEffect(() => {
        localStorage.setItem(key , JSON.stringify(theme));
    }, [key, theme]);

    return [theme, setTheme]
}