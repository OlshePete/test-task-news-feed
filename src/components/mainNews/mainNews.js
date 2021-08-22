import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InformerMainNews from './informerMainNews';
import ViewMainNewsImg from './viewMainNewsImg';
import ViewMainNewsText from './viewMainNewsText';
import ViewTopMainNews from './viewTopMainNews';


const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    padding: "15px",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
}));




export default function MainNews(props) {
  const classes = useStyles();

  console.log("props.props", props.props.feature)
  let featureList = props.props.feature;

  let newsList = [];
  props.props.news.forEach(element => { if (element.version !== 1) newsList.push(element) });

  return (
    <div className={classes.root} style={{ minHeight: "inherit" }}>

      <InformerMainNews elevation={0} props={props.props.informer} />
      <ViewTopMainNews props={props.props.news} />
      {featureList.map((element) => {
        if (featureList.lastIndexOf(element) % 2) return <ViewMainNewsText key={element.datetime} props={element} />; else return <ViewMainNewsImg item={element} key={element.datetime} />
      })}
    </div>
  );

}
