import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
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

function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [keywordSuggestions, setKeywordSuggestions] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/store/categories/');
      setCategories(response.data.results);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <MDBDropdownItem key={category.slug}>
        <NavLink to={`/${category.slug}`} className='dropdown-item'>{category.name}</NavLink>
      </MDBDropdownItem>
    ));
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    // Call a function to fetch keyword suggestions based on the value
    fetchKeywordSuggestions(value);
  };

  const fetchKeywordSuggestions = async (value) => {
    // You can implement your own logic to fetch keyword suggestions
    // Here, I'm just simulating some suggestions
    const suggestions = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
    // Filter suggestions based on the input value
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setKeywordSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setKeywordSuggestions([]);
    // Perform search based on selected suggestion
    // You can implement your own logic here
  };

  const renderKeywordSuggestions = () => {
    return keywordSuggestions.map((suggestion, index) => (
      <li key={index} className="list-group-item" onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion}
      </li>
    ));
  };

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
                    {renderCategories()}
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
              <input
                type='search'
                className='form-control'
                placeholder='Type query'
                aria-label='Search'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {keywordSuggestions.length > 0 && (
                <ul className="list-group position-absolute w-100">
                  {renderKeywordSuggestions()}
                </ul>
              )}
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>

            {/* Cart Icon with Quantity */}
            <div className="position-relative">
              <MDBIcon icon='shopping-cart' className='me-3' size='2x' />
              {/* Replace cartItemsCount with actual count from your cart state */}
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemsCount}
                <span className="visually-hidden">items in cart</span>
              </span> */}
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;
