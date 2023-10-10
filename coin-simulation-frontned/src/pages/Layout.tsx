import { Box } from "@mui/material";
import TopNavBar from "../container/top-navigation/TopNavBar";
import { useTheme } from "styled-components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.background.grey }}>
        <TopNavBar />
        <Box
          component="div"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            height: "calc(100vh - 50px)",
            p: 2,
            boxShadow: "border-box",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
