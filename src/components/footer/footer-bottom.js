import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    order:"3",
    height: 180,
    backgroundColor:"#212121",
    marginTop:"auto",
    width: "100%"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    textAlign: "left",
    alignItems:"center"
  },
  logo: {
    fontWeight:700,
    marginLeft:"20px",
    fontSize:"58px",
    color:"white",

  },
  date: {
    marginLeft:"20px",
    textTransform:"uppercase",
    color:"white",
  },
}));

export default function FooterBottom() {
  const classes = useStyles();

  return (

          // <div className="footer" style={{ backgroundColor: "red", marginTop: "auto", order: "3" }}>footer</div> 
    <div className={classes.root}>
      <div className={classes.footer}>
      <div className={classes.logo}>  FOOTER</div>
      <div className={classes.date} id="date-time">18 августа, 13:02</div>
    </div>
    </div>
  );

}
