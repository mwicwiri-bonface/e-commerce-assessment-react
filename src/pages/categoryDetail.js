// import React, { useState, useEffect } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
//
// const ProductDetailPage = () => {
//   const [product, setProduct] = useState(null);
//   const { slug } = useParams(); // Extract slug from route parameters
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/v1/store/product-detail/${slug}/`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };
//
//     fetchData();
//   }, [slug]); // Add slug as a dependency for useEffect
//
//   return (
//     <MDBContainer className="mt-5">
//
//     </MDBContainer>
//   );
// };
//
// export default ProductDetailPage;
