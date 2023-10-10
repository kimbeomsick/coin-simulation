import { Box, Typography,Chip } from "@mui/material";
import { useTheme } from "styled-components";
const UserProfile: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        component="div"
        sx={{
          pt:4,
          pb:4,
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: theme.border.default,
          boxShadow:theme.shadow.default,
          height: theme.box.height,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{
            width:"120px",
            height:"120px",
            backgroundColor:theme.background.grey,
            borderRadius:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>아바타</Box>
        <Typography variant="subtitle1">123,123,123 원</Typography>
        <Chip color="error" label="0.02%"/>
      </Box>
    </>
  );
};

export default UserProfile;
