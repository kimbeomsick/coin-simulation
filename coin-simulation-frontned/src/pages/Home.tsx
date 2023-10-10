import { Box, Grid } from "@mui/material";
import UserProfile from "../container/user-profile/UserProfile";
import UserFinancialStatus from "../container/user-profile/UserFinancialStatus";

const Home: React.FC = () => {
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <UserProfile />
        </Grid>
        <Grid item xs={12} sm={8}>
          <UserFinancialStatus />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
