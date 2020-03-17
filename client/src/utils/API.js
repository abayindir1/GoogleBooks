import axios from "axios";

export default {
  getGoogleBooks: function (q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q)
  },
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  saveBook: function (savedBook) {
    return axios.post("/api/books", savedBook);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};
