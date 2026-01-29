import { Box, Stack } from "@mui/material";
import QuickInformation from "@/components/homePageDashboard/QuickInformation";
import TitleDash from "@/components/dashboard/titlePages/TitleDash";

const HomePage = () => {
  return (
    <Box>
      <TitleDash title={"Dashboard"} subTitle={"Welcome to your dashboard"} />
      <Stack gap={5}>
        <QuickInformation />
      </Stack>
    </Box>
  );
};

export default HomePage;