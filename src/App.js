import React from "react";
import Nav from "./components/Nav";
import './components/index.css'
import Bar from "./components/Bar";
import Chat from "./components/Chat";
import Dash from "./components/Dash";
function App() {
  return (
  <>
  <Nav/>
  <Bar/>
  <Chat
  title="Alejandra Martinez"
  msg="this is one message in the container"
  />
<Dash

/>
  
  </>
  
  );
}

export default App;
