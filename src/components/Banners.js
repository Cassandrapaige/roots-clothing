import React from 'react'
import Banner from './Banner'
import image1 from '../images/hair.jpg'
import image2 from '../images/couple.jpg'
import image3 from '../images/camera.jpg'
import image4 from '../images/leather.jpg'

const Banners = () => {
    return (
         <div className='bannerItems'>
                <Banner 
                    section = 'banner1' 
                    image = {image1} 
                    tagline = 'Just arrived'
                    title = 'New Items' />
                <Banner 
                    section = 'banner2' 
                    image = {image2} 
                    tagline = 'Limited Edition'
                    title = 'His & Hers Collection' />
                <Banner 
                    section = 'banner3' 
                    image = {image3} 
                    tagline = 'Limited Edition'
                    title = 'Accessories' />
                <Banner 
                    section = 'banner4' 
                    image = {image4} 
                    tagline = 'Just arrived'
                    title = 'Leather Accessories' /> 
        </div>
    )
}

export default Banners;
