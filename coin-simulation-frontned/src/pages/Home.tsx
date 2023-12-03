import { useTheme } from "styled-components";
import { Box, Grid, Typography, Stack, Button, Avatar } from "@mui/material";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import GitHubIcon from '@mui/icons-material/GitHub';
const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      {/* 배경 */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "200px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container gap={1} sx={{ minWidth:"1000px" ,maxWidth: "1200px" }}>
          {/* 주요 내용 */}
          <Grid item xs={6} sx={{ p: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", height: "600px" }}
            >
              <Stack direction={"column"} gap={4}>
                <Typography variant="h3">
                  가상 비트코인 거래소에
                  <br /> 오신 것을 환영합니다!
                </Typography>
                <Typography variant="subtitle1" color="grey">
                  "가상 화폐 거래를 시도하고 비트코인 시장의 실제 경험을 얻을 수
                  있습니다. 우리의 가상 거래소는 실제 비트코인 거래와 유사한
                  환경을 제공하여, 거래 전략을 시험하고 비트코인 투자의 성과를
                  추적할 수 있습니다. 안전한 환경에서 모의 거래를 시작하고,
                  비트코인 시장에 대한 지식을 쌓아보세요!"
                </Typography>
                <Box>
                  <Button
                    sx={{
                      borderRadius: "40px",
                      p: 2,
                      pr: 4,
                      pl: 4,
                      background: "linear-gradient(45deg, #FFD700, #FF6B6B)",
                    }}
                    variant="contained"
                  >
                    Get Start!
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "400px",
                height: "400px",
                backgroundImage: `url(${logo2})`,
                backgroundSize: "cover",
                zIndex: "99",
              }}
            ></Box>
            <Box
              sx={{
                width: "450px",
                height: "50px",
                top: "250px",
                position: "absolute",
                borderRadius: "1000px",
                background: "linear-gradient(45deg, #FFD700, #FF6B6B)",
                transform: `rotate(135deg)`,
              }}
            ></Box>
            <Box
              sx={{
                width: "450px",
                height: "50px",
                top: "350px",
                right: "-50px",
                position: "absolute",
                borderRadius: "1000px",
                background: "linear-gradient(45deg, #FFD700, #FF6B6B)",
                transform: `rotate(135deg)`,
              }}
            ></Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              pt: 5,
              pb: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "center", width: "100%", mb: 10 }}
            >
              실시간 시세
            </Typography>
            {[1, 2, 3, 4].map((item) => (
              <Box
              key={item}
                sx={{
                  p: 2,
                  borderRadius: "8px",
                  height: "120px",
                  width: "20%",
                  boxShadow: theme.boxShadow.default,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Avatar
                    src="https://cdn-icons-png.flaticon.com/128/9382/9382189.png"
                    sx={{ width: 40, height: 40 }}
                  />
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    [BTC] BitCoin
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="subtitle1">35,960,000</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        borderRadius: "8px",
                        p: 1,
                        backgroundColor: "red",
                        color: "white",
                      }}
                    >
                      0.02%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 15,
              mb: 5,
            }}
          >
            <Typography variant="h5">이번주 랭킹</Typography>
          </Grid>
          <Grid item xs={7} sx={{position:"relative"}}>
            <Box
              sx={{
                width: "600px",
                height: "600px",
                backgroundImage: `url(${logo3})`,
                backgroundSize: "cover",
                position:"absolute",
                zIndex:99,
              }}
            />
            <Box
              sx={{
                width: "200px",
                height: "200px",
                top: "20px",
                left:"70px",
                position: "absolute",
                borderRadius: "1000px",
                background: "linear-gradient(45deg, #FFD700, #FF6B6B)",
                transform: `rotate(45deg)`,
              }}
            ></Box>
            <Box
              sx={{
                width: "180px",
                height: "180px",
                top: "90px",
                left:"320px",
                position: "absolute",
                borderRadius: "1000px",
                background: "linear-gradient(45deg, #FFD700, #FF6B6B)",
                transform: `rotate(45deg)`,
              }}
            ></Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              {[1, 2, 3].map((item) => (
                <Box
                key={item}
                  sx={{
                    pt: 4,
                    pb: 4,
                    borderRadius: theme.border.default,
                    width: "30%",
                    height: "180px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    boxShadow: theme.boxShadow.default,
                  }}
                >
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.text.highlight }}
                  >
                    사용자 닉네임
                  </Typography>
                  <Typography variant="body2">35,960,000</Typography>
                </Box>
              ))}
            </Box>
            <Stack gap={2} sx={{ width: "100%", mt: 3 }}>
              {[4, 5, 6, 7, 8].map((item) => (
                <Box
                  key={item}
                  sx={{
                    height: "30px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    pl: 4,
                    boxShadow: theme.boxShadow.default,
                  }}
                >
                  <Typography variant="h6">{item}</Typography>

                  <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.text.highlight }}
                  >
                    사용자 닉네임
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "grey", width: "130px" }}
                  >
                    32,242,000
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        {/* footer */}
        <Box
          sx={{
            mt: 10,
            width: "100%",
            backgroundColor: "#252525",
            p: 4,
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <GitHubIcon sx={{mb:2}}/>
          Copyright 2023. All rights reserved

        </Box>
      </Box>
    </>
  );
};

export default Home;
