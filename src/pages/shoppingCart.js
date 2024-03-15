import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const ShoppingCart = () => {
  // Example data for items in the shopping cart (replace with actual cart items data)
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: 20.99,
      quantity: 1,
    },
    // Add more cart items here
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.map(item => (
        <div className="row mb-4" key={item.id}>
          <div className="col-md-2">
            <MDBCard style={{ maxWidth: '100px' }}>
              <MDBCardImage src={item.image} alt={item.name} position='top' />
            </MDBCard>
          </div>
          <div className="col-md-6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>Price: ${item.price}</MDBCardText>
                <MDBCardText>Quantity: {item.quantity}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
            <MDBBtn color='primary' className="me-2">Update</MDBBtn>
            <MDBBtn color='danger'>Remove</MDBBtn>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-md-8">
          <MDBBtn color='primary'>Continue Shopping</MDBBtn>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <strong>Total: $ {calculateTotal(cartItems)}</strong>
          <MDBBtn color='success' className="ms-2">Checkout</MDBBtn>
        </div>
      </div>
    </div>
  );
}

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

export default ShoppingCart;
