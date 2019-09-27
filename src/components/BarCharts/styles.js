import { makeStyles } from '@material-ui/core/styles';

export const GenStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
    '& label': {
      textShadow: 'unset',
      fontSize: '20px',
      paddingBottom: '8px',
      color: 'black',
      fontWeight: '500'
    }
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200,
    '& ul': {
      backgroundColor: '#e7f4f5'
    }
  },
  button: {
    backgroundColor: '#07c2d0',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#07c2d0'
    }
  }
}));
