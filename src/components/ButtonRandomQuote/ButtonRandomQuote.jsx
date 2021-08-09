import React from 'react'
import PropTypes from 'prop-types'

const ButtonRandomQuote = ({author}) => {
    return (
        <button>{author}</button>
    )
}

ButtonRandomQuote.propTypes = {
    author: PropTypes.string.isRequired
}

export default ButtonRandomQuote
