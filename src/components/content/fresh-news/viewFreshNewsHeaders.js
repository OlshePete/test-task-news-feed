import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ViewNewHeaderGiant from './viewNewHeaderGiant';
import ViewNewMini from './viewNewHeaderMini'

const useStyles = makeStyles(() => ({

  root: {
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    maxHeight: 650,
    order: "1",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    maxHeight: 650,
    width: "50%",
  },
}));

export default function ViewFreshNewsHeaders({ data }) {
  const classes = useStyles();
  const arrState = data;
  let freshNewsList = [];
  arrState.news.forEach(element => { if (element.version !== 1) freshNewsList.push(element) });

  return (

    <div className={classes.root} >
      <div className={classes.content} >
        <ViewNewHeaderGiant item={arrState.shapito[0]} key={arrState.shapito[0].datetime} />
        {
          freshNewsList.slice(0, 7).map((element) => <ViewNewMini key={element.datetime} item={element} />)
        }
      </div> </div>
  );

}
