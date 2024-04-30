import React, { useState } from "react";
import { 
  BottomContainer,
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  TopContainer,
  Logo,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtended,
} from "./Navbar.Styles";
import LogoImage from "../../images/logo.png";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const HandleExtendNavbar = () => {
    setExtendNavbar((prevState) => !prevState);
  };
  return (  
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <TopContainer>
          <Logo src={LogoImage} />
        </TopContainer>
        <BottomContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/gestures">Gestures</NavbarLink>
            <NavbarLink to="/prediction">Prediction</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenLinksButton onClick={HandleExtendNavbar}>
              {extendNavbar ? <> &#10005; </> : <> &#8801; </>}{" "}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </BottomContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/portfolio">Services</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
