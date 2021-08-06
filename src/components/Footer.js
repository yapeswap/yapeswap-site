import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Twitter from "../assets/svg/Twitter_black.svg"
import Discord from "../assets/svg/Discord_black.svg"
import Telegram from "../assets/svg/Telegram.svg"
import Github from "../assets/svg/Github_black.svg"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1><style>
                    @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap');
                    </style>Yape!</h1>
                    <p>It's simple, be the most profitable AMM. </p>
                </FooterDesc>
                <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                        <FooterLink to="https://twitter.com/yapeswap"><img src={Twitter} alt='Twitter' /></FooterLink>
                        <FooterLink to="https://discord.gg/ZWG7TJQH"><img src={Discord} alt='Discord' /></FooterLink>
                        <FooterLink to="https://t.me/Yapeswap"><img src={Telegram} alt='Telegram' /></FooterLink>
                        <FooterLink to="https://github.com/yapeswap"><img src={Github} alt='Github' /></FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 1rem calc((85vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, auto-fill);
    color: #000;
    background: transparent;
    height: 200px;

`
const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 1rem;
        font-family: 'Lobster Two', cursive;
        font-weight: bold;
        font-size: 40px;
        color: #F94144;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, auto);

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }

`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 1rem 1.75rem;
    
    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin: 0rem 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #577590;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
