import { makeStyles } from '@material-ui/core/styles';
import img from '../../../images/k77.png'
export default makeStyles({
  media: {
    height: 100,
    paddingTop: '50%',
    backgroundColor: 'rgba(0, 0, 0,0)',
    backgroundBlendMode: 'darken',
    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
    backgroundImage: `url(${img})`,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    backgroundImage: `url(${img})`,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',

  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
   // backgroundImage: `url(${img})`,
  },
});