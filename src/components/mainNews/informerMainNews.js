import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    maxHeight: 200,
    backgroundColor: "inherit",
    width: "100%",
    order: 0
  },
  content: {
    display: "flex",
    padding: "5px",
    backgroundColor: "inherit",
  },
  media: {
    height: "100px",
    maxWidth: "inherit",
    minWidth: "100px",
  },
  newsHeader: {
    display: "flex",
    paddingLeft: "5px",
    flexDirection: 'column',
    justifyContent: "space-between"
  }
}));

export default function InformerMainNews(props) {
  const classes = useStyles();
  const informer = props.props
  const text = informer.text.split(". ")

  return (
    <Card elevation={0} className={classes.root}>
      <Link href={informer.url}>
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.media}
          image={informer.icon_url}
          title={informer.text}
        />
        <Typography variant="body2" color="textSecondary" component="p" className={classes.newsHeader}>
          {
            text.map((element) => {
              if (text.indexOf(element) === 0) {
                return <Typography variant="body2" color="textSecondary" component="p" style={{ fontWeight: "700", color: "black", fontSize: "1.5em" }}>
                  {element}
                </Typography>
              } else return <Typography variant="body2" color="textSecondary" component="p">
                {element}
              </Typography>
            })
          }
        </Typography>
      </CardContent></Link>
    </Card>
  );
}
