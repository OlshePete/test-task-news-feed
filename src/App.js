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


  React.useEffect(() => {
    dispatch(getData());
  }, [])

  const [isVisible, setIsVisible] = React.useState(false);

  const dispatch = useDispatch();

  const loadingDataStatus = useSelector((state) => state.must.loadingDataStatus);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      }
    }
  });

  const toggleVisibility = () => {
    console.log("window.pageYOffset", window.pageYOffset)
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!loadingDataStatus) {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App" style={{ flexDirection: "flex-start" }}>
          <div style={{ backgroundColor: "grey", order: "-1" }}>
            <Skeleton animation={true} className="app-drawer" variant="text" height="100%" width={240} />
          </div>
          <div className="app-content" style={{ backgroundColor: "lightgrey", width: "100%", flexWrap: "wrap", overflow: "hidden" }}>
            <Skeleton animation={true} style={{ marginRight: "auto" }} variant="text" width="auto" height={120}><h1>DATA LOADING</h1></Skeleton>


            <Box display="flex" alignItems="center" flexDirection="column" width="80%">

              <Box width="100%">
                <Skeleton animation={true} width="100%">
                  <Typography>......</Typography>
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton animation={true} variant="rect" width="100%">
                  <div style={{ paddingTop: '57%', justifyContent: "space-between" }} />
                </Skeleton>  </Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" width="80%">

              <Box width="100%">
                <Skeleton animation={true} width="100%">
                  <Typography>......</Typography>
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton animation={true} variant="rect" width="100%">
                  <div style={{ paddingTop: '57%' }} />
                </Skeleton>  </Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" width="80%">

              <Box width="100%">
                <Skeleton animation={true} width="100%">
                  <Typography>......</Typography>
                </Skeleton>
              </Box>
              <Box width="100%">
                <Skeleton animation={true} variant="rect" width="100%">
                  <div style={{ paddingTop: '57%' }} />
                </Skeleton>  </Box>
            </Box>
          </div>
        </div>
      </MuiThemeProvider>
    )
  } else {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="app-drawer" style={{ display: "flex" }}>
            <PermanentDrawerLeft />
          </div>
          <div className="app-content" style={{ maxWidth: "1000px" }}>
            <Content />
          </div>
          <div className="scroll-to-top">
            {isVisible &&
              <div onClick={scrollToTop} style={{ position: "fixed", top: 50, paddingLeft: 20 }}>
                <ArrowUpwardOutlinedIcon color="action" fontSize="large" /></div>}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default App;


