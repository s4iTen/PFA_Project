import React from 'react'
import pexel from "../assets/pexel.png"
import num1 from "../assets/num1.png"
import pexel2 from "../assets/pexel2.png"
import ns from "../assets/ns.png"
import ns1 from "../assets/ns1.png"
import "../Styles/gallery.css"


const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='gallery_item'>
            <h1 className='gallery_title'>
                Be Yourself!
            </h1>
            <img src={pexel}  className='gallery_img'/>
        </div>
        <div className='gallery_item'>
            <h1 className='gallery_title'>
                Just Do It!
            </h1>
            <img src={pexel2}  className='gallery_img'/>
        </div>
        <div className='gallery_item'>
            <h1 className='gallery_title'>
                  Creat Your Style!
            </h1>
            <img src={num1}  className='gallery_img'/>
        </div>
        </div>

  )
}

export default Gallery