import React from "react"

export default function Joke(props) {
    return (
        <div className="wrapper">
            <p>{props.setUp}</p>
            <p>{props.pun}</p>
        </div>
    )
}
