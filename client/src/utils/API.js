import axios from "axios";

export default {
  // get books from google api
  getGoogleBooks: function (q) {
    return axios.get("/api/google", {params: {q: "title:" +q}});
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
