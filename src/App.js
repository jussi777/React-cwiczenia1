import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import TicketShop from "./components/Checkbox";

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
      <TicketShop />
    </div>
  );
}

export default App;
