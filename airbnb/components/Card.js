import React from "react"

export default function Card() {
    return (
        <div className="card">
            <div className="card-photo">
                <span className="status">sold out</span>
            </div>
            <div className="reviews">
                <img src="../images/star.png" alt="red star" className="star" />
                <p className="star-number">5.0</p>
                <span className="number-reviews">&lpar;6&rpar;·USA</span>
            </div>
            <h5 className="card-title">Life lessons with Katie Zaferes</h5>
            <p className="price">From $136 <span className="per-person">/ person</span></p>
        </div>
    )
}