import React from 'react'
import "./Title.css";

const Title = ( { text, title }) => {

    // desestructurar fuera
    // const { text } = props

    return (
        <div className='title-container'>
            <h2 className='welcome-login'>{title}</h2>
            <label className='title-label'>{text}</label>
        </div>
    )
;
}

export default Title;