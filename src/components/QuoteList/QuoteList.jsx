import React,{useState,useEffect} from 'react'
import axios from "axios"
import PropTypes from 'prop-types'
const renderQuotes = quoteToRender =>{
    return( 
        quoteToRender &&
        quoteToRender.map(e => <li key={e.content}>{e.content}</li>)
        )
}
const QuoteList = ({author}) => {
    const [quotes,setQuotes] = useState({});
    useEffect( async () => {
        const {data} = await axios("https://quotable.io/quotes?author=albert-einstein");
        setQuotes(data)
       
    }, [])
    
    return (
        <div>
            <h1>Bill Gates</h1>
            <ul>
               {
                   quotes && renderQuotes(quotes.results)
               }
            </ul>
        </div>
    )
}

QuoteList.propTypes = {
    //author: PropTypes.string.isRequired
}

export default QuoteList
