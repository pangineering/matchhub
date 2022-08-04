import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import HeaderNav from "./HeaderNav";
import { Navbar, Container } from "react-bootstrap";

// eslint-disable-next-line
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <HeaderNav />
      {user ? (
        <Container>
           <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
        </Container>
      ) : (
        <>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </>
      )}
    </Navbar>
  );
}

export default Header;
