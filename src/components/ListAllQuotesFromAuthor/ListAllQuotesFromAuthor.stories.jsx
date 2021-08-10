import React from "react"
import ListAllQuotesFromAuthor from "./ListAllQuotesFromAuthor"
export default{
    title: "Button",
    component: ListAllQuotesFromAuthor
}
function showQuote(){
    fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                console.log(`${data.author}": "${data.content}`)
            })
    }
export const ButtonQuoteExample = () => (<ListAllQuotesFromAuthor author ="Bill gates" onClikcHandler={showQuote}/>)