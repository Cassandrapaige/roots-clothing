import React from 'react'

const Banner = ({section, image, title, tagline}) => {
    return (
        <div className = {section}>
            <img src = {image} alt= {title}></img>
            <div className="overlay">
                <h4>{tagline}</h4>
                <h2>{title}</h2>  
                <a href = "#">Shop now</a>
            </div>  
        </div>
    )
}

export default Banner;