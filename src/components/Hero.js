import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"



const Hero = () => {
    const data = useStaticQuery(graphql`
    query SpaceApeQuery {
        allSpaceApeJson {
            edges {
              node {
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

function getSpaceApe(data) {
    const apeSpaceArray = []
    data.allSpaceApeJson.edges.forEach((item,index) => {
        apeSpaceArray.push(
            <ProductCard key={index}>
                <ApeGatsbyImage image={item.node.img.childImageSharp.gatsbyImageData} 
                    alt={item.node.alt}
                />
            </ProductCard>
        )
    })

    return apeSpaceArray 
}


    return (
        <HeroContainer>
            <HeroBg> {getSpaceApe(data)} </HeroBg> 
            <LightEffect />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Yearn-ed Liquidity Pools for Apes.</HeroH1>
                    <HeroP>When your LP's aren't being used, they aren't earning...
                    That's why we Ape them into Yearn Finance until they're needed for swaps!</HeroP>
                    <Button big="true" round="true" href="https://yapeswap-interface.vercel.app"
                            target="_blank">
                        Enter App
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #161616;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    margin-top: -80px;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const LightEffect = styled.div`
    position: absolute;
    width: 1318.37px;
    height: 1103.54px;
    right: -480px;
    top: -500px;

    background: radial-gradient(50% 50% at 50% 50%, rgba(255, 243, 215, 0.5) 0%, rgba(214, 185, 250, 0) 100%, rgba(243, 236, 251, 0) 100%);
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: rotate(-55.5deg);

`
const HeroBg = styled.div `
    display: flex;
    position: relative; 
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 300px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ApeGatsbyImage = styled(GatsbyImage)`
    display: flex;
    position: relative;
    height: 90%;
    max-width: 100%;
`



const HeroContent = styled.div`
    z-index: 3;
    height: calce(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    line-height: 1.1;
    font-weight: bold;

`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    padding: 0 1rem;
    font-weight: 500;
    color: #E2E2E2;
    mix-blend-mode: luminosity;
    opacity: 0.9;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const HeroP = styled.p`
    font-size: clamp(.5rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
    letter-spacing: 3px;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
    color: #FFFFFF;
    mix-blend-mode: luminosity;

`