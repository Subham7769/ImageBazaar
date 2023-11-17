import React,{useState} from "react";
import SearchBar from "./Components/SearchBar.js";
import Display from "./Components/Display.js";


const App = ()=>{
  const [searchResults,setSearchResults] = useState([])



  return(
    <div>
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;
