import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InformerMainNews from './informerMainNews';
import ViewMainNewsImg from './viewMainNewsImg';
import ViewMainNewsText from './viewMainNewsText';
import ViewTopMainNews from './viewTopMainNews';


const useStyles = makeStyles(() => ({

  root: {
    display: "flex",
    padding: "15px",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
}));

export default function MainNews({data}) {
  const classes = useStyles();
  let featureList = data.feature;

  let newsList = [];

  data.news.forEach(element => { if (element.version !== 1) newsList.push(element) });

  return (
    <div className={classes.root} style={{ minHeight: "inherit" }}>

      <InformerMainNews elevation={0} props={data.informer} />
      <ViewTopMainNews props={data.news} />
      {featureList.map((element) => {
        if (featureList.lastIndexOf(element) % 2) return <ViewMainNewsText key={element.datetime} props={element} />; else return <ViewMainNewsImg item={element} key={element.datetime} />
      })}
    </div>
  );

}
