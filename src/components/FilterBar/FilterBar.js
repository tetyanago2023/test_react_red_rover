import React, { useContext } from 'react';
import { SearchContext } from "../../context";

const language = [
    { code: "en", label: "English"},
    { code: "ru", label: "Russian"},
    { code: "fr", label: "French"},
    { code: "de", label: "German"},
    { code: "es", label: "Spain"},
]

function FilterBar(props) {
    const { filters, setFilters } = useContext(SearchContext);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;

        if (!value) {
            alert("Please make your selection");
            return;
        }

        if (name === "langRestrict" && !language.some((lang) => lang.code === value)) {
            alert("Selected language is not supported");
            return;
        }

        setFilters({
            ...filters,
            [name]: value,

        });
    }

    return (
        <div className="filter-bar">
            <label>
                <select name="langRestrict" value={filters.langRestrict || ''} onChange={handleFilterChange}>
                    <option value="">Select a language</option>
                    {language.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default FilterBar;