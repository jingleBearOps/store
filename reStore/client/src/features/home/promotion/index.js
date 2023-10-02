import { Box, Typography, styled, Slide } from "@mui/material";
import { useEffect, useState } from "react";
const messages = [
  "environment friendly",
  "learn more about your local water",
  "go out and fishing!",
];

export default function Promotions() {
  const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      padding: "40px 0px 40px 0px",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "10px 0px 10px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: "purple",
  }));
  const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Rockwell", "cursive"',
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
    },

    color: "white",
    fontSize: "1.5rem",
  }));

  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer>
      <Slide direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 100}}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
