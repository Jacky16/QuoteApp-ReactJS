import React ,{useEffect,useState}from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

//Material UI
import Button from '@material-ui/core/Button';
import AutorenewSharpIcon from '@material-ui/icons/AutorenewSharp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Quote = () =>{

    let [quoteData,setQuoteData] = useState([]);

    //Go to page of list of quotes from the author
    const history = useHistory();
    const linkToListQuotesPage = () =>{
        history.push(`quote/${quoteData.author}`);
        
    }
    //Get a random quote
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
            <div className="random-button">
                <Button
                    endIcon={<AutorenewSharpIcon></AutorenewSharpIcon>}
                    size="large"
                    onClick={getDataQuote}
                    style={{fontSize:"16px"}}
                >
                    Random Quote
                </Button>
            </div>

            <div className="quote-section">
                {<blockquote>{"“" + quoteData.content + "”"}</blockquote>}
            </div>
            
            <div className="author-button">
                <Button
                    endIcon={<ArrowRightAltIcon/>}
                    size={"large"}
                    onClick={linkToListQuotesPage}
                    fullWidth={true}
                    style={{justifyContent: "space-between", fontSize:"20px"}}
                >
                    {quoteData.author}
                </Button>
            </div>
        </div>
    )
}

export default Quote
