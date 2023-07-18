import axios from "axios";

const BASE_URL = `https://www.googleapis.com/books/v1/`;

export function getBooksBySearchTerm(SearchTerm) {
    return axios.get(`${BASE_URL}volumes?q=${SearchTerm}`);
}

export function getBookById(BookID) {
    return axios.get(`${BASE_URL}volumes/${BookID}`);
}
