import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; //mini css file
import "bootstrap/dist/js/bootstrap"; //mini js file
import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SavedCharacters from "./Pages/SavedCharacters";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



//all components bhi import krne hai abhi
/*
bootstarp vala dekh lena hta lena
*/

//note:in order to link Home page to main path that is the root we linked it in routes path in function app
//similarly baki files ko import krke un pages ko link krskte hai
function App(){
  return (
     <Router>
       <div className="App" ><Navbar /></div>
       <Routes>
         <Route path="/" element ={<Home />} />
         <Route path="/Savedcharacters" element ={<SavedCharacters />} />
         <Route path="/login" element ={<Login />} />
         <Route path="/register" element ={<Register />} />


       </Routes>


     </Router>
  )
}
//iss Home ko ek page bnaya diya hai
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1); //setpagenum function is used to change the variables value everytime
  //for adding functionality to search bar to actually search
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`; //stored api
  let [fetchedData, updateFetchedData] = useState([]); //fetched data =var and updatfetched data is function which gets called and updates the variable
  let { info, results } = fetchedData; //in this we detrsuctured data into pages=info, results=characters data kyunki hme bss vhi chaiye
  //passing results to cards component
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); //await likh rhe hai toh to let var wait jab tak data fetch na hojaaye
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <div className="App">

        

        <Search setPageNumber={setPageNumber} setSearch={setSearch} />

        <div className="container">
          <div className="row">
            <Filter />

            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards results={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
export default App;
