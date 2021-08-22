import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolbarTop from '../toolbar-top/toolbar-top';
import ViewFreshNewsHeaders from './fresh-news/viewFreshNewsHeaders';
import ViewPopularCategoriesNews from './popular-paragraph/viewPopularCategoriesNews';
import FooterBottom from '../footer/footer-bottom';
import { useSelector } from 'react-redux';
import MainNews from '../mainNews/mainNews';
import ViewShapitoNews from './shapito/viewShapitoNews';
import ViewOtherNews from './other-news/viewMainNewsText';


const useStyles = makeStyles((theme) => ({

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
    height: "inherit",
    width: "100%",
    order: 2,
    height:"100%"

  },
}));

export default function Content() {
  const classes = useStyles();

  const data = useSelector((state) => state.must);
  const [arr, setArr] = React.useState(false);

  React.useEffect(() => {
    console.log("data useeffect start", data)
  }, [])

  React.useEffect(() => {
    console.log("data useeffect", data)
    setArr(true);
  }, [data])

  if (data.data === {}) {
    return (
      <main className={classes.content} style={{ backgroundColor: "red" }}>
        <h1>DATA LOADING</h1>
      </main>
    )
  } else {
    return (

      <div className={classes.root}>

        <div className={classes.content}>

          <div className={classes.mainList} style={{  minHeight: "100vh", flex: 2, display: "flex", flexDirection: "column" }} >
            {arr ?  <ViewFreshNewsHeaders props={data.arr} /> : <h1>ViewFreshNewsHeaders LIST EMPTY</h1>}
            {arr ?  <ViewPopularCategoriesNews props={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
            {arr ?  <ViewShapitoNews props={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
            {arr ?  <ViewOtherNews props={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
          
          </div>

          <div className={classes.mainNews} style={{width: "500px", minHeight: "100%", flex: 1 }} >
          <MainNews  props={data.arr} />
          </div>
          
        </div>
          <ToolbarTop />
          <FooterBottom />
      </div>
    )
  }
}
