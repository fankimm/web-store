import Head from "next/head"
import Link from 'next/link'
import {Navbar, Nav, Container} from "react-bootstrap"
export default function Header(){
    return(
        <div>
             <div>
             <Head>
              <title>AWESOME FOOD STORE</title>
            </Head>
                <Navbar fixed = "top" bg="light"  expand="sm">
                <Container style={{width:'100%'}}>
                    <img src="favicon.ico" alt = "icon"width="20px" style={{marginRight:"10px"}}/>
                    <Navbar.Brand href="/">AWESOME FOOD STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav variant = 'pills' className="me-auto"> */}
                    <Nav>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        
                        <Nav.Link href="/">STORE</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        </div>
    )
}