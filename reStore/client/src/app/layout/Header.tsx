import { AppBar, Toolbar, Typography } from "@mui/material";
import { color } from "@mui/system";

export default function Header(){
    return (
        <AppBar position="static" color="secondary" sx={{mb: 4}}>
            <Toolbar variant="dense">
                <Typography variant ='h6'>
                    Re-Store
                </Typography>
            </Toolbar>
        </AppBar>
    )
}