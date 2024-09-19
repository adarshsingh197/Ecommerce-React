import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { useCookies } from 'react-cookie';


function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log({props});

  const toggle = () => setIsOpen(!isOpen);
  const [token,setToken,removeToken] = useCookies(['jwt-token']);
  console.log(token)
  useEffect(()=>{
      console.log(token)
  },[token])

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand  id='title'>
        <Link to="/" >Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight:'2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {console.log(token)}
                  {token['jwt-token']?<Link onClick={()=>{
                    
                    removeToken('jwt-token');
                  }} to='/signin'>Logout</Link>:<Link to='/signin'>Login</Link>}
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>Username</NavbarText>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
