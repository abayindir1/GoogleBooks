import React from "react";

function SavedBooks(props) {
    return (
        <div className="saved-book">
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <img src={props.image} alt={props.title}/>
            <p>{props.synopsis}</p>
            <a href={props.link}>See the book</a>
            <button onClick={props.click} id={props.id}>Delete book</button>
        </div>
    )
}

export default SavedBooks