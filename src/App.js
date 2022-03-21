import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />}></Route>
              <Route path='/product/:slug' element={<ProductScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <footer className='text-center'>
          <div>All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
