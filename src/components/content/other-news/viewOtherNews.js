import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ViewMainNewsText from '../../mainNews/viewMainNewsText';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 50,
    maxHeight: "auto",
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
    paddingTop: "0",
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "column",
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

  },
}));

export default function ViewOtherNews({data}) {
  const classes = useStyles();
  const current = data.feature;

  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
          {current.map((element) => {
         return <ViewMainNewsText className={classes.newsHeader} key={element.datetime} props={element} />
      })}
        </CardContent>
    </Card>
  );
}
