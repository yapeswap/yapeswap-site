import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: 
    linear-gradient(#222426,#222426) padding-box, /*this is the black background*/
    conic-gradient(from 180deg at 50% 50%, #5C748D -24.37deg, #E7514C 22.5deg, 
    #E4783F 69.37deg, #EB9A3F 123.75deg, #F2C864 181.87deg, #9ABC76 240deg, 
    #5FA78D 294.38deg, #5C748D 335.63deg, #E7514C 382.5deg) border-box;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '13px')};
    outline: none;
    border: 3px solid transparent;

    
   
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:hover{
        background: linear-gradient(94.36deg, #E7514C 13.29%, #E4783F 25.59%, #EB9A3F 39.87%, #F2C864 55.12%, #9ABC76 70.38%, #5FA78D 84.65%, #5C748D 95.47%);
        color: #161616;
        transform: translateY(-2px);
        border-color: #fff;

        
        
    }
`