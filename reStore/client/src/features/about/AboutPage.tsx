import { Alert, AlertTitle, Button, ButtonGroup, List, ListItem, ListItemText, Typography } from "@mui/material"
import { useState } from 'react';
import { Container } from "@mui/system"
import agent from "../../app/api/agent"

export default function AboutPage(){
    const [validationErrors, setValidationErrors] = useState<string[]>([])
    function getValidationError(){
        agent.TestErrors.getValidationError()
            .then(()=>console.log("should not see this"))
            .catch(error => setValidationErrors(error))
        }
    return (
        <Container>
            <Typography gutterBottom variant="h2">Error for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get400Error().catch(error => console.log(error))}>Test400 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 error</Button>
                <Button variant= "contained" onClick={()=>agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
                <Button variant= "contained" onClick={getValidationError}>Test Validation Error</Button>
            </ButtonGroup>
            {validationErrors.length > 0 && 
                <Alert severity ='error'>
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map(error =>(
                            <ListItem key = {error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    )
};