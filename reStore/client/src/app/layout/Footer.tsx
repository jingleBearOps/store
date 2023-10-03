import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";

export default function Header() {
  const FooterTitle = styled(Typography)(() => ({
    textTransform: "uppercase",
    marginBottom: "1em",
  }));

  return (
    // <Paper
    //   sx={{
    //     marginTop: "calc(10% + 60px)",
    //     width: "100%",
    //     position: "fixed",
    //     bottom: 0,
    //     background: 'grey',
    //   }}
    //   component="footer"
    //   square
    //   variant="outlined"
    // >
    // <Container maxWidth="lg">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          mb: 2,
          p: { xs: 4, md: 10 },
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            marginTop: "calc(10% + 60px)",
            width: "100%",
            position: "fixed",
            bottom: 0,
            background: "grey",
          }}
        >
          <Grid item md={6} lg={4}>
            <FooterTitle variant="body1" color={"white"}>
              About us
            </FooterTitle>
          </Grid>
        </Grid>
      </Box>
    // </Container>
    // </Paper>
  );
}
