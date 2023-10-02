import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import "./style.css";
export default function AboutPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <br></br>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        //   sx={{
        //     width: "120%",
        //     background: "white",
        //     margin: "10px",
        //     height: "900px",
        //   }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={3}
            sx={{ padding: "10px", height: "700px", background: "black" }}
          >
            <Typography
              variant="h1"
              fontSize={{ md: 50 }}
              sx={{ color: "white" }}
            >
              It’s all in the fall
            </Typography>
            <br></br>
            <Typography
              variant="h2"
              fontSize={{ md: 30, height: "700px" }}
              sx={{ color: "white" }}
            >
              The key to slow-pitch jigging is breathing life into a hunk of
              metal, and mastering this is nothing short of an art.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ padding: "5px" }}>
            <Slider {...settings}>
              <div>
                <img
                  src="/images/hero3.jpg"
                  alt="hero"
                  style={{ display: "block", width: "100%", maxHeight: 650 }}
                />
              </div>
              <div>
                <img
                  src="/images/hero2.jpg"
                  alt="hero"
                  style={{ display: "block", width: "100%", maxHeight: 650 }}
                />
              </div>{" "}
              <div>
                <img
                  src="/images/hero1.jpg"
                  alt="hero"
                  style={{ display: "block", width: "100%", maxHeight: 650 }}
                />
              </div>
              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                <Typography variant="h1">Welcome to the shop!</Typography>
              </Box>
            </Slider>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ padding: "5px", height: "700px", background: "grey" }}
          >
            <Typography
              variant="h1"
              fontSize={{ md: 50 }}
              sx={{ color: "white" }}
            >
              Try it your self
            </Typography>
            <br></br>
            <Typography
              variant="h2"
              fontSize={{ md: 20 }}
              sx={{ color: "white" }}
            >
              Regarding deep-sea fishing, slow-pitch jigging is a great way to
              catch big fish. This method of fishing involves casting a jig into
              the water, allowing it to sink towards the bottom, and then
              lifting the rod up and down at a steady rhythm—hence the name
              "slow pitch." It's an effective way to target all kinds of fish,
              from grouper, snapper, and amberjack to tuna, mackerel, and more.
              This beginner's guide will give you everything you need to know
              about slow-pitch jigging.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// import { Alert, AlertTitle, Button, ButtonGroup, List, ListItem, ListItemText, Typography } from "@mui/material"
// import { useState } from 'react';
// import { Container } from "@mui/system"
// import agent from "../../app/api/agent"

// export default function AboutPage(){
//     const [validationErrors, setValidationErrors] = useState<string[]>([])
//     function getValidationError(){
//         agent.TestErrors.getValidationError()
//             .then(()=>console.log("should not see this"))
//             .catch(error => setValidationErrors(error))
//         }
//     return (
//         <Container>
//             <Typography gutterBottom variant="h2">Error for testing purposes</Typography>
//             <ButtonGroup fullWidth>
//                 <Button variant= "contained" onClick={()=>agent.TestErrors.get400Error().catch(error => console.log(error))}>Test400 error</Button>
//                 <Button variant= "contained" onClick={()=>agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 error</Button>
//                 <Button variant= "contained" onClick={()=>agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 error</Button>
//                 <Button variant= "contained" onClick={()=>agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
//                 <Button variant= "contained" onClick={getValidationError}>Test Validation Error</Button>
//             </ButtonGroup>
//             {validationErrors.length > 0 &&
//                 <Alert severity ='error'>
//                     <AlertTitle>Validation Errors</AlertTitle>
//                     <List>
//                         {validationErrors.map(error =>(
//                             <ListItem key = {error}>
//                                 <ListItemText>{error}</ListItemText>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Alert>
//             }
//         </Container>
//     )
// };
