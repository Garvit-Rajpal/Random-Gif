import {useState, useEffect} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import RandomHook from '../hooks/RandomHook';



export default function Tag() {

  const [tag,setTag]=useState('car');
  const {img,loading,fetchData}=RandomHook(tag);

  function changeHandler(event){
     setTag(event.target.value);
  }
  
    return (
    <div className="bg-blue-400 w-[600px] flex flex-col items-center border border-black rounded-lg mt-10">
      <h2 className="font-bold underline text-2xl">A Random {tag} Gif</h2>
      {
        loading?(<Spinner/>):(<img className='p-1' src={img}></img>)
      }

      <input
       className="w-11/12 text-center bg-white rounded-lg p-1 mb-2 mt-3"
       type='text'
       value={tag}
       onChange={changeHandler}
      />
      
      <button onClick={()=>{fetchData(tag)}} className="w-11/12 text-center bg-white opacity-70 rounded-lg p-1 mb-2 mt-3">Generate</button>

    </div>
  );
}
