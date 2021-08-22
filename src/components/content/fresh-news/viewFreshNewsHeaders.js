import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ViewNewHeaderGiant from './viewNewHeaderGiant';
import ViewNewMini from './viewNewHeaderMini'
import { Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({

  root: {    
    paddingLeft: 0,
    paddingBottom: "15px",
    boxShadow: 'none',
    maxHeight: 650,
    order:"1",
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
    width:"50%",
  },
}));

export default function ViewFreshNewsHeaders(props) {
  const classes = useStyles();
  const [arrState, setArrState] = React.useState(props.props);
  
  let freshNewsList = [];
  arrState.news.forEach(element => { if (element.version !== 1) freshNewsList.push(element) });
console.log(freshNewsList.slice(7))
  return (

    <div className={classes.root} >
    <div className={classes.content} >
      <Link href={`http://meduza.io/${arrState.paragraph[0].url}`}> <ViewNewHeaderGiant item={arrState.paragraph[0]} key={arrState.paragraph[0].datetime}/></Link>
        {
           freshNewsList.slice(0,7).map((element) => {
            return <Link href={`http://meduza.io/${element.url}`}><ViewNewMini key={element.datetime} props={element} /></Link>
          })
        }
    </div> </div>
  );

}
