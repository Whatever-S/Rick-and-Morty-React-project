import title from '../../resources/img/Title.jpg'
import React from 'react'
import './app-title.scss'

function Title(){
    return(
        <img className="title-img" src={title} alt="Rick and Morty"/>
    )
}

export default Title