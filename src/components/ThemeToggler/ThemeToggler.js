import React, { useContext, useEffect} from "react";
import {ThemeContext} from "../../context";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return <button onClick={toggleTheme}>Toggle theme</button>
}

export default ThemeToggler;