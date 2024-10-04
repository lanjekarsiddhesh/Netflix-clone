import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero" >
        <img src={hero} alt="" className='banner_image' />
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption_img' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nostrum animi maxime consequuntur aut consectetur quasi iste, 
            molestias veritatis doloremque iusto ipsam nihil similique fugit dolor illum. 
            Autem dolorum accusantium in.</p>
            <div className="hero_btns">
              <button className='btn'><img src={play} alt=''/>Play</button>
              <button className='btn dark-btn'><img src={info} alt=''/>More info.</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more_cards">
      <TitleCards title={"Top Rated"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"}  category={"upcoming"}/>
      <TitleCards title={"Popular"} category={"popular"}/>
      {/* <TitleCards title={"Only on netflix"}/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Home
