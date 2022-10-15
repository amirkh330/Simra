import styled from "styled-components";
import StageManeger, { Themes } from "./Components/Context/Context";
import Landing from "./Components/Landing/Landing";

function App() {

  return (

      <StageManeger>
        <Landing />
      </StageManeger>

  );
}

export default App;
