import { Box } from "@mui/material";
import TopNavBar from "../container/top-navigation/TopNavBar";
// import { useTheme } from "styled-components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  
  return (
    <>
      <Box>
        <TopNavBar />
        <Outlet/>
      </Box>
    </>
  );
};

export default Layout;
