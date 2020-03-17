import React, { Component } from "react";
import Header from '../components/Header/Header'
import Item from '../components/Book/Book'
import "./style.css"
import API from "../utils/API";


class Books extends Component {
  state = {
    books: [],
    q: ""
  };

  handleFormChange = (event) => {
    event.preventDefault()
    // console.log(this.state.q)
    this.setState({
      q: event.target.value
    });
  }//works

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("bum")
    API.getGoogleBooks(this.state.q)
      .then(res => {
        console.log(res.data.items)
        this.setState({
          books: res.data.items
        })
      })
  }

  handleSave = (event) => {
    console.log(event.target)
    event.preventDefault();
    let saved = this.state.books.filter(book => book.id === event.target.id)
    
    // console.log(this.state.books.id)
    // console.log(saved)
    API.saveBook(saved)
      .then(console.log("saved") )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <h1>You can search for any book here.</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="form-control"
              placeholder="Search for a book"
              onChange={this.handleFormChange}
              value={this.state.q}
            />
            <button className="searchButton">
              Search
        </button>
          </form>
        </div>

        <div className="bookResult">
          {this.state.books.map(bk => {
            return (
              <>
                <Item
                  key={bk.id}
                  title={bk.volumeInfo.title}
                  author={bk.volumeInfo.authors}
                  image={bk.volumeInfo.imageLinks.thumbnail}
                  synopsis={bk.volumeInfo.description}
                  link={bk.volumeInfo.infoLink}
                click ={(event)=>this.handleSave(event)}
                id={bk.id}
                />
                <hr />
              </>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Books;
