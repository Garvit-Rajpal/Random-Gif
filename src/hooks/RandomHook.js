import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const RandomHook = (tag) => {

  const [img,setImg] =useState('');
  const [loading,setLoading]=useState(false);
     
    async function fetchData(tag){
        setLoading(true);
        const {data} =await axios.get(tag?`${url}&tag=${tag}`:url);
        const imgSource=data.data.images.downsized_large.url;
        setImg(imgSource);
        setLoading(false);
    
      }
    
      useEffect(()=>{
        fetchData(tag);
      },[])
    
  return {img,loading,fetchData}
}

export default RandomHook