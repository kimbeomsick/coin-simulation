import { Stack, Box, Avatar, Button } from "@mui/material";
import { useState } from "react";
import { useTheme } from "styled-components";

const TopNavBar: React.FC = () => {
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };

  const logoutHandler = () => {
    setIsLogin(false);
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
          p: 1,
          border: "1px solid grey",
        }}
      >
        <Box component={"div"}>
          <img
            width="80px"
            src="data:image/png;base64,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"
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
              <Button onClick={loginHandler}>로그인</Button>
              <Button>회원가입</Button>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default TopNavBar;
