import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Home from '../pages/home';

function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const cartItemsCount = 5; // Example count of cart items, replace with actual count from your cart state

  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <NavLink to='/' className='navbar-brand'>Ecommerce</NavLink>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' caret>
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <NavLink to='/category1' className='dropdown-item'>Category 1</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <NavLink to='/category2' className='dropdown-item'>Category 2</NavLink>
                    </MDBDropdownItem>
                    {/* Add more categories here */}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto me-3'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>

            {/* Cart Icon with Quantity */}
            <div className="position-relative">
              <MDBIcon icon='shopping-cart' className='me-3' size='2x' />
              {cartItemsCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemsCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;
