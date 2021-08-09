import React from 'react'
import PropTypes from 'prop-types'

const ButtonRandomQuote = ({author,onClikcHandler}) => {
    return (
        <button onClick={onClikcHandler}>{author}</button>
    )
}

ButtonRandomQuote.propTypes = {
    author: PropTypes.string.isRequired,
    onClikcHandler: PropTypes.func.isRequired
}

export default ButtonRandomQuote
