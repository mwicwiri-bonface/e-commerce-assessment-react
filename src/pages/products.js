import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Product from '../components/product';

const Products = () => {
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
    <div className="container-fluid">
      <MDBContainer className={"mt-3"}>
        <MDBRow className='row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
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
};

export default Products;
