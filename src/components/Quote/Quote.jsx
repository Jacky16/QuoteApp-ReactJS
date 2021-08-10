import React ,{useEffect,useState}from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

const Quote = () =>{

    let [quoteData,setQuoteData] = useState([]);

    //Pasar a la pagina de listas de citas
    let history = useHistory();
    const linkToListQuotesPage = () =>{
        history.push(`quote/${quoteData.author}`);
        
    }
    //Get a quote
    const getDataQuote = async () =>{
        const url = 'https://api.quotable.io/random';
        await axios.get(url)
        .then(response => setQuoteData(response.data))
    }

    useEffect(() => {
       getDataQuote(setQuoteData);
    }, []);

    return(
        <div>
            <button onClick={getDataQuote}>Random Quote</button>
            {<blockquote>{"“" + quoteData.content + "”"}</blockquote>}
            <button onClick={linkToListQuotesPage}>
            {quoteData.author}
            </button>
        </div>
    )
}

export default Quote
