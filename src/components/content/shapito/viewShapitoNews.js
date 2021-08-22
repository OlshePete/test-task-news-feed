import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ViewShapitoImg from './viewShapitoImg';

const useStyles = makeStyles(() => ({

  root: {
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    // maxHeight: 900,
    order: "1",
    overflow: "hidden",
    // display: "flex",
    // flexDirection: "column",
    // flexWrap: "wrap",
  },
  content: {
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
}));

export default function ViewShapitoNews(props) {
  const classes = useStyles();
  const current = props.props.shapito;
  return (

    <div className={classes.root} >
      <div className={classes.content} >
        {
          current.map((element) => {
            return <ViewShapitoImg key={element.datetime} item={element} />
          })
        }
      </div>
    </div>
  );

}
