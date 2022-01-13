import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Typography, Menu, MenuItem, Button } from "@mui/material";
//import MenuIcon from "@mui/icons-material/Menu";

//import "../../App.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    console.log("logout");
    navigate("/", { replace: true });
  };

  const NavlinkStyle = {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "5px 8px",
  };

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#D3D3D3",
        marginBottom: "20px",
      }}
    >
      <Container
        sx={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h3" component="h1" sx={{ color: "#000000" }}>
            <h1 className="text-center ubuntu my-4 fs-3">
              Rick & Morty
              <span className="text-primary">WiKi</span>
            </h1>
          </Typography>
        </NavLink>
        {largerWindow()}
      </Container>
    </nav>
  );

  function largerWindow() {
    return (
      <div className="large">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <li style={{ listStyleType: "none" }}>
            <NavLink to="/" style={{ ...NavlinkStyle, color: "black" }}>
              Home
            </NavLink>
          </li>
          <li style={{ listStyleType: "none" }}>
            <NavLink
              to="/savedcharacters"
              style={{ ...NavlinkStyle, color: "black" }}
            >
              SavedCharacters
            </NavLink>
          </li>
          <li style={{ listStyleType: "none" }}>
            {localStorage.getItem("isLoggedIn") ? (
              <NavLink
                to=""
                style={{ ...NavlinkStyle, color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" style={{ ...NavlinkStyle, color: "black" }}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
