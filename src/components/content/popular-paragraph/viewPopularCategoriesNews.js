import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    margin: "15px",
    borderTop:"5px solid black",
    display: "flex",
    flexWrap: "nowrap",
    order: "1",
    flexDirection: "column",
    boxShadow: 'none',
    backgroundColor: "#ebe9da",
    borderRadius: 0,
    minHeight: 800,
    "& .MuiCardContent-root": {
      padding: 0,
    paddingTop:"15px",
    },
  },
  content: {

  },
  media: {
    minHeight: 500,
    minWidth: "100%",
  },
  section: {
    fontWeight: "600",
    color: "red",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "15px",
  },
  elements: {
    // display: "flex",
    // flexFlow: "column",
    // // flexDirection:"",
    // paddingLeft: 0,
    // paddingBottom: "15px",
    // height: "100%",
  },
  newsHeader: {
    fontSize: "26px",
    fontWeight: "700",
  },
  newsText: {
    fontSize: "24px",

  },
}));

export default function ViewPopularCategoriesNews(props) {
  const classes = useStyles();

  const [arrState, setArrState] = React.useState(props.props);
  console.log("ViewPopularCategoriesNews", props.props)
  console.log("ViewPopularCategoriesNews-arrState", arrState)


  const image1 = `https://meduza.io${arrState.paragraph[1].image.base_urls.is1to2}`;

  let date = new Date(props.props.datetime * 1000);
  let resultDate = date.toString().match(/[0-9]{2}:[0-9]{2}/);

  return (
    <Card className={classes.root}>
      <Link href={`http://meduza.io/${arrState.paragraph[1].url}`}>
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.media}
          image={image1}
          title={arrState.paragraph[1].title}
        />
        <div className={classes.info}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.section}>
            {arrState.paragraph[1].tag.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.data}>
            — {resultDate}
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
            {arrState.paragraph[1].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.newsText}>
            {arrState.paragraph[1].second_title}
          </Typography>
        </div>

      </CardContent></Link>
    </Card>
  );

}
