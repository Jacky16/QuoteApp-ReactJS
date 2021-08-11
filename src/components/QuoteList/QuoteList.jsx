import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";


//Material UI
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const renderQuotes = quoteToRender =>{
    return( 
        quoteToRender &&
        quoteToRender.map(e => <li key={e.content}>“{e.content}“</li>)
        )
    }
    const QuoteList = () => {
        const [quotes,setQuotes] = useState({});
        
        const {author} = useParams();
        const history = useHistory();
        const goToMain = () =>{
            history.push("/");
        }

    //Get list of quotes
    const getQuotes = async () =>{
        const {data} = await axios(`https://quotable.io/quotes?author=${author}`);
        setQuotes(data)
    }
    
    useEffect( () => {
        getQuotes();
    }, [])

    return (
        <div className="quote-list">
            <h1>{author}</h1>
            <ul>
               {
                    renderQuotes(quotes.results) 
               }
            </ul>
            <Button
                startIcon={<ArrowBackIcon></ArrowBackIcon>}
                size="large"
                onClick={goToMain}
                >
                    Back
            </Button>
        </div>
    )
}

QuoteList.propTypes = {
    //author: PropTypes.string.isRequired
}

export default QuoteList
