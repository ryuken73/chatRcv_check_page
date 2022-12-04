import React from 'react'
import styled from 'styled-components';
const CustomButton = styled.button`
    appearance: none;
    background-color: ${props => props.background || '#000000'};
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: ${props => props.color || '#FFFFFF'};
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 10px;
    min-height: 60px;
    max-width: 200px;
    min-width: 200px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
    &:disabled {
        pointer-events: none;
    }
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: none;
        transform: translateY(0);
    }
`

function Button(props) {
    const {text, background, color, onClick, id} = props;
    return (
        <CustomButton id={id} background={background} color={color} onClick={onClick}>{text}</CustomButton>
    )
}

export default React.memo(Button);