import axios from "axios";
const kakaoURL = "https://kauth.kakao.com/oauth/authorize";
const client_id = "e8b2fe68b0bf22ce159adcb136bbc962";
const redirect_uri = "http://localhost:5173/auth/kakao";
const baseURL = import.meta.env.VITE_BASE_URL;

/**
 * 카카오 로그인
 *
 */
export const kakaoLoginAPI = {
  //로드인 페이지로 이동
  login() {
    console.log({ kakaoURL, client_id, redirect_uri });
    const link = `${kakaoURL}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=kakao`;
    // const link = `https://kauth.kakao.com/oauth/authorize?client_id=e8b2fe68b0bf22ce159adcb136bbc962&redirect_uri=http://localhost:5173/auth/kakao&response_type=code&state=kakao`;
    window.location.href = link;
  },

  //로그인후 가져온 토큰 정보로 accessToken refreshToken 가져오기
  getToken(code: string) {
    return axios.post(
      `${baseURL}/login/oauth2/code/kakao?code=${code}&state=kakao`
      // {},
      // // { headers: { "Access-Control-Request-Method": "POST" } }
    );
  },
};
