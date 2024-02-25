import React from "react"
import Joke from "./components/Joke"

export default function App() {
    return (
        <div className="container">
            <Joke 
                setUp="I got my daughter a fridge for her birthday."
                pun="I can't wait to see her face light up when she opens it."
                // isPun={true}
                // upvotes={10}
                // downvotes={2}
                // comments={[{author: "", body: "", title: ""}, {...}]}
            />
            <Joke 
                setUp="How did the hacker escape the police?"
                pun="He just ransomware!"
            />
            <Joke 
                setUp="Why don't pirates travel on mountain roads?"
                pun="Scurvy."
            />
            <Joke 
                pun="It’s hard to explain puns to kleptomaniacs because 
                they always take things literally."
            />
        </div>
    )
}