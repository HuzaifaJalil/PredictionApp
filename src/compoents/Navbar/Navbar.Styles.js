import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #1C2938;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    height: ${(props) => (props.extendNavbar ? "48vh" : "80px")};
  }
`;

export const TopContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex: 80%;
    justify-content: left;
    margin-left: 10px;
  }
`;

export const BottomContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex: 20%;
    font-size: small;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;

  @media (max-width: 700px) {
    height: 80px;
    flex-direction: row;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 20px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  transition: color 0.7s background-color 0.7s;

  &:hover {
    background-color: white;
    color: #1C2938;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: large;
  font-family: Arial, Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 20px;
`;

export const Logo = styled.img`
  margin-top: 5px;
  max-width: 125px;
  height: 50px;
  /* filter: brightness(0); */
  transition: filter 0.5s;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(3px 8px 8px red) invert(100%);
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 60px;
  background: none;
  border: none;
  color: black;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`;
