import "./App.css";
import Homepage from "./pages/homepage.js";
import Chatpage from "./pages/chatpage.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;

