import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import imageTest from '../img/imageTest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    maxHeight: 200,
    padding: "20px  20px 0 20px",
    boxShadow: '0 0 0 0 #6b6a6a',
    backgroundColor: "inherit",
    width: "100%",
  },
  newsHeader: {
    height: "100%",
    color: "#656565",
    fontSize: "14px",
    lineHeight: "20px",
    paddingTop: "0",
  },
  time: {
    display: "inline",
    padding: "0",
    color: "red",
    fontSize: "12px",
    marginRight: "5px"
  },
  content: {
    padding: "0px",
    "&:last-child": {
      paddingBottom: 0
    }

  },
  line: {
    margin: "0",
    marginBottom: "10px",
    fontSize: "14px",
    fontWeight: "700",

  },
}));

export default function ViewNewMini(props) {
  const classes = useStyles();
  let date = new Date(props.props.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);


  return (
    <Card className={classes.root}>
      <hr className={classes.line} />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.time}>
            {resultDate}
          </Typography>
          {props.props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
