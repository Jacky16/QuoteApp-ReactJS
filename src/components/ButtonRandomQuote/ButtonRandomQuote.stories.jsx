import React from "react"
import ButtonRandomQuoteStories from "./ButtonRandomQuote"
export default{
    title: "Button",
    component: ButtonRandomQuoteStories
}
function showQuote(){
    fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                console.log(`${data.author}": "${data.content}`)
            })
    }
export const ButtonQuoteExample = () => (<ButtonRandomQuoteStories author ="Bill gates" onClikcHandler={showQuote}/>)