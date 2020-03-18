import axios from "axios";

export default {
  // get books from google api
  getGoogleBooks: function (q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q)
  },
  // gets all saved books
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function (savedBook) {
    return axios.post("/api/books", savedBook);
  },
  // delete a book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
