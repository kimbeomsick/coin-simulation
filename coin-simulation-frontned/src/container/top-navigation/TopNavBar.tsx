import { Stack, Box, Avatar, Button } from "@mui/material";
import { useState } from "react";
import { useTheme } from "styled-components";
import { kakaoLoginAPI } from "../../service/login/kakaoLogin";
const TopNavBar: React.FC = () => {
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    kakaoLoginAPI.login();
  };

  const logoutHandler = () => {
    setIsLogin((pre) => !pre);
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          backgroundColor: theme.background.white,
          width: "100%",
          boxSizing: "border-box",
          p: 2,
          pr: 4,
          pl: 4,
        }}
      >
        <Box component={"div"}>
          <img
            width="50px"
            src="https://cdn-icons-png.flaticon.com/128/9382/9382189.png"
            alt=""
          />
        </Box>

        <Stack direction={"row"} gap={2}>
          {isLogin ? (
            <>
              <Button onClick={logoutHandler}>로그아웃</Button>
              <Avatar sx={{ bgcolor: "orange" }}>Me</Avatar>
            </>
          ) : (
            <>
              <Button onClick={handleLogin}>로그인</Button>
              <Button>회원가입</Button>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default TopNavBar;
