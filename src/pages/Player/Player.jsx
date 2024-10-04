import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import moment from 'moment'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const naviGate = useNavigate()

  const [ApiData, setApiData] = useState({
    name:"",
    key:"",
    type:"",
    published_at:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODRiNmNlY2JhYmMzZGUwNmYwZjU3NjFjOTI0M2Y2ZSIsIm5iZiI6MTcyNzk2NzE5Ni4zOTY4NjMsInN1YiI6IjY2ZmFjZDUyYzU5YTJkYjMyZGQwMWM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVgf4rZCXSkxwvNZPGtckOGzZrfqitkoCXarf0neTLs'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{naviGate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${ApiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player_info">
        <p>{moment(ApiData.published_at).fromNow()}</p>

        <p>{ApiData.name}</p>
        <p>{ApiData.type} </p>
      </div>
    </div>
  )
}

export default Player
