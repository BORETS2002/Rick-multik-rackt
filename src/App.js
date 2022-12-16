import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let [todo, usState] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((rest) => rest.json())
      .then((json) => usState([json]));
  }, []);
  return (
    <>
      <h1 className='Big-text'>The Rick and Morty API</h1>
      <div className='Colors'>
        <div className='container'>
          <ul className='lists'>
            {todo.map((item) => {
              return item.results.map((todo) => {
                return (
                  <>
                    <li key={todo.id} className='items'>
                      <img
                        className='site-Img'
                        src={todo.image}
                        alt={todo.name}
                      />
                      <div className='boxs'>
                        <h3 className='names'>{todo.name}</h3>
                        <span className='location-title'>
                          Last known location: <br />
                          <a
                            className='location-Hreft'
                            target={"_blank"}
                            href={todo.location.url}
                          >
                            {todo.location.name}
                          </a>{" "}
                        </span>
                      </div>
                    </li>
                  </>
                );
              });
              // console.log(item.results);
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
