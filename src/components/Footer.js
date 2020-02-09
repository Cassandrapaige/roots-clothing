import React from 'react'
import Navigation from './Navigation'
import Form from './Form'

const Footer = () => {

    const help_nav = [
        {label: "Customer Service"},
        {label: "FAQ"},
        {label: "Contact Us"},
        {label: "Sell back program"},
        {label: "Return policies"},
        {label: "Warranties"}
    ]

    const shop_nav = [
        {label: "Store App"},
        {label: "Find a location"},
        {label: "Services"},
        {label: "Catalogue"},
        {label: "Family"},
        {label: "Planners"},
        {label: "Buying guide"},
        {label: "Gift cards"},
        {label: "Payment options"}
    ]
    
    const about_nav = [
        {label: "This is us"},
        {label: "Careers"},
        {label: "Newsroom"},
        {label: "Democratic Design"},
        {label: "Sustainability"},
        {label: "Foundation"}
    ]

    const links = [
        {
            label: "Store Locator", 
            icon: <i class="fas fa-map-marker-alt"></i> 
        },
        {
            label: "Pick Up In Store", 
            icon: <i class="fas fa-store-alt"></i> 
        },
        {
            label: "Delivery Options", 
            icon: <i class="fas fa-truck"></i> 
        },
        {
            label: "Shop Social", 
            icon: <i class="fab fa-instagram"></i> 
        },
        {
            label: "Returns", 
            icon: <i class="fas fa-undo"></i> 
        },
        {
            label: "Track Order", 
            icon: <i class="fas fa-route"></i> 
        }
    ]
    const copy_nav = [
        {label: "Give Feedback"},
        {label: "Privacy and Terms of Use"},
        {label: "AODA Customer Service"}
    ]
    return (

    <footer>
       <div class= 'links'>
        <Navigation 
            items = {help_nav} 
            section = "help_nav" 
            title = "Help"/>
        <Navigation 
            items = {shop_nav} 
            section = "shop_nav" 
            title = "Shop & Learn"/>
        <Navigation 
            items = {about_nav} 
            section = "about_nav" 
            title = "About Us"/>
        <Form />
        </div>
    
        <div className="footer_nav">
        <Navigation 
            items = {links} 
            section = "social_links" />
        </div>
        
        <div className="copyright">
        <p>© Roots Canada 2002 - 2020 | 1400 Castlefield Avenue, Toronto, Ontario, M6B4C4</p>
        <Navigation 
            items = {copy_nav}
            section = "copy_nav" />
        </div>
      

       </footer>
    )
}

export default Footer;