
import React, { useState } from "react";
import './../styles/App.css';
import SearchBar from "./SearchBar";

const App = () => {

  let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const[filter , setFilter] = useState(["apple", "banana", "cherry", "date", "elderberry", "fig"]);


  return (
    <div>
        {/* Do not remove the main div */}
        <SearchBar filter= {filter}
               setFilter = {setFilter} />
    </div>
  )
}

export default App