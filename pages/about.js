import Head from "next/head"
export default function About(){
    return(
        <div>
        <Head>
            <title>ABOUT | AWESOME FOOD STORE</title>
        </Head>
        <div style={{width:"500px",paddingLeft:"20px",margin:"0 auto",textAlign:"left", paddingTop:"100px", paddingBottom:"80px",  fontSize:"14px"}}>
      
            <div>
                <h4>ABOUT</h4>
                <br></br>
                <p>
                    next.js와 react를 이용하여 만든 맛집 리스트 페이지 입니다.
                </p>
                <p>
                    CSS 프레임워크로는 bootstrap 을 이용하였고
                </p>
                <p>
                    네비게이션바와 모달 기능을 구현하는데 사용했습니다.
                </p>
                   
                <p>
                this messgage from minecraft 
                </p>
            </div>
            
        </div>
        </div>
        
    )
}