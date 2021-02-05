import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { theme as color } from '../Theme/Theme';
import { InfoRounded, } from '@material-ui/icons';
import "../CSS/Components/MyAppBar.css";
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const drawerWidth = 200;

const apps = [
    {
        name: "VOOT",
        image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fvoot.png?alt=media&token=3a85088f-817d-4053-96fb-4d1373ada778"
    },
    {
        name: "ZEE 5",
        image: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d"
    },
    {
        name: "ALT BALAJI",
        image: "https://etimg.etb2bimg.com/photo/68918163.cms"
    },
    {
        name: "YUPP TV",
        image: "https://play-lh.googleusercontent.com/mNX-Fl-1cgwBzuF8m8YFcaF7GGNUQAl5gLtH7eJNrYSZHYnw1GIVgTXSQT5K7OEM_1aE"
    },
    {
        name: "ARRE",
        image: "https://play-lh.googleusercontent.com/iMIuUGAXsv9t48WrZ3GKJDvVv0qBhn9k8gizHeXZjlJ0I6AXjYGJyX5KzSfIq2i6PMg"
    },
    {
        name: "SUN NXT",
        image: "https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw"
    },
    {
        name: "HOICHOI",
        image: "https://play-lh.googleusercontent.com/dxc6rqZHigOTItU0u3i4aWOKN9pdszX-JlZK1tRatCOyT3JJD1AOW7TZ-hzKyk1tkxI"
    },
    {
        name: "AHA",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Aha_OTT_Logo.jpeg"
    }
]


const menu = [
    {
        name: "Hollywood",
        link: "/hollywood"
    },
    {
        name: "Bollywood",
        link: "/bollywood"
    },
    {
        name: "TV",
        link: "/tv"
    },
    {
        name: "Movies",
        link: "/movies"
    },
    {
        name: "Anime",
        link: "/anime"
    },
    {
        name: "MOSAIC",
        link: "/mosaic-app-demo"
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function MyAppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <AppBar
                elevation={3}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ backgroundColor: color.palette.primary.dark, color: color.palette.primary.light, padding: "0px 10px" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                        <div style={{ display: "flex" }} >
                            <div style={{ fontFamily: "mosaic", margin: "0px 20px" }} className="wrap" >
                                MOSAIC
                            </div>
                            <div className="wrap" style={{ margin: "0px 20px", fontSize: "16px", zIndex: "0" }} >
                                <div className="dropdown" >
                                    <div className="menu" >
                                        Apps
                                    </div>
                                    <div class="dropdown-content">
                                        {
                                            apps.map(item => {
                                                return (
                                                    <a style={{color:"inherit"}} href={"/app/"+item.name} >
                                                        <div className="wrap app-list" style={{ justifyContent: "left" }} >
                                                            <div>
                                                                <img className="app-icon" src={item.image} />
                                                            </div>
                                                            <div className="app-name" >
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    menu.map(item => {
                                        return (
                                            <Link to={item.link} >
                                                <div className="menu">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div style={{ marginRight: "5vw" }}>
                            <input className="searchinput" placeholder="Search" />
                        </div>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <AccountCircleRoundedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                {/*<List>
                    {[
                        { name: 'Premium', icon: <StarRoundedIcon /> }, { name: "Trending", icon: <FaBolt /> }, { name: 'Channels', icon: <FolderSpecialRounded /> },
                        { name: 'Genres', icon: <FaTheaterMasks size="20px" /> }].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{text.icon}</ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        ))}
                </List>*/}
                <List>
                    {[{ name: 'Home', icon: <HomeRoundedIcon />, to: "/" }, { name: 'Contact Us', icon: <InfoRounded />, to: "contact-us" }, { name: 'FAQs', icon: <HelpOutlineRoundedIcon />, to: "faqs" }].map((text, index) => (
                        <Link to={text.to}>
                            <ListItem button key={text.name}>
                                <ListItemIcon>{text.icon}</ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Toolbar />
        </React.Fragment>
    );
}
