import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "./style.css";
import Promotions from "./promotion";
export default function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); //if true we are in mobile otherwise we are in desktop world
  const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "95%",
    height: "400px",
    padding: "0px 0px",
    m: "20px",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      // alignItems: "center",
    },
  }));
  const BannerImage = styled('img')(({src, theme }) => ({
    src: `url(${src}`,
    width: '100px',
    [theme.breakpoints.down('md')]: {
      width: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px'
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
    fontSize: "40px",
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
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
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1,
      letterSpacing: 1,
      marginBottom: "1.2em",
    },
  }));
  return (
    <>
    <Container sx={{ 
      mb: 4,
    background: '#eaeaea',
    // display: "flex",
    // justifyContent: "center",
  }} 
    maxWidth="xl"
    >
    <BannerContainer sx={{mt: "20px"}}>
      <BannerImage src="/images/banner/hook1.jpg"/>
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
    <Promotions ></Promotions>
    </Container>
    </>
  );
}
