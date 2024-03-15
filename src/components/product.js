import React from 'react';
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

const Product = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return null; // Return null if product is undefined
  }
  console.log(product)
  // Truncate description if it's too long
  const truncatedDescription = product.description ?
    (product.description.length > 50 ? product.description.substring(0, 50) + "..." : product.description)
    : '';

  return (
    <MDBCol>
      <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
        <MDBCard>
          <MDBRipple
              className='bg-image hover-overlay shadow-1-strong rounded'
              rippleTag='div'
              rippleColor='light'
          >
            <MDBCardImage src={product.image} position='top' alt={product.name}/>
            <Link to={`/product/${product.slug}`}>
              <div className='mask' style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
            </Link>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{product.name}</MDBCardTitle>
            <div className="d-flex align-items-center mb-2">
              {/*<span className="me-2">{product.rating} stars</span>*/}
              {/*<div className="text-muted">|</div>*/}
              <span className="ms-2">${product.price}</span>
            </div>
            <MDBCardText>
              {truncatedDescription}
            </MDBCardText>
            <MDBBtn>Add to Cart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </MDBCol>
  );
};

export default Product;
