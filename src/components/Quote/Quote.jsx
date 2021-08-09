import React from "react";
import Proptypes from "prop-types"
import ButtonRandomQuote from "../ButtonRandomQuote/ButtonRandomQuote";

const Quote = ({quote}) =>{
    return(
        <div>
            {quote}
            <p><ButtonRandomQuote author="Bill Gates"/></p>
        </div>
        
    )
}

Quote.propTypes ={
    quote: Proptypes.string.isRequired
}
export default Quote
