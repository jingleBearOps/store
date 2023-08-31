import { AppBar, Toolbar, Typography, Switch, List, ListItem, Badge, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({darkMode, handleThemeChange} : Props){
    return (
        <AppBar position="static" color="secondary" sx={{mb: 4}}>
            <Toolbar variant="dense">
                <Typography variant ='h6' component={NavLink}
                to='/'
                sx={{color: 'inherit' , textDecoration: 'none'}}
                >
                    Re-Store
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component = {NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <IconButton size='large' edge='start' color='inherit' sx={{mr: 2}}>
                    <Badge badgeContent = '4' color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>

                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                            component = {NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}