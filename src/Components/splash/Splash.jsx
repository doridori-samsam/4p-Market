import fullLogo from "../../assets/full-logo.svg";
import "./Splash.scss";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//인트로 splash페이지에서 일정시간 이후 login페이지로 이동하는 기능
function Splash() {
  const history = useHistory();
  const timeout = () => {
    setTimeout(() => {
      history.push("/home");
    }, 2000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <img src={fullLogo} alt="로고 이미지입니다." className="logo-splash" />
  );
}

export default Splash;