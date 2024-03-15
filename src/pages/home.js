import React, {useEffect, useState} from 'react';
import {MDBRow, MDBContainer, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import Product from "../components/product";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/store/products/');
        const { results, next } = response.data;
        setProducts(results);
        setNextPage(next);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  const fetchNextPage = async () => {
    try {
      const response = await axios.get(nextPage);
      const newProducts = response.data.results;
      setProducts([...products, ...newProducts]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error('Error fetching next page:', error);
      setError('Error fetching next page');
    }
  };
  return (
      <div>
          <div>
              <MDBContainer fluid>
                  <MDBRow className="pt-5 pb-5 bg-dark text-white">
                      <MDBCol className="text-center" lg="12">
                          <h1>Welcome to Our E-commerce Store</h1>
                          <p>Discover amazing products and shop with confidence.</p>
                          <MDBBtn color="primary">Shop Now</MDBBtn>
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
          </div>
          <MDBContainer className={"mt-3"} fluid>
              <h1 className="text-center">Products</h1>
              <MDBRow className='row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                  {products.map((product) => (
                      <Product key={product.id} product={product}/>
                  ))}
              </MDBRow>
              {nextPage && (
                  <div className="d-flex justify-content-center mt-3">
                      <button className="btn btn-primary" onClick={fetchNextPage}>Load More</button>
                  </div>
              )}
              {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                      {error}
                  </div>
              )}
          </MDBContainer>
      </div>
  );
}

export default Home;
