import { AppBar, Toolbar, Typography, Switch, List, ListItem, Badge, IconButton, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]
const navStyle = {
    color: 'inherit', 
    typography: 'h6',
    '&:hover': {
        color:'grey'
    },
    '&.active': {
        color: 'black'
    },
    textDecoration: 'none'
}
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({darkMode, handleThemeChange} : Props){
    const {basket} = useAppSelector(state => state.basket);
    const {user} = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <AppBar position="static" color="secondary" >
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography variant ='h6' component={NavLink}
                    to='/'
                    sx={navStyle}
                    >
                        Re-Store
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>


                <Box>
                    <List sx={{display: 'flex'}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem
                                component = {NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}

                        {/* only authenticated user have access */}
                        {user &&
                            <ListItem
                                    component = {NavLink}
                                    to={'/inventory'}
                                    sx={navStyle}
                                >
                                    INVENTORY
                            </ListItem>
                        }
                        {/* only authenticated user have access */}


                    </List>
                </Box>
                
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr: 2}}>
                        <Badge badgeContent = {itemCount} color="primary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>
                    {user ? 
                    (
                        <SignedInMenu/>
                    )
                    :
                    (
                        <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                                component = {NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                        </List>
                    )}
                   
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}