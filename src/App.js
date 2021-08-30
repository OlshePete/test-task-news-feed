import './App.css';
import React from 'react';
import PermanentDrawerLeft from './components/drawer/drawer';
import Content from './components/content/content';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './features/must/mustSlice';
import { Box, createTheme, MuiThemeProvider, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch])

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const [isVisible, setIsVisible] = React.useState(false);


  const loadingDataStatus = useSelector((state) => state.must.loadingDataStatus);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      }
    }
  });

  const toggleVisibility = () => {
  //   console.log("window.pageYOffset", window.pageYOffset)
    if (window.pageYOffset > 300) {setIsVisible(true);} else {setIsVisible(false);}
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!loadingDataStatus) {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App" >
          <div style={{ backgroundColor: "grey", order: "-1" }}>
            <Skeleton className="app-drawer" variant="text" height="100%" width={240} />
          </div>
          <div className="app-content" style={{ backgroundColor: "lightgrey", width: "100%", flexWrap: "wrap", overflow: "hidden" }}>
            <Skeleton style={{ marginRight: "auto" }} variant="text" width="auto" height={120}><h1>DATA LOADING</h1></Skeleton>

              <Box width="100%">
                <Skeleton width="100%">
                  <Typography>......</Typography>
                </Skeleton>
              </Box>
             
          </div>
        </div>
      </MuiThemeProvider>
    )
  } else {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="app-drawer">
            <PermanentDrawerLeft />
          </div>
          <div className="app-content">
            <Content />
          </div>
          <div>
            {isVisible &&
              <div onClick={scrollToTop}  className="scroll-to-top">
                <ArrowUpwardOutlinedIcon
                  color="action" 
                  fontSize="large" 
                />
                </div>}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default App;


