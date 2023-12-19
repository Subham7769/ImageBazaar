import React,{useState, useEffect} from "react";
import axios from "axios";

const SearchBar = ({setSearchResults})=>{

    const [searchTerm,setSearchTerm] = useState("")

    //first time the website is loaded we use useEffect to call the func
    useEffect(()=>{
        implementSearch();
    },[])

    console.log(process.env.REACT_APP_UNSLASH_ACEESS_KEY)
    
    function implementSearch(e){
        if(e){
            e.preventDefault()
        }

        axios.get("https://api.unsplash.com/search/photos",{//Base url for searching the images
             headers:{
                 Authorization: `Client-ID ${process.env.REACT_APP_UNSLASH_ACEESS_KEY}`//Api Key
             },
             params:{
                query:searchTerm || "random" //Query for we are searching
             }
        })
        .then(response => {
            console.log(response.data.results);
            setSearchResults(response.data.results)//setting the value of searchResults 
            setSearchTerm("")//resetting input box search
        })
        .catch(error => console.log(error))
    }


    return(
        <div>

           <form onSubmit={implementSearch}>
               <input type="text"  placeholder="Search..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)} 

               />
               <button type="submit">Submit</button>
           </form>


        </div>
    )
}

export default SearchBar;