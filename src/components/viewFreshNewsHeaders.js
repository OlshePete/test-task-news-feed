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
    order:"1",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    maxHeight: 650,
    width:"50%"
  },
}));

export default function ViewFreshNewsHeaders(props) {
  const classes = useStyles();
  const [arrState, setArrState] = React.useState(props.props);
  
  let freshNewsList = [];
  arrState.news.forEach(element => { if (element.version !== 1) freshNewsList.push(element) });

  return (

    <div className={classes.root} >
    <div className={classes.content} >
       <ViewNewHeaderGiant item={arrState.paragraph[0]} key={arrState.paragraph[0].datetime}/>
        {
           freshNewsList.slice(0,7).map((element) => {
            return <ViewNewMini key={element.datetime} props={element} />
          })
        }
    </div> </div>
  );

}
