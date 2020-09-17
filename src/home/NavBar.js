import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Nav
} from 'reactstrap';
import logo from '../assets/tripitLogo.png'


 const NavBar = (props) => {

    const [name, setName] = useState(null);

    useEffect(() => {
        if(localStorage.getItem('newName')){
            setName(localStorage.getItem('newName'));
        }
    },[])
    
    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/"> 
                <img src={logo}
                width="150px" height="60px" />
                </NavbarBrand>
                    {!props.sessionToken ? "" :
                    <Nav className="ml-auto" navbar>
                        <NavItem> <h3 className='titleHeaders'>Welcome {name}!!</h3></NavItem>
                        <NavItem>
                        <Button onClick={props.clickLogout} >Logout</Button>
                        </NavItem>
                    </Nav>
                    }
                
            </Navbar>
        </div>
    )
}

export default NavBar;