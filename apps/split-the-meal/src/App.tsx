import { COOLORS } from "./utils/coolors";
import styled from "@emotion/styled";
import { Views } from "./views/Views";

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
      <Views />
    </Background>
  );
}

export default App;
