import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
`
const DateContainer = styled.div`
    letter-spacing: 0.1em;
    font-size: calc(2px + 2vmin);
`
const TimeContainer = styled.div`
    letter-spacing: 0.05em;
    font-size: calc(5px + 5vmin);
    padding: 5px 0;
`
// const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const week = ['일', '월', '화', '수', '목', '금', '토'];
const zeroPadding = (num, digit) => {
    let zero = '';
    for(let i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
const getCurrentTime = date => {
    return zeroPadding(date.getHours(), 2) + ':' + zeroPadding(date.getMinutes(), 2) + ':' + zeroPadding(date.getSeconds(), 2);
}
const getCurrentDate = date => {
    return zeroPadding(date.getFullYear(), 4) + '-' + zeroPadding(date.getMonth()+1, 2) + '-' + zeroPadding(date.getDate(), 2) + '(' + week[date.getDay()] + ')';
}
const initDate = new Date();

function DigitalClock(){
    const [time, setTime] = React.useState(getCurrentTime(initDate));
    const [date, setDate] = React.useState(getCurrentDate(initDate));
    const updateTime = React.useCallback(() => {
        const currentDate = new Date();
        setTime(getCurrentTime(currentDate));
        setDate(getCurrentDate(currentDate));
    }, [])
    React.useEffect(() => {
        const timer = setInterval(() => {
            updateTime();
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [updateTime])
    return (
        <Container>
            <DateContainer>{date}</DateContainer>
            <TimeContainer>{time}</TimeContainer>
        </Container>
    )
}

export default React.memo(DigitalClock)