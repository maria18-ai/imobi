import React from 'react'

export const Heading = ({ title, subtitle }) => {
    return (
    <>
    <div className="heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
    </>
    )
}
