import { Button } from "@mui/material";
import axios from "axios";

const code =
  "KqNRza27npot27mcf7C-l1rqsw2AGJdgCmi2xmB6-0huWYTtANOu3E66oiwKPXLqAAABjC90CArUNEQ5evY1pg"; 



const Test: React.FC = () => {
  const handleLoginAxios = () => {
    const API = `http://www.coin-simulation.com:5200/login/oauth2/code/kakao?code=${code}&state=kakao`;
    axios
      .post(API)
      .then((data) => console.log("data >>", data))
      .catch((err) => console.log("err >>",err));
  };

  const handleLoginFetch = () => {
    fetch(
      `http://www.coin-simulation.com:5200/login/oauth2/code/kakao?code=${code}&state=kakao`,
      {
        method: "POST",
        headers: {
          "Access-Control-Request-Method": "POST",
        },
      }
    )
      .then((data) => data.text())
      .then((data) => {
        console.log("백엔드 응답:", data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };

  return (
    <>
      <Button onClick={handleLoginFetch}> fetch 사용 </Button>
      <Button onClick={handleLoginAxios}> axios 사용 </Button>
    </>
  );
};

export default Test;
