import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolbarTop from './toolbar-top';
import ViewFreshNewsHeaders from './viewFreshNewsHeaders';
import ViewPopularCategoriesNews from './viewPopularCategoriesNews';
import FooterBottom from './footer-bottom';
import { useDispatch, useSelector } from 'react-redux';
import MainNews from './mainNews';


const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: '0 0 10px 0 #6b6a6a',
    flexWrap: "nowrap",
    minHeight: "100%",
    width: "100%",
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
  mainList:{
  },
  mainNews:{
    
  }
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

          <div className={classes.mainList} style={{ backgroundColor: "inherit", width: "500px", minHeight: "100vh", flex: 2, display: "flex", flexDirection: "column" }} >
            {arr ? <ViewFreshNewsHeaders props={data.arr} /> : <h1>ViewFreshNewsHeaders LIST EMPTY</h1>}
            {arr ?  <ViewPopularCategoriesNews props={data.arr} /> : <h1>ViewPopularCategoriesNews LIST EMPTY</h1>}
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
