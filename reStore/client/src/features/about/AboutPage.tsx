import { Button, ButtonGroup, Typography } from "@mui/material"
import { Container } from "@mui/system"
import agent from "../../app/api/agent"

export default function AboutPage(){
    return (
        <Container>
            <Typography gutterBottom variant="h2">Error for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get400Error()}>Test400 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get401Error()}>Test 401 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get404Error()}>Test 404 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get500Error()}>Test 500 Error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.getValidationError()}>Test Validation Error</Button>
            </ButtonGroup>
        </Container>
    )
};