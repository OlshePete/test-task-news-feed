import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    minHeight: 400,
    width: "100%",
    padding: "20px  20px 0 20px",
    boxShadow: '0 0 0 0 #6b6a6a',
  },
  media: {
    minHeight: 200,
    maxWidth: "100%",
  },
  newsHeader: {
    color: "#656565",
    lineHeight: "25px",
    fontSize: "24px",
    fontWeight: "700",
    maxHeight: 150,
    overflow: "hidden",
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
    paddingBottom: 15,
    borderBottom: "1px solid #e5e5e5",
  },
}));

export default function ViewNewHeaderGiant({item}) {
  const classes = useStyles();
  const image1 = `https://meduza.io${item.image.base_urls.is1to2}`;

  let date = new Date(item.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);

  return (
    <Card className={classes.root}>
      <Link href={`http://meduza.io/${item.url}`}>
        <CardMedia
          className={classes.media}
          image={image1}
          title={item.title}
        />
        <CardContent className={classes.content}>
            {/* <Typography variant="body2" color="textSecondary" component="p" className={classes.time}>
              
            </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p"  className={classes.newsHeader}>
            <span className={classes.time}>{resultDate[0]}</span>{item.title}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
