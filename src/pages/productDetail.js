import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams(); // Extract slug from route parameters

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/store/product-detail/${slug}/`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [slug]); // Add slug as a dependency for useEffect

  return (
    <MDBContainer className="mt-5">
      {product && (
        <MDBRow>
          <MDBCol md={6}>
             <MDBCarousel showControls interval={3000}>
               {product.gallery.map((galleryItem, index) => (
                <MDBCarouselItem itemId={index} active={index === 0} interval={index === 0 ? 1000 : 0}>
                  <img src={galleryItem.image} className="d-block w-100" alt={`${product.name} Image`} />
                </MDBCarouselItem>
              ))}
              </MDBCarousel>
          </MDBCol>
          <MDBCol md={6}>
            <h2 className="mb-4">{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Availability: {product.quantity >= 1 ? 'In Stock' : 'Out of Stock'}</p>
            <MDBBtn color="primary">Add to Cart</MDBBtn>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default ProductDetailPage;
