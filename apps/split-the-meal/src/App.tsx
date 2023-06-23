import { COOLORS } from "./utils/coolors";
import { Personas } from "./views/Personas";
import styled from "@emotion/styled";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 24px;
  background-color: ${COOLORS.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Background>
      <Personas />
    </Background>
  );
}

export default App;
