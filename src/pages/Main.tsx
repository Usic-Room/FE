import { useNavigate } from "react-router";

const MainPage = () => {
  const navigater = useNavigate();
  const clickHandler = () => {
    navigater("/home");
  };
  return <h1 className="text-3xl font-bold underline">Main</h1>;
};

export default MainPage;
