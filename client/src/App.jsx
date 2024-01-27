import { useEffect } from 'react';
import './App.css';
import { io } from "socket.io-client";

function App() {
useEffect(()=>{
  const url = 'http://localhost:2000';
  const socket = io(url, { transports: ['websocket'] });

  socket.on("connect", () => {
    console.log("connection");
  });
},[])

  return (
    <>
      
    </>
  );
}

export default App;
