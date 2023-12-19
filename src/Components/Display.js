import React from 'react'

//we are getting 'searchResults' as prop from App.js to render component
const Display = ({searchResults}) => {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap:"1rem",
        padding:"1rem",
        width:"90vw",
        boxSizing:"border-box",
    }}>
        {
            searchResults.map((result,index) =>(
                <div key={index}>
                    <img src={result.urls.thumb}  alt={result.alt_description}/>
                    <h5>{result.description}</h5>
                </div>
            ))
        }
    </div>
  )
}

export default Display;