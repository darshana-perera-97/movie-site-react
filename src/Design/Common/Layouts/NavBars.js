import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import ChatIcon from "@mui/icons-material/Chat";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShopLogo from "../Components/ShopLogo";
import { colors } from "../../../DataStore";

export default function NavBars() {
  const linkSet = [
    { linkName: "Books", link: "#books" },
    { linkName: "Movies", link: "#movies" },
    { linkName: "Latest", link: "#latests" },
  ];
  return (
    <div style={{ backgroundColor: colors.clr2 }}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <ShopLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {linkSet.map((val, key) => {
                return (
                  <Nav.Link
                    href={val.link}
                    key={key}
                    style={{
                      color: colors.clr1,
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {val.linkName}
                  </Nav.Link>
                );
              })}
            </Nav>
            <div style={{ marginRight: "25px" }}>
              <ChatIcon style={{ color: colors.clr1, marginLeft: "10px" }} />
              <MusicNoteIcon
                style={{ color: colors.clr1, marginLeft: "10px" }}
              />
              <AccountCircleIcon
                style={{ color: colors.clr1, marginLeft: "10px" }}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
