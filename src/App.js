import "./App.css";
import { useState, useEffect } from "react";
import { FilterList } from "./components/search/search";
import { PAginsyion } from "./components/pagination/pagination";
import { Filtered } from "./components/filtered/filter";
// import { useState } from "react";
// import Filterbtn from "./components/FilterBtn/Filterbtn";

function App() {
  let [todo, usState] = useState([]);
  let [status, getState] = useState("");
  let [name, setName] = useState("");
  let [gender, setgender] = useState("");
  let [activPage, setactivPage] = useState(1);

  let api = `https://rickandmortyapi.com/api/character/?page=${activPage}&name=${name}&status=${status}&gender=${gender}`;
  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      usState([data]);
      console.log(data);
    })();
  }, [api]);

  console.log(api);
  return (
    <>
      <h1 className='Big-text'>The Rick and Morty API</h1>
      <FilterList setName={setName} setactivPage={setactivPage} />
      <div className='acadion-box'>
        <Filtered getState={getState} setgender={setgender} setName={setName} />
      </div>
      <div className='Colors'>
        <div className='container'>
          <ul className='lists'>
            {todo.map((item) => {
              return item.results.map((todo) => {
                return (
                  <>
                    <li key={todo.id} className='items position-relative'>
                      {(function () {
                        if (todo.status === "Alive") {
                          return (
                            <>
                              <span
                                style={{ top: "2px", left: "4px" }}
                                className='position-absolute badge bg-success px-1 py-2'
                              >
                                {todo.status}
                              </span>
                            </>
                          );
                        }
                        if (todo.status === "Dead") {
                          return (
                            <>
                              <span
                                style={{ top: "2px", left: "4px" }}
                                className='position-absolute badge bg-danger px-1 py-2'
                              >
                                {todo.status}
                              </span>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <span
                                style={{ top: "2px", left: "4px" }}
                                className='position-absolute badge bg-secondary px-1 py-2'
                              >
                                {todo.status}
                              </span>
                            </>
                          );
                        }
                      })()}

                      <img
                        className='site-Img '
                        src={todo.image}
                        alt={todo.name}
                      />
                      <div className='boxs'>
                        <h3 className='names'>{todo.name}</h3>
                        <span className='location-title'>
                          Last known location: {todo.location.name} <br />
                        </span>
                        <a
                          className='location-Hreft'
                          target={"_blank"}
                          href={todo.location.url}
                        >
                          {todo.location.name}
                        </a>{" "}
                      </div>
                    </li>
                  </>
                );
              });
              // console.log(item.results);
            })}
          </ul>
          {/* {console.log(todo[0]?.info?.pages)} */}
          <PAginsyion
            activPage={activPage}
            setactivPage={setactivPage}
            pags={todo[0]?.info?.pages}
          />
        </div>
      </div>
    </>
  );
}

export default App;
