import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { useState } from "react";
import About from "../About/About";
import BookDetails from "../BooksList/BookDetails/BookDetails";
import BooksList from "../BooksList/BooksList";
import NotFound from "../NotFound/NotFound";
import SearchBar from "../SearchBar/SearchBar";



function App() {
  const[search, setSearch] = useState('');

  return (
      <Router>
          <div className="app">
              <SearchBar setSearch={setSearch}/>

              <Routes>
                  <Route path="/" element={<BooksList search={search} />}></Route>
                  <Route path="/book/:bookId" element={<BookDetails />}></Route>

                  <Route path="/about" element={<About />}></Route>

                  <Route path="*" element={<Navigate to="/404" />}></Route>
                  <Route path="/404" element={<NotFound />}></Route>
              </Routes>
          </div>
      </Router>

  );
}

export default App;
