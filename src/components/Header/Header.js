import './Header.css'

// import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {SearchContext} from "../../context";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

function Header() {
    // const { search, setSearch } = useContext(SearchContext);
    const { setSearch, setFilters } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = (newSearch) => {
        setSearch(newSearch);
        setFilters({});
        navigate("/");
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="navigation">
                    <Link to="/">BooksApp</Link>

                    <SearchBar setSearch={handleSearch} />

                    <Link to="/about">About</Link>

                    <ThemeToggler />
                </nav>
            </div>

        </header>
    );
}

export default Header;