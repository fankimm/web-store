

import Head from 'next/head'
import { useState,useEffect } from 'react'



export default function Custom404() {

    // const [t, setT] = useState(5)
    // useInterval(setT(t-1),1000)
    
    return (
        <div style={{textAlign:"center", marginTop:"200px",marginBottom:"200px"}}>
            <h1>이런.. 페이지를 찾을 수 없습니다.</h1>
            <h2>5초후 메인 페이지로 이동합니다.</h2>
            
            
            
            <Head>
                <meta http-equiv="refresh" content="5;url=/"/>
            </Head>
        
        </div>        
    )
  }