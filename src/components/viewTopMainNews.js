import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import imageTest from '../img/imageTest.jpg';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiCardHeader-root": {
      backgroundColor: "#eae9da",
      disableTypography: "true",
    },
    "& .MuiCardHeader-title": {
      textTransform: "uppercase",
      fontSize: "1em",
      fontWeight: "700",
    },
    minHeight: 200,
    borderTop: "3px solid #c93037",
    border: "1px solid #eae9da",
    borderRadius: "0px",
    backgroundColor: "iherit",
    width: "100%",
    order: 0
  },
  content: {
    "& .MuiTypography-root": {
      padding:"15px 5px",
      fontWeight:"500",
      borderBottom:"1px solid #e1e0d7"
    },
    "& .MuiTypography-root *::last-child":{
      backgroundColor: "red",
    },
    display: "flex",
    flexDirection:"column",
    padding: "5px",
    backgroundColor: "inherit",
  },
}));

export default function ViewTopMainNews(props) {
  const classes = useStyles();
  let topNewsList = [];
  props.props.forEach(element => { if (element.version === 1) topNewsList.push(element) });
  console.log("topNewsList", topNewsList)

  return (


    <Card elevation={0} className={classes.root}>
      <CardHeader
        title="Главные новости"
      />
      <CardContent className={classes.content}>
        {topNewsList.map((element) => {  return <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>{element.title}</Typography> })}
      </CardContent>
    </Card>
  );
}
