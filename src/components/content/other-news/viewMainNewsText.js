import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import ViewMainNewsText from '../../mainNews/viewMainNewsText';
import ViewMainNewsImg from '../../mainNews/viewMainNewsImg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    maxHeight: "auto",
    // padding: "20px  20px 0 20px",
    boxShadow: 'none',
    backgroundColor: "inherit",
    width: "100%",
    textAlign: "justify",
    order:1
  },
  newsHeader: {
    height: "100%",
    color: "#444",
    fontSize: "30px",
    lineHeight: "20px",
    paddingTop: "0",
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "18px",
  },
  time: {
    display: "inline",
    padding: "0",
    color: "red",
    fontSize: "12px",
    marginRight: "5px"
  },
  content: {
    borderBottom: "1px solid #e5e5e5",
    paddingBottom: "15px",
    padding: "0px",
    "&:last-child": {
      paddingBottom: 0
    },
    "&: .MuiTypography-root": {

    },

  },
}));

export default function ViewOtherNews(props) {
  const classes = useStyles();
  const current = props.props.feature;

  let date = new Date(current.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);
console.log("current",current)

  return (
    <Card className={classes.root}>
      <Link href={`http://meduza.io/${current.url}`}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          {current.map((element) => {
         return <ViewMainNewsText key={element.datetime} props={element} />
      })}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
