import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#F3722C' : '#43AA8B')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100 px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};

    &:hover{
        background: ${({ primary }) => (primary ? '#43AA8B' : '#F3722C')};
        transform: translateY(-2px);
    }
`