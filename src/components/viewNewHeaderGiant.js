import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import imageTest from '../img/imageTest.jpg';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 400,
    width: "100%",
    padding: "20px  20px 0 20px",
    boxShadow: '0 0 0 0 #6b6a6a',
    backgroundColor: "inherit",
  },
  media: {
    minHeight: 300,
    maxWidth: "100%",
  },
  newsHeader: {
    color: "#656565",
    lineHeight: "25px",
    fontSize: "24px",
    fontWeight: "700"
  },
  time: {
    display: "inline",
    color: "red",
    fontSize: "14px",
    fontWeight: "700",
    marginRight: "5px"
  },
  content: {
    padding: "0",
    "&:last-child": {
      paddingBottom: 0
    }

  },
}));

export default function ViewNewHeaderGiant(item) {
  const classes = useStyles();
  const image1 = `https://meduza.io${item.item.image.base_urls.is1to2}`;
  
  let date = new Date(item.item.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image1}
        title={item.item.title}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.time}>
            {resultDate[0]}
        </Typography>
          {item.item.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
