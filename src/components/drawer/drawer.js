import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, TextField } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    "& ul": {
      paddingLeft: 10,
      margin: "0 0 0 15px"
    },
    "& .MuiOutlinedInput-root ": {
      color: "white",
    },
    "& a":{
      border:"none !important",
      padding:"0px !important",
      "& :hover":{
        color:"red",
        textDecoration:"none",
      },},
  },
  content:{

  },
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
    // height: "auto"
  },
  navlink: {
    width: "70%",
  },
  notchedOutline: {
    borderWidth: "1px",
  },
  textfield: {
    '& > *': {
      borderColor: "white",
    },
    BackgroundColor: "red !important",
    borderColor: "white",
    '&:hover': {
      backgroundColor: "rgba(99, 99, 99, 0.3);",
      borderColor: "white",
    },
    "&:active": {
      backgroundColor: "rgba(99, 99, 99, 0.1);",
      borderColor: "white",
    },

  },
  drawerPaper: {
    width: "inherit",
    padding: 0,
    backgroundColor: "#212121",
    color: "white",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  let linkName = ['Главная', 'Новости', 'Истории', 'Разбор', 'Шапито', 'Коронавирус']
  let linkList = [window.document.location.href, 'https://meduza.io/', 'https://meduza.io/articles', 'https://meduza.io/razbor', 'https://meduza.io/shapito', 'https://meduza.io/specials/coronavirus']
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.content}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          {linkName.map((text, index) => (
           
              // <ListItem  > 
              <Link href={`${linkList[index]}`} className={classes.navlink}>
                <ListItemText  key={text} primary={text} /></Link>
              // </ListItem>
          ))}
          <TextField style={{marginTop:15}}
            className={classes.textfield}
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="search"
            placeholder="Search field"
          />
          <div style={{ display: "flex", justifyContent: "left", paddingTop:15}}>
            <Link href="https://facebook.com"><img src="https://img.icons8.com/material/24/ffffff/facebook--v1.png" /></Link>
            <Link href="https://instagram.com"><img src="https://img.icons8.com/material/24/ffffff/instagram-new--v1.png" /></Link>
            <Link href="https://tiktok.com"><img src="https://img.icons8.com/material/24/ffffff/tiktok.png" /></Link>
            <Link href="https://twitter.com"><img src="https://img.icons8.com/material/24/ffffff/twitter--v1.png" /></Link>
          </div></List>
      </Drawer>
    </div></div>
  );
}
