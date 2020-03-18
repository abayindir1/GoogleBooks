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
        .then(res => {
          this.setState({ saved: res.data })
        })
        .catch(err => console.log(err))
}


handleDeleteButton = id => {
  API.deleteBook(id)
      .then(()=> this.getSavedBooks())
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
          key={book._id}
          title={book.title}
          author={book.authors.join(", ")}
          image={book.thumbnail} 
          description={book.description}
          link={book.infoLink}
          click={()=>this.handleDeleteButton(book._id)}
          />
          )
        })}

      </div>
      </>
    )
  }
}
export default Saved;
