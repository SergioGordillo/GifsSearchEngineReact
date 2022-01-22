import React, { useState, useEffect } from 'react';
import Gif from './Gif'; 
import getGifs from '../services/getGifs';

export default function ListOfGifs ({keyword}) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
        getGifs({keyword}).then(gifs=>setGifs(gifs)); 
  }, []);

  return gifs.map(({id, url, title})=> 
    <>
        <Gif 
            id={id} 
            key={id} 
            title={title} 
            url={url}
        />
        {/* <button onClick={() => setGifs ([])}> Change gifs </button> */}
    </>

  )
};

