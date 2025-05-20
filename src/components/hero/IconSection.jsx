import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBike,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function IconSection() {
    const theme = useTheme()
  return (
    <Container sx={{mt:3, bgcolor: theme.palette.mode ==="dark" ? "#000" : "#fff" }}>
      <Stack
        divider={useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem />:null}
        direction={"row"}
        alignItems={"center "}
        sx={{ flexWrap: "wrap" }}
      > 
        <MyBox
          icon={<ElectricBolt />}
          title={"Fast Delivery"}
          subTitle={"start from"}
        />
        <MyBox
          icon={<AccessAlarmOutlined />}
          title={"Money Guarantee"}
          subTitle={"7 day back"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={"365 day"}
          subTitle={"For Free Return"}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={"Payment"}
          subTitle={"secuer system"}
        />
      </Stack>
    </Container>
  );
}

function MyBox({ icon, title, subTitle }) {
  const theme = useTheme();
  return (
    <Box
      //   className="border"
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? (
          "center"
        ) : "left",
        py: 1.6,
      }}
    >
      {icon}
      <Box
      //   sx={{m:2}}
      >
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
