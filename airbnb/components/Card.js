import React from "react"

export default function Card(props) {
    let imgSrc = "../images/" + props.img;
    return (
        <div className="card">
            <div className="wrapper-photo">
                <img src={imgSrc} alt="photo" className="card-photo" />
                <span className="status">{props.status}</span>
            </div>
            <div className="reviews">
                <img src="../images/star.png" alt="red star" className="star" />
                <p className="star-number">{props.rating}</p>
                <span className="number-reviews">({props.reviewCount}) · {props.country}</span>
            </div>
            <h5 className="card-title">{props.title}</h5>
            <p className="price">From ${props.price} <span className="per-person">/ person</span></p>
        </div>
    )
}