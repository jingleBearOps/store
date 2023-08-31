import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { color } from "@mui/system";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({darkMode, handleThemeChange} : Props){
    return (
        <AppBar position="static" color="secondary" sx={{mb: 4}}>
            <Toolbar variant="dense">
                <Typography variant ='h6'>
                    Re-Store
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}