import React from 'react'
import './Back.css'
import '../../App.css'


export const Back = ({name, title, cover}) => {
    return (
        <>
        <div className="back">
            <div className="container">
                <span>{name}</span>
                <h1>{title}</h1>
            </div>
            <img src={cover} alt="image" />
        </div>
        </>
    )
}
