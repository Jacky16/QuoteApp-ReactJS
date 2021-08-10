import React from 'react'
import PropTypes from 'prop-types'

const ListAllQuotesFromAuthor = ({author,onClikcHandler}) => {
    return (
        <button onClick={onClikcHandler}>{author}</button>
    )
}

ListAllQuotesFromAuthor.propTypes = {
    author: PropTypes.string.isRequired,
    onClikcHandler: PropTypes.func.isRequired
}

export default ListAllQuotesFromAuthor
