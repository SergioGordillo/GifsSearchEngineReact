import React, { useState, useEffect } from 'react';
import Gif from './Gif'; 
import getGifs from '../services/getGifs';

export default function ListOfGifs ({params}) {  
  const {keyword}=params; 
  console.log(`Hola ${keyword}`) 
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
        getGifs({keyword}).then(gifs=>setGifs(gifs)); 
  }, [keyword]);

  return (
    <div>
        {     
            gifs.map(({id, url, title})=> 
            
                <Gif 
                    id={id} 
                    key={id} 
                    title={title} 
                    url={url}
                />
            )
        }
    </div> 
  )

};





