import React from "react";
import "./style.css";

function Item (props){
    return(
        <div className="book">
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <img src={props.image} alt={props.title}/>
            <p>{props.synopsis}</p>
            <a href={props.link}>See the book</a>
            <button onClick={props.click} id={props.id}>Save the book</button>
        </div>
    )
}

export default Item