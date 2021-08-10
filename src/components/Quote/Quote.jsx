import React ,{useEffect,useState}from "react";
import axios from "axios"
import ListAllQuotesFromAuthor from "../ListAllQuotesFromAuthor/ListAllQuotesFromAuthor";

const Quote = () =>{
    
    let [quoteData,setQuoteData] = useState([]);
    
    //Get a quote
    const getDataQuote = () =>{
        const url = 'https://api.quotable.io/random';
        axios.get(url)
        .then(response => setQuoteData(response.data))
    }

    useEffect(() => {
       getDataQuote(setQuoteData);
    }, []);

    return(
        <div>
            <button onClick={getDataQuote}>Random Quote</button>
            <blockquote>{"“" + quoteData.content + "”"}</blockquote>
            <p> {quoteData.author && <ListAllQuotesFromAuthor author={quoteData.author} onClikcHandler={null}/>}</p>
        </div>
    )
}

export default Quote
