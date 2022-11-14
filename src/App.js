import {useState, useEffect} from "react"
import './App.css';
import axios from "./axios"

function App() {
  const[myData, setMyData]=useState([])
  const[isError,setIsError]=useState("")

const getApiData = async()=>{
  try{
  const res= await axios.get("/posts")
  setMyData(res.data)
  }
  catch(error){
    setIsError(error.message)
  }
}

useEffect(()=>{
  getApiData()
},[])

  return (
    <>
    <h1>Axios</h1>
    {isError != "" && <h2>{isError}</h2>}
    <div className="grid">
    {myData.slice(0,12).map((post)=>{
      const {body ,id, title}=post
      return(
        <div className="card" key={id}>
        <h2>{title.slice(0,8).toUpperCase()}</h2>
        <p>{body.slice(0,70)}</p>
        </div>
      )
    })}
   
    </div>
    </>
    
  );
}

export default App;
