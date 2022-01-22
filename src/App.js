import { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';

const GIFS = ["https://media2.giphy.com/media/XHsZnXjLy7zTcbadml/giphy.gif?cid=ecf05e47zm7img9sdts01pwv0wvxxgu6m4w85bvrq3gs7zzc&rid=giphy.gif&ct=g",
"https://media4.giphy.com/media/wtNDeZlcaxWhRSGA6e/giphy.gif?cid=ecf05e472fejhgz1jojw3v6mu27vsnlrlhv0lacptmebil9l&rid=giphy.gif&ct=g"
];

const DIFFERENT_GIFS = ["https://media2.giphy.com/media/Ogak8XuKHLs6PYcqlp/giphy.gif?cid=ecf05e47w1vu34z4lvjku6sjets4tz4ylz64kjpc2n3pl61y&rid=giphy.gif&ct=g", "https://media3.giphy.com/media/R82WhvO0MrjoFsvpb6/giphy.gif?cid=ecf05e47vi8k2i6fqa90e8r6hexuf9vnojk1ua1iqwoui8pc&rid=giphy.gif&ct=g"]

export default function App() {

  const [gifs, setGifs] = useState(GIFS);

  useEffect(() => {
    getGifs().then(gifs=>setGifs(gifs)); 
  }, []);
  

  return (
    <div className="App">
      <section className="App-content">
          {gifs.map((gif=> {
            return <div>
                        <h4>{gif.title}</h4>
                        <small>{gif.id}</small>
                        <img src={gif.url} alt={gif.title}/>
                   </div>
          }
            ))}
          
          <button onClick={() => setGifs (DIFFERENT_GIFS)}> Change gifs </button>
      </section>
    </div>
  );
}
