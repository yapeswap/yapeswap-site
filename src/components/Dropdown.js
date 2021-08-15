import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Link } from 'gatsby'
import { Button } from './Buttons'
import { FaTimes } from 'react-icons/fa'


const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <Btnwrap>
                    <Button primary="true" round="true" to="https://yapeswap-interface.vercel.app/#/swap">
                        Enter App</Button>
                </Btnwrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown

const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0.5")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes)`
    color: #fff;
`
const DropdownWrapper = styled.div`
    color: #fff;
`
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(1, 60px);
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    align-itmes: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    $:hover {
        color: #f26a2e;
    }
`
const Btnwrap = styled.div`
    display: flex;
    justify-content: center;
`
