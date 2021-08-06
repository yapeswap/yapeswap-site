import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from './Buttons'
import { ImCheckmark } from "react-icons/im"

const Ape = () => {
const data = useStaticQuery(graphql`
    query ApeQuery {
        allApeJson {
            edges {
              node {
                alt
                button
                name
                img {
                  childImageSharp {
                        gatsbyImageData(aspectRatio:1, placeholder: BLURRED, layout: FULL_WIDTH
                        
                            )
                    }
                }
              }
            }
          
        }
        
    }
`)
function getApe(data) {
    const apeArray = []
    data.allApeJson.edges.forEach((item, index) => {
        apeArray.push(
            <ProductCard key={index}>
                <ProductGatsbyImage image={item.node.img.childImageSharp.gatsbyImageData} 
                    alt={item.node.alt}
                />
                <ProductInfo>
                    <TextWrap>
                        <ImCheckmark />
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap> 
                    <Button to="/NFT" primary="true" round="true" css={`postion: absolute; 
                            top:420p; font: 14px`}>{item.node.button}</Button>
                </ProductInfo>
            </ProductCard>
        )
    })
    return apeArray 
}
    return (
        <ApeContainer>
                <ApeHeading>Community Ambassadors</ApeHeading>
                <ApeWrapper>{getApe(data)}</ApeWrapper>
        </ApeContainer>
    )

}

export default Ape

const ApeContainer = styled.div`
    min-hieght: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #F94144;
    color: #fff;
`

const ApeHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
    font-weight: bold;
    color: #fff;
`

const ApeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 600px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;

`
const ProductGatsbyImage = styled(GatsbyImage)`
    height: 90%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }

`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 500px;
    font-size: 15px;
`
const ProductTitle= styled.div`
    font-weight: 400;
    font-size: 1.5rem;
    margin-left: 0.5rem;
`