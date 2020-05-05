import React, {useState} from 'react';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const renderItems = props.items.map((item) => {
    return (
         <li key = {item.label} style= {{display: isOpen && 'block'}}>
             <a href="#"> 
                {item.icon}
                {item.label}  
            </a>
        </li>
        )}
    )
    return (
        <ul className = { props.section } onClick = {() => setIsOpen(!isOpen)}>
        <h3 className= "list-heading">{ props.title }</h3>
        { renderItems }
        </ul>
    )
}

export default Navigation;