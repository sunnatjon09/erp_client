import * as React from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode';

export const COLOR_CHANGE_BG = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "bg-dark" : "bg-light";
export const COLOR_CHANGE_TABLE = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "table-dark" : "table";
// export const COLOR_CHANGE_BG_ACTIVE = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "bg-light" : "bg-dark";
export const COLOR_CHANGE_BG_SECONDARY = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "bg-secondary" : "bg-light";
export const COLOR_CHANGE_TEXT = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "text-light" : "text-dark";
// export const COLOR_CHANGE_SHADOW = localStorage.getItem("color_change") === true || localStorage.getItem("color_change") === "true" ? "shadow-light" : "shadow-dark";
export const ColorMode = () => {
    const colorStorage = localStorage.getItem("color_change")
    const [isDarkMode, setDarkMode] = React.useState(colorStorage === "true" || colorStorage === true);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked)
        localStorage.setItem("color_change", checked ? "true" : "false")
        window.location.reload()
    };

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
        />
    );
};