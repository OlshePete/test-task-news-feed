import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolbarTop from '../toolbar-top/toolbar-top';
import ViewFreshNewsHeaders from './fresh-news/viewFreshNewsHeaders';
import ViewPopularCategoriesNews from './popular-paragraph/viewPopularCategoriesNews';
import FooterBottom from '../footer/footer-bottom';
import { useSelector } from 'react-redux';
import MainNews from '../mainNews/mainNews';
import ViewShapitoNews from './shapito/viewShapitoNews';
import ViewOtherNews from './other-news/viewOtherNews';


const useStyles = makeStyles(() => ({

  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: '0 0 10px 0 #6b6a6a',
    flexWrap: "nowrap",
    minHeight: "100%",
    width: "100%",
    "& a":{
      borderBottom:"none !important",
      padding:"0px !important",
      "& :hover":{
        color:"red"
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    flexWrap: "wrap",
    width: "100%",
    order: 2,
    height:"100%"
  },
  mainList:{
   minHeight: "100vh", 
   flex: 2, 
   display: "flex", 
   flexDirection: "column"
  },
  mainNews:{
    width: "500px", 
    minHeight: "100%",
    flex: 1 
  }
}));

export default function Content() {
  const classes = useStyles();

  const data = useSelector((state) => state.must);
  const [arr, setArr] = React.useState(false);

  React.useEffect(() => {
  }, [])

  React.useEffect(() => {
    setArr(true);
  }, [data])

  if (data.data === {}) {
    return (
      <main className={classes.content}>
        <h1>DATA LOADING</h1>
      </main>
    )
  } else {
    return (

      <div className={classes.root}>

        <div className={classes.content}>

          <div className={classes.mainList}  >
            {arr ?  <ViewFreshNewsHeaders data={data.arr} /> : <h1>ViewFreshNewsHeaders LIST EMPTY</h1>}
            {arr ?  <ViewPopularCategoriesNews data={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
            {arr ?  <ViewShapitoNews data={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
            {arr ?  <ViewOtherNews data={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
          
          </div>
          <div className={classes.mainNews} >
          <MainNews  data={data.arr} />
          </div>
          
        </div>
          <ToolbarTop />
          <FooterBottom />
      </div>
    )
  }
}
