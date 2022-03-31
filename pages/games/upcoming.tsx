import React,{useState} from 'react'
// import api
import { upcomingGamesUrl } from '../../api';
import Game from '../../components/game';
import { gameDetailsURL } from '../../api';





const popularGames = ({upcoming}:{upcoming:any}) => {
  
  return (
    <div>
      {upcoming.results.map(game => <Game key={game.id} game={game} />)}
    </div>
  )
}

export const getServerSideProps   =  async () =>{
  const res = await fetch(upcomingGamesUrl());
  const upcoming = await res.json();


  return{
    props:{upcoming}
  }
}


export default popularGames