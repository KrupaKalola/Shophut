import React from 'react';
import { Button } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import './header.css'
import List from '../../ListItem.json'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerColor: {
    backgroundColor: '#2eab70'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    alignSelf: 'flex-end'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [productAnchorEl, setProductAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProductMenuClick = (event) => {
    setProductAnchorEl(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setProductAnchorEl(null);
  };

  const productMenu = (
    <Menu
      id="productList"
      anchorEl={productAnchorEl}
      keepMounted
      open={Boolean(productAnchorEl)}
      onClose={handleProductMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {
        List.map(data => {
          return <MenuItem onClick={handleProductMenuClose}>
            <Link to={`/Product/id=${data.categoryId}&category=${data.category}`}>
              {data.category}
            </Link>
          </MenuItem>
        })
      }
      
    </Menu>)

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {/* <p>Profile</p> */}
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow, 'header'}>
      <AppBar position="static" className={classes.headerColor}>
        <Toolbar>
          <Link to='/'>
            <Typography className={classes.title} variant="h4" noWrap>
              Shophut
              </Typography>
          </Link>
          <div className={classes.grow} />

          <Typography noWrap>
            <Button>
              <Link to='/'>
                Home
              </Link>
            </Button>
          </Typography>
          <Typography noWrap style={{ marginLeft: '24px' }} >
            <Button aria-controls="productList" aria-haspopup="true" onClick={handleProductMenuClick} style={{ color: '#fff' }}>
              Products
            </Button>
          </Typography>
          {productMenu}
          <div style={{ flexGrow: '4' }} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Link to='/cart'>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={props.badge} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>

  );
}



export default Header;