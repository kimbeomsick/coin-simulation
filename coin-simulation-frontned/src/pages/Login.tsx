import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { kakaoLoginAPI } from "../service/login/kakaoLogin";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const Login: React.FC = () => {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const code = params.get("code");

  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');

  console.log(code);
  console.log(`http://www.coin-simulation.com:5200/login/oauth2/code/kakao
  ?code=${code}&state=kakao`)
  useEffect(() => {
    if (code) {
      axios
        .post(`http://www.coin-simulation.com:5200/login/oauth2/code/kakao?code=${code}&state=kakao`)
        .then((data) => console.log(data.data))
        .catch((err) => console.log("에러", err));

      //형 코드
      // fetch(
      //   `http://www.coin-simulation.com:5200/login/oauth2/code/kakao?code=${code}&state=kakao`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Access-Control-Request-Method": "POST",
      //     },
      //   }
      // )
      //   .then((data) => data.text())
      //   .then((data) => {
      //     console.log("백엔드 응답:", data);
      //   })
      //   .catch((error) => {
      //     console.error("에러 발생:", error);
      //   });
    }
  }, []);

  return (
    <>
      <p>카카오 로그인 중</p>
    </>
  );
};

export default Login;
