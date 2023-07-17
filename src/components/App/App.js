import { useState } from "react";
import './App.css';
import BooksList from "../BooksList/BooksList";
import SearchBar from "../SearchBar/SearchBar";
import BookDetails from "../BooksList/BookDetails/BookDetails";


function App() {
  const[search, setSearch] = useState('');
  const[selectedBook, setSelectedBook] = useState(null);
  return (
    <div className="app">
      <SearchBar setSearch={setSearch}/>
      <BooksList search={search} onSelectBook={setSelectedBook} />

      { selectedBook && <BookDetails bookId={selectedBook} /> }
    </div>
  );
}

export default App;
