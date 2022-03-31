import React,{useState} from 'react'
// import api
import { popularGamesUrl } from '../../api';
import Game from '../../components/game';
import { newGamesUrl } from '../../api';





const popularGames = ({newGames}:{newGames:any}) => {
  
  return (
    <div>
      {newGames.results.map(game => <Game key={game.id} game={game} />)}
    </div>
  )
}

export const getServerSideProps   =  async () =>{
  const res = await fetch(newGamesUrl());
  const newGames = await res.json();


  return{
    props:{newGames}
  }
}


export default popularGames