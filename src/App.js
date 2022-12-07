import './App.css';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import AnimatedNumber from './AnimatedNumber';
import DigitalClock from './DigitalClock';
import FirstMessage from './FirstMessage';
import usePrevious from './hooks/usePrevious';
import useSocketClient from './hooks/useSocketIO';

const MESSAGES = [
{"chatId":30980366,"vodId":"V0000330602","eventTime":"2022-12-04 22:18:00","channelId":"RA01","text":"[M]가수 패티김이 부른 인연 이라는 노래 1999년 2월달에 나온노래였습니다.","userAgent":"Android 11,WiFi,5.2.2,SM-A505N","userId":"jgyoung2004","os":"Android 11","version":"5.2.2","device":"SM-A505N","network":"WiFi","vodName":"최백호의 낭만시대"},
{"chatId":30980367,"vodId":"V2000009300","eventTime":"2022-12-04 22:18:01","channelId":"RA02","text":"래원? 막말이심하다 게임하러왓나 원래73년 6힉녀대도 게임이없었음 농촌이라 술래 재미 놀이 놀이라하니 신문돌리가 배달 그거만구분해도 조나단이여 래원 말이심함 잘대해줘라 박명수도 잘대해주고 이말련도 잘대준다 젊은이가 철이없어 에마씨때뮁 죽겠음 콩팥봣다는데 붙눈거 허리아프 내과갔는데 엄마가 오ㅁ줌이 자주마렵다하네 싸고 형수가 콩팥봣데 혈관약주데 내아프다고하고 래원? 막말이심하다 게임하러왓나 원래73년 6힉녀대도 게임이없었음 농촌이라 술래 재미 놀이 놀이라하니 신문돌리가 배달 그거만구분해도 조나단이여 래원 말이심함 잘대해줘라 박명수도 잘대해주고 이말련도 잘대준다 젊은이가 철이없어 에마씨때뮁 죽겠음 콩팥봣다는데 붙눈거 허리아프 내과갔는데 엄마가 오ㅁ줌이 자주마렵다하네 싸고 형수가 콩팥봣데 혈관약주데 내아프다고하고 ","userAgent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) GOREALRA/1.4.3 Chrome/100.0.4896.160 Electron/18.2.4 Safari/537.36","userId":"81101234","os":"Windows","version":"1.4.3","device":"PC","network":"","vodName":"배성재의 텐"},
{"chatId":30980287,"vodId":"22000012201","eventTime":"2022-12-04 21:54:14","channelId":"RA02","text":"[M]I love you wandi. See you tomorrow 😘😘😘","userAgent":"Android 9,WiFi,5.2.0,Infinix X625D","userId":"ruivolution","os":"Android 9","version":"5.2.0","device":"Infinix X625D","network":"WiFi","vodName":"웬디의 영스트리트"},
{"chatId":30980288,"vodId":"22000012201","eventTime":"2022-12-04 21:54:18","channelId":"RA02","text":"[M]완디 오늘 일요일 밤도 즐거웠어요 내일도 함께해요 감시해요 Bye~💙💙💙","userAgent":"Android 11,WiFi,5.2.2,SM-G525N","userId":"goanukim1506","os":"Android 11","version":"5.2.2","device":"SM-G525N","network":"WiFi","vodName":"웬디의 영스트리트"},
{"chatId":30980289,"vodId":"22000012201","eventTime":"2022-12-04 21:54:21","channelId":"RA02","text":"[M]thank you for today wanD, have a good rest tonight. see you tomorrow 💙","userAgent":"Android 12,WiFi,5.2.1,CPH2139","userId":"tinywan221","os":"Android 12","version":"5.2.1","device":"CPH2139","network":"WiFi","vodName":"웬디의 영스트리트"},
{"chatId":30980291,"vodId":"22000012201","eventTime":"2022-12-04 21:54:24","channelId":"RA02","text":"[M]BYEE BYEEEE WENDYYY!!! YOU DID WELL TODAYYY!!! HAVE A GREAT WEEK AHEADD!!! MISS UUU! TAKE CARE AND STAY SAFE ALWAYSSS!!! MWAMWAA","userAgent":"Android 11,Cellular,5.2.2,CPH2269","userId":"jenrizzzzz","os":"Android 11","version":"5.2.2","device":"CPH2269","network":"Cellular","vodName":"웬디의 영스트리트"},
{"chatId":30980293,"vodId":"22000012033","eventTime":"2022-12-04 21:54:39","channelId":"RA01","text":"[M]이때는 목소리가 카랑카랑 했네","userAgent":"Android 12,Cellular,5.2.2,SM-N986N","userId":"ufo2021","os":"Android 12","version":"5.2.2","device":"SM-N986N","network":"Cellular","vodName":"간미연의 러브나잇"},
{"chatId":30980294,"vodId":"22000012201","eventTime":"2022-12-04 21:54:40","channelId":"RA02","text":"[M]웬디님 오늘도 수고했어요 good bye 그리고 잘자요 좋은 꿈","userAgent":"Android 10,WiFi,5.2.0,SM-N960N","userId":"book7emperor","os":"Android 10","version":"5.2.0","device":"SM-N960N","network":"WiFi","vodName":"웬디의 영스트리트"},
{"chatId":30980295,"vodId":"22000012201","eventTime":"2022-12-04 21:55:12","channelId":"RA02","text":"[M]완디 오늘도 고마워요 !!! 사랑해용 낼 또 만나요 우리 ☺️💙 오늘도 낼도 홧팅해서 열심히 공부도 하고 정리해볼게요 ~!! 홧팅 !!! 🍀✨🙏🏻","userAgent":"iOS 14.8,WiFi,5.2.1,iPhone10,4","userId":"wannieland","os":"iOS 14.8","version":"5.2.1","device":"iPhone10,4","network":"WiFi","vodName":"웬디의 영스트리트"},
{"chatId":30980296,"vodId":"22000012201","eventTime":"2022-12-04 21:55:14","channelId":"RA02","text":"[M]PD님, 작가님 오늘 2시간도 감사합니다~~~ 고생 많으셨습니다~~~ ^_^","userAgent":"Android 12,WiFi,5.2.2,SM-F936N","userId":"dksworb22","os":"Android 12","version":"5.2.2","device":"SM-F936N","network":"WiFi","vodName":"웬디의 영스트리트"}
]
const borderWidth = '5px';

const blinkBackground = keyframes`
  0% {
    background: red;
  }
  100% {
    background: darkred;
  }
`
const animation = css`
  ${blinkBackground} 1s linear infinite;
`;
const CommonStyle = styled.div`
  border-color: black;
  border-style: solid;
  box-sizing: border-box;
`
const Container = styled(CommonStyle)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: calc(10px + 2vmin);
  font-weight: bold;
  background-color: white;
  color: black;
  border-width: ${borderWidth} 0 0 ${borderWidth};
`
const HeaderContainer = styled(CommonStyle)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0 ${borderWidth} ${borderWidth} 0;
`
const Header = styled.div`
  font-size: calc(10px + 3vmin);
`

const TopContainer = styled.div`
  flex: 6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const LeftContainer = styled(CommonStyle)`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: calc(10px + 30vmin);
  border-width: 0 ${borderWidth} ${borderWidth} 0;
  animation: ${props => props.hasMessage && animation};
`
const RightContainer = styled(CommonStyle)`
  flex: 3;
  height: 100%;
  background: #0f3854;
  background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 100%);
  position: relative;
  border-width: 0 ${borderWidth} ${borderWidth} 0;
`
const Status = styled(Header)`
  color: ${props => !props.isConnected ? 'red':'white'};
  font-size: calc(5px + 5vmin);
  margin: 10px;
`;
const BottomContainer = styled(CommonStyle)`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 0 ${borderWidth} ${borderWidth} 0;
`
const More = styled.div`
  font-size: calc(5px + 1vmin);
  margin-bottom: 5px;
  opacity: 0.8;
`
const MsgInfo = styled.div`
  font-size: calc(2px + 2vmin);
  margin-bottom: 5px;
  opacity: 0.8;
`
function App() {
  const [messages, setMessages] = React.useState([]);
  const [count, setCount] = React.useState(messages.length);
  const [isConnected, setIsConnected] = React.useState(false);
  const prevCount = usePrevious(count);
  const { socket } = useSocketClient({
    setSocketConnected: setIsConnected
  });

  React.useEffect(() => {
      fetch('https://logsink.sbs.co.kr/goChat/warn')
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMessages(result);
      });
      // setMessages(MESSAGES);
  }, [])

  React.useEffect(() => {
    console.log(socket)
    if(socket === null) return;
    console.log('attach socket listener..')
    socket.on('newWarnMessage', message => {
      console.log(message);
      setMessages(messages => [...messages, message])
    })
    return () => {
      console.log('remove socket listener..')
      socket.removeAllListeners();
    }
  }, [socket])

  React.useEffect(() => {
    setCount(messages.length);
  }, [messages])

  const removeMessage = React.useCallback((chatId, isError) => {
    console.log(chatId, isError)
    fetch('https://logsink.sbs.co.kr/goChat/classifyResult', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatId,
        isError
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setMessages(messages => {
        return messages.filter(message => message.chatId !== chatId);
    })
    .catch(err => {
      alert(err);
    })

    })
  }, [])

  const currentMessage = React.useMemo(() => {
    return messages[0] || {}; 
  }, [messages])

  const {eventTime, vodName} = currentMessage;

  return (
    <Container>
      <HeaderContainer>
        <Header>
          고릴라 공감로그 확인
        </Header>
      </HeaderContainer>
      <TopContainer>
        <LeftContainer
          hasMessage={messages.length > 0}
        >
          <AnimatedNumber
            from={prevCount}
            to={count}
          ></AnimatedNumber>
        </LeftContainer>
        <RightContainer>
          <Status isConnected={isConnected}>
            {isConnected ? 'Connected':'Disconnected'}
          </Status>
          <DigitalClock></DigitalClock>
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <FirstMessage 
          message={currentMessage} 
          removeMessage={removeMessage} 
        />
        <MsgInfo>{eventTime} {vodName}</MsgInfo>
        {messages.length > 1 ? 
          <More>{`${messages.length} messages more`}</More> :
          messages.length === 1 && <More>Last Message.</More>
        }
      </BottomContainer>
    </Container>
  );
}

export default App;
