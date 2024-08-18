import { useNavigate } from "react-router";
import styled from "styled-components";

const HomePage = () => {
  const navigater = useNavigate();
  const clickHandler = () => {
    navigater("/main");
  };
  return (
    <Container>
      <h1>Home</h1>
      <button onClick={clickHandler}>go to main page</button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 2rem;
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;
