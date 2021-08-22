import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    maxHeight: 200,
    padding: "20px  20px 0 20px",
    boxShadow: 'none',
    backgroundColor: "inherit",
    width: "100%",
    textAlign: "justify",
  },
  newsHeader: {
    height: "100%",
    color: "#444",
    fontSize: "16px",
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

export default function ViewMainNewsText(props) {
  const classes = useStyles();
  const current = props.props;

  const monthList = useSelector((state) => state.must.monthList);

  let date = new Date(current.datetime*1000 );

  let resultTime = date.toString().match(/[0-9]{2}:[0-9]{2}/);

  let currentDate = date.getMonth();
  let currentDay = date.getDay() + 1;
  let resultDate = "";
  console.log("currentDay",currentDay)

  for (let i = 0; i < monthList.length; i++) {
    const element = monthList[i];
    if (i===currentDate ) resultDate=`${element}, ${currentDay}`;
  }
  
  return (
    <Card className={classes.root}>
      <Link href={`http://meduza.io/${current.url}`}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.time}>
              {resultTime} - {resultDate}
          </Typography>
            {current.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
