import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router'

const renderQuotes = quoteToRender =>{
    return( 
        quoteToRender &&
        quoteToRender.map(e => <li key={e.content}>{e.content}</li>)
        )
}
const QuoteList = () => {
    const [quotes,setQuotes] = useState({});
   
    const {author} = useParams();

    //Get list of quotes
    const getQuotes = async () =>{
        const {data} = await axios(`https://quotable.io/quotes?author=${author}`);
        setQuotes(data)
    }
    
    useEffect( () => {
        getQuotes();
    }, [])

    return (
        <div>
            <h1>{author}</h1>
            <ul>
               {
                    renderQuotes(quotes.results) 
               }
            </ul>
        </div>
    )
}

QuoteList.propTypes = {
    //author: PropTypes.string.isRequired
}

export default QuoteList
