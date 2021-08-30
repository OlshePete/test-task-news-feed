import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ViewShapitoImg from './viewShapitoImg';

const useStyles = makeStyles(() => ({

  root: {
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    order: "1",
    overflow: "hidden",
  },
  content: {
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column-reverse",
  },
}));

export default function ViewShapitoNews({data}) {
  const classes = useStyles();
  const current = data.shapito;
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
