import { Container, Paper, Divider, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 4000}}>
            <Typography gutterBottom variant= 'h3'>Ops - we could not find what you are looking for</Typography>
            <Divider/>
            <Button fullWidth component  = {Link} to = "/catalog"> Go back to Shop</Button>
        </Container>
    )
}