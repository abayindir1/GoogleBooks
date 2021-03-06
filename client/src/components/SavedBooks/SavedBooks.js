import React from "react";
import "./style.css"

function SavedBooks(props) {
    return (
        <div className="saved-book">
            <h1 className="bookTitle" >{props.title}</h1>
            <h3 className="bookAuthor">{props.author}</h3>
            <div className="bookContent">
            <img src={props.image} alt={props.title} className="bookImage"/>
            <p className="bookDescription">{props.description}</p>
            </div>
            <div className="bookLinks">
            <a href={props.link} className="bookSource">See the book</a>
            <button onClick={props.click} id={props.id} className="saveButton">Remove from list</button>
            </div>
        </div>
    )
}

export default SavedBooks