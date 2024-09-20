import React, { useContext, useEffect, useState } from 'react';
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
import './Header.css';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import CartContext from '../../context/CartContext';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{ marginRight: '2rem' }}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Cart {cart.products.length}</DropdownItem>
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {console.log(token)}
                  {token['jwt-token'] ? (
                    <Link
                      onClick={() => {
                        removeToken('jwt-token');
                        axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`, {
                          withCredentials: true,
                        });
                        setUser(null);
                      }}
                      to="/signin"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link to="/signin">Login</Link>
                  )}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {user && <NavbarText>{user.username}</NavbarText>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
