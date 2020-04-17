import React, {useState, useEffect} from 'react'

const Header = () => {
    const [num, setNum] = useState(0)
    const images = [
        {url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'},
        {url: 'https://images.unsplash.com/photo-1450297428000-5f0b50540da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'},
        {url: 'https://images.unsplash.com/photo-1463760959829-d829ea46e191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'},
        {url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'},
        {url: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'},
        {url: 'https://images.unsplash.com/photo-1536706936563-c9e47fc563df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
    ]

    useEffect(() => {
        setTimeout(() => {
            if(num === images.length - 1) {
                setNum(0)
            } else {setNum(num + 1)}
        }, 2000)
    })
    return (
        <div class='parallax' style= {{backgroundImage: `url(${images[num].url})`}}> </div>        
    )
}

export default Header;