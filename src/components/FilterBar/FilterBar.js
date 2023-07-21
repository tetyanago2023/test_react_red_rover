import React, { useContext } from 'react';
import { SearchContext } from "../../context";

function FilterBar(props) {
    const { filters, setFilters } = useContext(SearchContext);

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,

        });
    }

    return (
        <div className="filter-bar">
            <label>
                Language:
                <input type="text" name="langRestrict" value={filters.langRestrict || ''} onChange={handleFilterChange} />
            </label>
        </div>
    );
}

export default FilterBar;