import React, { Component } from "react";
import Header from '../components/Header/Header'
import SavedBooks from '../components/SavedBooks/SavedBooks'
import "./style.css"
import API from "../utils/API";


class Saved extends Component {
  state = {
    saved: []
  };

  componentDidMount() {
    this.getSavedBooks()
}

getSavedBooks= () =>{
  API.getSavedBooks()
        .then(res => this.setState({ saved: res.data }))
        .catch(err => console.log(err))
}


handleDeleteButton = id => {
  API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err))
}

  render() {
    return (
      <>
        <Header />
      <div className='savedBooksContent'>
        <h2>Saved Books</h2>
        <hr/>
        {this.state.saved.map(book=>{
          return(
          <SavedBooks
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors.join(", ")}
          image={book.volumeInfo.imageLinks.thumbnail} 
          description={book.volumeInfo.description}
          link={book.volumeInfo.infoLink}
          click={this.handleDeleteButton}
          />
          )
        })}

      </div>
      </>
    )
  }
}
export default Saved;
