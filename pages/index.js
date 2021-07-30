

import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head';
import axios from 'axios';
import Store from "../src/component/Store"
import React,{useEffect,useState} from 'react';




export default function Home() {
  const API_URL = "http://localhost:9000/stores"
  const [storeList, setStoreList] = useState([])


  function getData(){

  axios.get(API_URL).then((res)=>{
    console.log(res.data)
    setStoreList(res.data)
    
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>STORE | AWESOME FOOD STORE</title>
      </Head>
      
      <div className="container">
      <div style={{fontWeight:"700",marginTop:"100px",marginLeft:"110px"}}>Must-go restaurant</div>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" style={{textAlign:"center", paddingLeft:"85px"}}>
          <div className="col" style={{textAlign:"center",marginTop:"15px", marginBottom:"50px",width:"100%"}}>
          {storeList.map( (item, i)=> {
            return(
              
                    <Store item={item} i={i}/>
              
            )
          })}
          </div>
    </div>
  </div>
      </div>
  
        

    )
    
}


