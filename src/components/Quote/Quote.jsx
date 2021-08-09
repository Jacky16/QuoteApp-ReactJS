import React ,{useEffect,useState}from "react";
import axios from "axios"
import ButtonRandomQuote from "../ButtonRandomQuote/ButtonRandomQuote";

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
            {quoteData.content}
            <p> {quoteData.author && <ButtonRandomQuote author={quoteData.author} onClikcHandler={getDataQuote}/>}</p>
        </div>
    )
}

export default Quote
