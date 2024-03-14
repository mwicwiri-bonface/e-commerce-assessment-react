import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

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
      <a href={`/product/${product.id}`} className="text-decoration-none text-dark">
        <MDBCard>
          <MDBCardImage src={product.image} position='top' alt={product.name} />
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
      </a>
    </MDBCol>
  );
};

export default Product;
