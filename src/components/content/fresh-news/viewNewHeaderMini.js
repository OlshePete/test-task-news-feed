import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 50,
    maxHeight: 200,
    padding: "20px  20px 0 20px",
    boxShadow: '0 0 0 0 #6b6a6a',
    width: "100%",
  },
  newsHeader: {
    height: "100%",
    color: "#656565",
    fontSize: "14px",
    lineHeight: "20px",
    paddingTop: "0",
    paddingBottom: "15px",
    borderBottom: "1px solid #e5e5e5",
  },
  time: {
    display: "inline",
    padding: "0",
    color: "red",
    fontSize: "12px",
    marginRight: "5px"
  },
  content: {
    paddingBottom: "15px !important",
    padding: "0px",

  },
}));

export default function ViewNewMini({item}) {
  const classes = useStyles();
  let date = new Date(item.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);


  return (
    <Card className={classes.root}>
      <Link href={`http://meduza.io/${item.url}`}>
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          <span className={classes.time}>{resultDate}</span>{item.title}
        </Typography>
      </CardContent>
      </Link>
    </Card>
  );
}
