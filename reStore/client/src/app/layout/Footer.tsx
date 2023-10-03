import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Header() {
  const FooterTitle = styled(Typography)(() => ({
    textTransform: "uppercase",
    marginBottom: "1em",
  }));
  const SubscribeTf = styled(TextField)(() => ({
    '.MuiInputLabel-root': {
        color: "white"
    },
    '.MuiInput-root::before': {
        borderBottom: `1px solid ${"white"}`
    }
  }));
  return (
    <Box
      sx={{
        background: "grey",
        flexGrow: 1,
        justifyContent: "center",
        display: "flex",
        p: { xs: 4, md: 10 },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={
          {
            //   marginTop: "calc(10% + 60px)",
            //   width: "100%",
            //   position: "fixed",
            //   bottom: 0,
          }
        }
      >
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1" color={"white"}>
            About us
          </FooterTitle>
          <Typography variant="caption" color={"white"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            molestiae! Nulla maiores adipisci odio dignissimos dolore nam
            possimus libero quasi veritatis tempora nemo, ullam odit est
            laudantium dolorem veniam. Velit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Itaque ullam nihil explicabo
            cupiditate obcaecati distinctio totam sapiente ipsum hic illo. Unde
            nemo consequuntur repellendus cupiditate velit quis quos, hic omnis!
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: "black",
            }}
          >https://www.linkedin.com/in/jingzhuo-tian-297034216/
            <FacebookIcon sx={{ mr: 1 , cursor: "pointer"}}  onClick={() => window.open('https://www.facebook.com/profile.php?id=100010428930771', '_blank')}/>
            <LinkedInIcon sx={{ mr: 1 , cursor: "pointer"}}  onClick={() => window.open('https://www.linkedin.com/in/jingzhuo-tian-297034216/', '_blank')}/>
            <InstagramIcon sx={{ mr: 1 , cursor: "pointer"}}  onClick={() => window.open('https://www.instagram.com/getthenull/', '_blank')}/>
            <GitHubIcon sx={{ mr: 1 , cursor: "pointer"}}  onClick={() => window.open('https://github.com/jingleBearOps', '_blank')}/>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1" color={"white"}>
            Information
          </FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
        <FooterTitle variant="body1" color={"white"}>
            My Account
          </FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                My Card
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" color={"white"}>
                Whishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
            <FooterTitle variant='body1' color={"white"}>news letter</FooterTitle>
            <Stack>
                <SubscribeTf
                    color="primary"
                    label="Email address"
                    variant="standard"
                >

                </SubscribeTf>
            </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
