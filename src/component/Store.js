import {useState} from 'react'
import { Button, Modal} from "react-bootstrap";

// import styles from './test.css'


// export default function Store({storeList}){
export default function Store(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <img src={props.item.thumb} style={{width:"200px", margin:"20px"}} onClick={handleShow} className ="rounded float-start" width='60%' alt={props.item.name}/>
  
  <Modal
         show={show}
         onHide={() => setShow(false)}
         dialogClassName="modal-90w"
         aria-labelledby="example-custom-modal-styling-title"
         >
         <Modal.Header>
           <Modal.Title id="example-custom-modal-styling-title">
             <div className="descriptionTitle">
               {props.item.name}
             </div>
       
           </Modal.Title>
           <Button variant="dark" onClick={handleClose}>X</Button>
     
     
         </Modal.Header>
         <Modal.Body>
           <img src={props.item.image} alt={props.item.name} />



           {
             props.item.description.split('\n').map((line,i)=>{
                if(i===0){
                  return(
                    <div className="modalTitle" style={{fontSize:"24px", marginTop:"10px"}}>
                      <span>{line}</span>
                    </div>
                  )
                }

                return(
                  <div style={{fontSize:"12px", marginTop:"10px"}}>
                    <span>{line}<br/></span>
                  </div>
                )
             })
           }
           

              <div>
             {
              props.item.url ? <a href={props.item.url} target="_blank">{props.item.url}</a> : null
             }
             </div>

           </Modal.Body>
           </Modal>        



           
       </>
    )
}