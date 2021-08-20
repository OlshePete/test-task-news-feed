import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: "inline-block",
    height: 90,
    width: "100%",
    padding: "100 auto",
    marginTop: "0",  
    order: "1" ,
    borderBottom: "5px solid black"
  },
  toolbar: theme.mixins.toolbar,
  toolbar: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    textAlign: "left",
    alignItems: "center"
  },
  logo: {
    fontWeight: 700,
    marginLeft: "20px",
    fontSize: "58px",

  },
  date: {
    marginLeft: "20px",
    textTransform: "uppercase"
  },
}));
// backgroundColor: "brown",  order: "1" 
const getMonthName = (month) => {
  switch (month) {
    case 0:
      return "января";
    case 1:
      return "февраля";
    case 2:
      return "марта";
    case 3:
      return "апреля";
    case 4:
      return "мая";
    case 5:
      return "июня";
    case 6:
      return "июля";
    case 7:
      return "августа";
    case 8:
      return "сентября";
    case 9:
      return "октября";
    case 10:
      return "ноября";
    case 11:
      return "декабря";
    default:
      break;
  }
}

export default function ToolbarTop() {
  const classes = useStyles();

  const [dateNow, setDateNow] = React.useState(new Date());
  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <div className={classes.logo}>  LENTA.RU</div>
        <div className={classes.date} id="date-time">{`${dateNow.getDate()} ${getMonthName(dateNow.getMonth())}, ${dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours()}:${dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()} `}</div>
      </div>
    </div>
  );

}
