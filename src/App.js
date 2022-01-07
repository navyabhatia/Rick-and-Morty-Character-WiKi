import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards/Cards";
//all components bhi import krne hai abhi
/*
bootstarp vala dekh lena hta lena
*/

function App() {
  let api = `https://rickandmortyapi.com/api/character/?page=1`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <div className="App">
        <h1 className="text-center mb-3">Characters</h1>
        <div className="container">
          <div className="row">
            Filter component will be placed here
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards results={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
