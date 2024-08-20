import { useNavigate } from "react-router";

const HomePage = () => {
  const navigater = useNavigate();
  const clickHandler = () => {
    navigater("/main");
  };
  return (
    <div className="bg-yellow-200">
      <h1 className="text-green-500">안녕하세요</h1>
    </div>
  );
};

export default HomePage;
