import React from 'react'
import styled from 'styled-components'
import { Button } from './Buttons'
import Video from '../assets/videos/video3.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video3/mp4" autoPlay
                loop muted playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Yearn-ed Liquidity Pools for Apes.</HeroH1>
                    <HeroP>When your LP's aren't being used, they aren't earning...
That's why we Ape them into Yearn Finance until they're needed for swaps!</HeroP>
                    <Button primary="true" big="true" round="true" href="https://yapeswap-interface.vercel.app">
                        Enter App
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    padding: 0 1rem;
    postion: relative;
    margin-top: -80px;
    color: #fff;


:before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.1) 0%, 
        rgba(0,0,0,0.1) 100%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
}
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -0-object-fit: cover;
    object-fit: cover;
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
    letter-spacing: 3px;
    padding: 0 1rem;
    color: #fff;
`

const HeroP = styled.p`
    font-size: clamp(.5rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
    letter-spacing: 3px;
    font-weight: 500;
    color: #F3722C;
`