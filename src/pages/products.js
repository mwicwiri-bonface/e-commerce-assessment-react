import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import Product from "../components/product";

function App() {
  return (
    <div className="container-fluid">
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

export default App;