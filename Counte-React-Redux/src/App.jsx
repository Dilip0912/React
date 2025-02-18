import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import CounterHandler from "./components/CounterHandler";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import ToggleMessage from "./components/ToggleMessage";

function App() {
  const toggleValue=useSelector((store)=>store.toggle_value)
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {toggleValue?<ToggleMessage/>:<DisplayCounter/>}
            <CounterHandler />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
