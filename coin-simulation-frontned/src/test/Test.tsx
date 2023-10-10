
import { useTheme } from "styled-components";
import Layout from "../pages/Layout";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Test:React.FC = () =>{
    const theme = useTheme();
    console.log(theme)
    return(
        <>
        <Layout/>
        <Box sx={{ backghround:theme.background.grey, height:"calc(100ch-50px)"}}>
            <Outlet/>
        </Box>
        </>
    )
}

export default Test;