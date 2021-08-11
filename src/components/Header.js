import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Buttons"
import Logo from "../assets/svg/whiteLogo.svg"

const Header = ({ toggle }) => {
return (
  <Nav>
    <NavLink to="/">
      <img src={Logo} alt='Logo' />
    </NavLink>
    <Bars onClick={toggle}/>
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index} target="_blank">
          {item.title}
        </NavLink>
      ))}
      <NavBtn> 
        <Button round="true" href="https://yapeswap-interface.vercel.app/#/swap">
          Enter App
          </Button>
      </NavBtn>
    </NavMenu>
    {/*<NavBtn>
      <Button primary="true" round="true" to="yapeswap-interface.vercel.app/#/swap">
        Enter App
        </Button>
    </NavBtn> */}
  </Nav>
)
}


export default Header


const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  
  z-index: 100;
  position: relative; 
  `

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
  }
  `

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%); 
    font-size: 1.8rem;
    cursor: pointer;
  }
  `
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;

    margin-right: 24px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `

const NavBtn = styled.div` 
    display: flex;
    align-items: center;
    margin-left: 24px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `
