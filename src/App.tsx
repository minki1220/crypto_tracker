import styled from "styled-components";
import Router from "./Router";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;
function App() {
  return <Router></Router>;
}

export default App;
