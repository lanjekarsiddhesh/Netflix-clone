import React from 'react'
import './footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
      <ul>
        <li>Login/SignUp</li>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Carrer</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Corporate Information</li>
        <li>Contact US</li>
      </ul>
      <p className="copy-right">	&#169; 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
