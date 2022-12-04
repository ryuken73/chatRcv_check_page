import React from 'react';
import socketClient from 'socket.io-client';

export default function useSocketClient(props) {
    const {
        hostAddress='',
        setSocketConnected,
    } = props
    const [socket, setSocket] = React.useState(null);
    React.useEffect(() => {
        const socket = socketClient.connect();
        socket.on('connect', () => {
            console.log('connected');
            setSocketConnected(true)
            setSocket(socket);
            socket.emit('put:connect', 'client')
        });
        socket.on('disconnect', reason => {
            console.log('disconnected: ', reason)
            setSocketConnected(false)
        })
        return () => {
            socket.disconnect();
        }
    },[hostAddress, setSocketConnected])
    return {socket}
}