import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from "wouter";


export default function App() {

  // const [keyword, setKeyword] = useState("Silicon Valley");

  return (
    <div className="App">
      <section className="App-content">
          <h1>App</h1>
          <Route path="/gif/:keyword" 
                 component={ListOfGifs} />
          {/* <button onClick={() => setKeyword ("The Expanse")}> Change gifs </button>
          <ListOfGifs keyword={keyword}/> */}
      </section>
    </div>
  );
}
