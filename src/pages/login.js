import React from 'react';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
      <MDBCard style={{ width: '80%', maxWidth: '500px' }}>
        <MDBCardBody>
          <MDBCardTitle>Login</MDBCardTitle>
          <form>
            <div className="mb-3">
              <MDBInput label='Username' id='username' type='text' />
            </div>
            <div className="mb-3">
              <MDBInput label='Password' id='password' type='password' />
            </div>
            <div className="d-grid gap-2">
              <MDBBtn color='primary' type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Login;
