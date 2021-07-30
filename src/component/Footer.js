

export default function Footer(){
    return(
      // <div className ="x" style={{height:"200px", background:"rgb(240,240,240)"}}>
      <div>

        <div style={{width:"100%", float:"left", backgroundColor:"rgb(249,249,250)", fontSize:"12px",  padding:"20px", paddingLeft:"70px"}}>

            <div style={{float:"left", width:"50%"}}>
              <div>경기도 군포시 수리산로 102</div>
                <p></p>
                <div style={{color:"grey"}}>Web Frontend | Kim Jihwan | Phone 01097312406 | EMAIL fankim@icloud.com</div>
                <p></p>
              <div style={{marginTop:"40px",color:"grey"}}>© 2021 Copyright reserved by Kim Jihwan</div>
            </div>
      
            <div style={{float:"right", marginTop:"30px", marginRight:"30px"}}>
                <a href="https://instagram.com/fankimm" target="_blank">
                  <img src="c-instagram.svg" width="30px"/>
                </a>
                <a href="https://github.com/fankimm" target="_blank">
                  <img src="git.png" width="30px" style={{marginLeft:"30px"}} />
                </a>
                <a href="https://www.youtube.com/channel/UC74IqnX_ErzSIwhGSuE-ZwA" target="_blank">
                  <img src="youtube.png" width="50px" style={{marginLeft:"25px"}} />
                </a>
                
              </div>
              

        </div>
      </div>
        
    )
}