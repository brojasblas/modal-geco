import * as React from 'react';
import { Link } from 'react-router-dom'; // ho aggiunto Link
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EuroIcon from '@mui/icons-material/Euro';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SummarizeIcon from '@mui/icons-material/Summarize';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const icons = [
  <HomeIcon />, // home
  <BadgeIcon />, // dipendenti
  <TrendingUpIcon />, // fatturato atteso
  <EuroIcon />, // fatturato
  <LocalShippingIcon />, // ordinato
  <SummarizeIcon />, // sintesi
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>

        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
{/* principale */}
<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[0]}
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>

{/* lista dipendenti */}
          <ListItem disablePadding sx={{ display: 'block' }}>
<Link to="/listadipendenti" style={{ textDecoration: 'none', color: 'inherit' }}>   
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[1]}
              </ListItemIcon>
              <ListItemText primary="Dipendenti" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>

{/* fatturato */}
          <ListItem disablePadding sx={{ display: 'block' }}>
<Link to="/fatturato" style={{ textDecoration: 'none', color: 'inherit' }}>   
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[3]}
              </ListItemIcon>
              <ListItemText primary="Fatturato" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>

{/* fatturato atteso */}
          <ListItem disablePadding sx={{ display: 'block' }}>
<Link to="/fatturatoatteso" style={{ textDecoration: 'none', color: 'inherit' }}>   
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[2]}
              </ListItemIcon>
              <ListItemText primary="Fatturato Atteso" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>

{/* sintesi */}
          <ListItem disablePadding sx={{ display: 'block' }}>
<Link to="/sintesi" style={{ textDecoration: 'none', color: 'inherit' }}>   
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[5]}
              </ListItemIcon>
              <ListItemText primary="Sintesi" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>

          {/* Repeti il blocco ListItem per ciascun elemento della lista */}

{/* ordinato */}
<ListItem disablePadding sx={{ display: 'block' }}>
<Link to="/ordinato" style={{ textDecoration: 'none', color: 'inherit' }}>   
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icons[4]}
              </ListItemIcon>
              <ListItemText primary="Ordinato" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
</Link> 
          </ListItem>



        </List>
      </Drawer>
    </Box>
  );
}