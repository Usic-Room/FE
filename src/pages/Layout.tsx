import { useNavigate } from "react-router";

const LayoutPage = () => {
  const navigater = useNavigate();
  const goToMain = () => {
    navigater("/main");
  };
  const goToHome = () => {
    navigater("/home");
  };
  return (
    <div>
      <h1>Layout Page</h1>
      <button onClick={goToMain}>go to main page</button>
      <button onClick={goToHome}>go to home page</button>
    </div>
  );
};
export default LayoutPage;
