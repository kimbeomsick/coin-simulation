import { Box } from "@mui/material";
import { useTheme } from "styled-components";
const UserFinancialStatus: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        component="div"
        sx={{
          pt: 4,
          pb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: theme.border.default,
          boxShadow: theme.shadow.default,
          height: theme.box.height,
          backgroundColor: "#fff",
        }}
      >fdzz</Box>
    </>
  );
};

export default UserFinancialStatus;
