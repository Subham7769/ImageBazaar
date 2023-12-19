import axios from 'axios'
import React,{useState} from 'react'

const ApiBasics = () => {


    const [data, setData] = useState(null)
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)


    //template to fetch data using fetch function
    // in these templates we are sending some data to the server & get the data/output

    function fetchData (){
        
        fetch("link",{
            method: "POST",
            headers:{ "content-type" : "application/JSON" },
            body: JSON.stringify({
                num1: number1,
                num2: number2
            }),
        })
        .then(response=>response.json())//will return promise
        .then(response=>console.log(response.data))
        .catch(err => console.log(err))
    }
    
    
    //template to fetch data using axios function

    function fetchDataAxios(){
        axios.post("link",{num1:number1,num2:number2})
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }



    //axios/fetch/response.json() are asynchronous so we will use (Async-await)

    async function fetchDataAsync(){
        try {
            const response = await axios.post("link",{num1:number1,num2:number2})
            console.log(response.data);     
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>ApiBasics</div>
  )
}

export default ApiBasics