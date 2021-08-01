import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Yape!</h1>
                    <p>It's simple, be the most profitable AMM.</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="https://twitter.com/yapeswap">Twitter</FooterLink>
                    <FooterLink to="https://discord.gg/yrfQ6wM6">Discord</FooterLink>
                    <FooterLink to="https://t.me/Yapeswap">Telegram</FooterLink>
                    <FooterLink to="https://github.com/yapeswap">Github</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    gridt-template-columns: repeat(2, 1fr);
    color: #000;
    background: ;

`
const FooterDesc = styled.div`
    padding: 0 2rem;
    
    h1 {
        margin-bottom: 3rem;
        color: #F94144;
    }

    @media screen and (max-width: 480 px) {
        padding: 1rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }

`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    
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
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #577590;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`
