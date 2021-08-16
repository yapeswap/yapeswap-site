import React from "react"
import styled from "styled-components"
import { Button } from "./Buttons"
import Logo from "../assets/images/spaceApe.png"

const HeroContainer = styled.div`
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`
const LightEffect = styled.div`
  position: absolute;
  width: 1318.37px;
  height: 1103.54px;
  right: -480px;
  top: -500px;
  overflow: hidden;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 243, 215, 0.5) 0%,
    rgba(214, 185, 250, 0) 100%,
    rgba(243, 236, 251, 0) 100%
  );
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transform: rotate(-55.5deg);
`
const HeroBg = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 0.08px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
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
  color: #e2e2e2;
  mix-blend-mode: luminosity;
  opacity: 0.9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const HeroP = styled.p`
  font-size: clamp(0.5rem, 2vw, 1.25rem);
  margin-bottom: 2rem;
  letter-spacing: 3px;
  font-weight: normal;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
  mix-blend-mode: luminosity;
`

const Hero = () => {
  return (
    <HeroContainer>
      <LightEffect />
      <HeroBg>
        {" "}
        <img src={Logo} alt="Logo" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Yearn-ed Liquidity Pools for Apes.</HeroH1>
          <HeroP>
            When your LP's aren't being used, they aren't earning... That's why
            we Ape them into Yearn Finance until they're needed for swaps!
          </HeroP>
          <Button
            big="true"
            round="true"
            href="https://app.yape.exchange/#/swap"
            target="_blank"
          >
            Enter App
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
