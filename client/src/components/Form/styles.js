import { makeStyles } from '@material-ui/core/styles';
import img from '../../images/k77.png'
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    backgroundImage: img 
  },
  paper: {
    padding: theme.spacing(2),
    backgroundImage: `url(${img})`,
    //display: 'flex',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundImage: img 
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    backgroundImage: img 
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundImage: img 
    //color:"#7921B1"
  },
}));