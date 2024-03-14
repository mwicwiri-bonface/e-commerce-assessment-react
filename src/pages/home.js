import React from 'react';
import {MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBRow, MDBContainer} from 'mdb-react-ui-kit';
import Product from "../components/product";

const Home = () => {
  return (
      <div>
      <div className={"container-fluid"}>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
    <MDBContainer className={"mt-3"}>
      <MDBRow  className='row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
        </MDBRow>
    </MDBContainer>
</div>
  );
}

export  default Home;
