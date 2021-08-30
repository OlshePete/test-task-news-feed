import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "auto",
    width: "100%",
    padding: "20px  20px 0 20px",
    boxShadow: '0 0 0 0 #6b6a6a',
    backgroundColor: "inherit",
    lineHeight:"18px",
  },
  media: {
    minHeight: 200,
    maxWidth: 300,
    marginBottom:"10px"
  },
  newsHeader: {
    color: "#444",
    lineHeight: "25px",
    fontSize: "19px",
    fontWeight: "700",
    maxHeight:100,
    minHeight:"auto",
    overflow:"hidden"
  },
  newsHeaderSecond: {
    color: "#444",
    lineHeight: "25px",
    fontSize: "17px",
    fontWeight: "500",
    minHeight:"auto",
    borderBottom:"1px solid #e5e5e5",
    paddingBottom:"15px",
    textAlign:"justify"
  },
  content: {
    padding: "0",
    "&:last-child": {
      paddingBottom: 0
    }
  },
}));

export default function ViewMainNewsImg({item}) {
  const classes = useStyles();
  const current = item;
  const image1 = `https://meduza.io/${current.image.base_urls.is1to2}`;
  return (
    <Card className={classes.root}>
     <Link href={`http://meduza.io/${current.url}`}>
       <CardMedia
        className={classes.media}
        image={image1}
        title={current.title}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          {current.title}
        </Typography>
        {current.second_title?<Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeaderSecond}>
        {current.second_title}</Typography>:<div/>}
        
      </CardContent>
      </Link> 
    </Card>
  );
}
