import React from 'react';


const Navigation = (props) => {
    const renderItems = props.items.map((item) => {
    return (
         <li key = {item.label}>
             <a href="#"> 
                {item.icon}
                {item.label}  
            </a>
        </li>
        )}
    )
    return (
        <ul className = { props.section }>
        <h3 className= "list-heading">{ props.title }</h3>
        { renderItems }
        </ul>
    )
}

export default Navigation;