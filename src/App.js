import React,{useState} from "react";
import SearchBar from "./Components/SearchBar.js";
import Display from "./Components/Display.js";
import ApiBasics from "./Components/ApiBasics.jsx";


const App = ()=>{
  const [searchResults,setSearchResults] = useState([])



  return(
    <div>
      {/* <ApiBasics/> */}
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;
