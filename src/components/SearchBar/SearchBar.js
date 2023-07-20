import {useState} from "react";

function SearchBar({ setSearch }) {
    const[searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        setSearch(searchValue);
    }

    return (
        <div className='search'>
            <input type="text"
                   placeholder="Search Books..."
                   onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={handleSearch}>Go</button>
        </div>
    );
}

export default SearchBar;