import {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import RandomHook from '../hooks/RandomHook';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function Random() {
  const {img,loading,fetchData}=RandomHook();
  
    return (
    <div className="bg-green-400 w-[600px] flex flex-col items-center border border-black rounded-lg mt-10">
      <h2 className="font-bold underline text-2xl">A Random Gif</h2>
      {
        loading?(<Spinner/>):(<img className='p-1' src={img}></img>)
      }
      
      <button onClick={()=>{fetchData()}} className="w-11/12 text-center bg-white opacity-70 rounded-lg p-1 mb-2 mt-3">Generate</button>

    </div>
  );
}
