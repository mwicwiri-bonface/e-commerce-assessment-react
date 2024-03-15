import React from 'react';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
      <MDBCard style={{ width: '80%', maxWidth: '500px' }}>
        <MDBCardBody>
          <MDBCardTitle>Sign Up</MDBCardTitle>
          <form>
            <div className="mb-3">
              <MDBInput label='Name' id='name' type='text' />
            </div>
            <div className="mb-3">
              <MDBInput label='Email' id='email' type='email' />
            </div>
            <div className="mb-3">
              <MDBInput label='Username' id='username' type='text' />
            </div>
            <div className="mb-3">
              <MDBInput label='Password' id='password1' type='password' />
            </div>
            <div className="mb-3">
              <MDBInput label='Confirm Password' id='password2' type='password' />
            </div>
            <div className="d-grid gap-2">
              <MDBBtn color='primary' type="submit">Sign Up</MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Signup;
