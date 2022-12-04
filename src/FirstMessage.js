import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 10px;
`
const TextContainer = styled.div`
    margin-top: 10px;
`
const ButtonsContainer = styled.div`
    display: ${props => props.hide ? 'none':'flex'};
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 10px;
    margin-top: auto;
`
function FirstMessage(props) {
    const {message, removeMessage} = props;
    const {
        chatId, 
        text="No Message.", 
        ...rest
    } = message

    const onClickButton = React.useCallback((event) => {
        const isError = event.target.id === 'error' ? true : false;
        removeMessage(chatId, isError);
    }, [chatId, removeMessage])

    const hideButton = chatId === undefined;

    return (
        <Container>
            <TextContainer>
                {text}
            </TextContainer>
            <ButtonsContainer hide={hideButton}>
                <Button 
                    text="Set Error" 
                    background="red"
                    color="yellow"
                    onClick={onClickButton}
                    id="error"
                />
                <Button 
                    text="Set Normal" 
                    background="black" 
                    onClick={onClickButton}
                    id="normal"
                />
            </ButtonsContainer>
        </Container>
    )
}

export default React.memo(FirstMessage);