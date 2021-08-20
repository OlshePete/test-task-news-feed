import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InformerMainNews from './informerMainNews';
import ViewTopMainNews from './viewTopMainNews';
import ViewNewHeaderGiant from './viewNewHeaderGiant';
import ViewNewMini from './viewNewHeaderMini'


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
  // console.log(props.props.feature)

  let freshNewsList = [];
  props.props.news.forEach(element => { if (element.version !== 1) freshNewsList.push(element) });

  return (
    <div className={classes.root} style={{ minHeight: "inherit" }}>

      <InformerMainNews elevation={0} props={props.props.informer} />
      <ViewTopMainNews props={props.props.news} />

      {           props.props.feature.map((element) => {
        return <ViewNewHeaderGiant item={element} key={element.datetime} />
      })
      }
      {           freshNewsList.slice(7).map((element) => {
        return <ViewNewMini key={element.datetime} props={element} />
      })
      }
    </div>
  );

}
