import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            //props.img este img se debe llamar igual que en las propiedades que se pasan en el Card que esta en App.js da igual si no se llama igual que en el data.js
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}