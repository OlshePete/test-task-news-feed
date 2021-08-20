import './App.css';
import React from 'react';
import PermanentDrawerLeft from './components/drawer';
import Content from './components/content';
import FooterBottom from './components/footer-bottom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './features/must/mustSlice';
import ToolbarTop from './components/toolbar-top';



function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [])

  const loadingDataStatus = useSelector((state) => state.must.loadingDataStatus);
  console.log(loadingDataStatus);
  // const scrollToTop = () => {
  //   window.scrollTo(0,0);
  //   console.log( document.documentElement.clientHeight); // ширина минус прокрутка
  // }
  if (!loadingDataStatus) {
    return (
      <div className="App" style={{ backgroundColor: "red" }}>
        <h1>DATA LOADING</h1>
      </div>
    )
  } else {
    return (
      <div className="App" style={{ }}>
        {/* <div className="scroll-top" style={{ position:'absolute', top:"1064px",left:"1300px",  boxShadow: '2px 2px 2px 2px #6b6a6a',}}>
          <button type="button" onClick={scrollToTop} style={{fontSize:"32px",  backgroundColor: "violet", cursor:"pointer", margin:"auto", transform: "rotate(-90deg)"}}>&#10095;</button>
        </div> */}
        <div className="app-drawer" style={{  display: "flex"}}>
          <PermanentDrawerLeft />
        </div>
        <div className="app-content" style={{ maxWidth: "1000px" }}>
          <Content />
        </div>

      </div>

    )
  }

}

export default App;


