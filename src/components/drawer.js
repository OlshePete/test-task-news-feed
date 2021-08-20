import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& label': {
      color: 'white',
    },
    // "& label.Mui-focused": {
    //   color: "yellow"
    // },
  },
  focused: {
    color: 'green',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  navlink: {
    width: drawerWidth - 30,
    color:"red",
  },
  notchedOutline: {
    borderWidth: "1px",
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: "lightyellow",
    backgroundColor: "#212121",
    color: "white",
    // padding: "10 10 ",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          {['Главная'].map((text, index) => (
            <ListItem button key={text} className={classes.navlink}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {['Новости', 'Истории', 'Разбор', 'Шапито', 'Коронавирус'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} className={classes.nalink} />
            </ListItem>
          ))}
        </List>
        <TextField

          InputProps={{
            classes: {
              input: classes.root,
              focused: classes.focused,
            }
          }}
          color="secondary"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          label="Search field"
          type="search"
        />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
