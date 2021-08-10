import React from "react"
import Quote from "../components/Quote"
import { useHistory } from "react-router"
export const QuotePage = () => {
    const history = useHistory();

    const onClickHandler = (author) =>{
        history.push(`/quote/${author}`)
    }
    return (
        <div>
            <Quote onClickAuthor={onClickHandler}/>
        </div>
    )
}

export default QuotePage;
