import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router";

function NavbarLayout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Lifestyle</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarLayout;
