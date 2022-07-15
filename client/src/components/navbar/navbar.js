import React, { useState,useEffect } from 'react';
import {AppBar, Typography,Avatar,Toolbar, Button} from '@material-ui/core';
import useStyles from './styles'
import cm from '../../images/cam.png';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {useDispatch}  from 'react-redux'
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';
import ckm from '../../images/keyb.png';
const Navbar= ()=>{

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const Navigate = useNavigate();
  const classes = useStyles();
  console.log("lets see");
  console.log(user);

  const logout=()=>
  {
    dispatch({type:actionType.LOGOUT});
    Navigate('/auth'); 
    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      console.log("token  yes");
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }else {
      console.log("notoken");
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


return (
  <AppBar className={classes.appBar} position="static" color="inherit">
  <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Expresso</Typography>
    <img className={classes.image} src={cm} alt="icon" height="60" />
  </div>
  <Toolbar className={classes.toolbar}>
    {user?.result ? (
      <div className={classes.profile}>
        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
      </div>
    ) : (
      <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
    )}
  </Toolbar>
</AppBar>
);


}

export default Navbar;
//        