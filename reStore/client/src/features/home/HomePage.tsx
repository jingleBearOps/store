import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./style.css";
export default function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true we are in mobile otherwise we are in desktop world
  const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: "#C2CAD0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const BannerImage = styled('img')(({src, theme }) => ({
    src: `url(${src}`,
    width: '100',
    [theme.breakpoints.down('md')]: {
      width: '110',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100',
      height: '100'
    },
  }))
  const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
  }));
  const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: "55px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "42px",
    },
  }));
  const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/hook1.png"/>
      <BannerContent>
        <Typography variant="h6">TAI RUBBER assist hook</Typography>
        <BannerTitle variant="h2">New Products</BannerTitle>
        <BannerDescription variant="subtitle1">
        A collaboration model with Japanese hook maker『ICHIKAWA』. This model uses the shape that can be used in any situation and wire diameter hook that can easily stab with less power. Pursuing the balance between strength and rigidity.
(1 pack for 3 pcs)
*Thread the leader line through movable head necktie unit and then connect with the ring.
*It can stab with less power, so we recommend to hook-up only with retrieving the line.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
