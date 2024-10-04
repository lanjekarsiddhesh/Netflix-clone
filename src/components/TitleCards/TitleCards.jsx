import React, { useEffect, useRef, useState } from 'react'
import './titleCards.css'
import Cards_data from '../../assets/cards/Cards_data'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  
  const cardsRef = useRef()
  const [ApiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODRiNmNlY2JhYmMzZGUwNmYwZjU3NjFjOTI0M2Y2ZSIsIm5iZiI6MTcyNzk2NzE5Ni4zOTY4NjMsInN1YiI6IjY2ZmFjZDUyYzU5YTJkYjMyZGQwMWM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVgf4rZCXSkxwvNZPGtckOGzZrfqitkoCXarf0neTLs'
    }
  };


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Now Playing"}</h2>
      <div className="card_lists" ref={cardsRef} >
        {ApiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
