import React from 'react';
// import {connect} from 'react-redux';

import {addPhoto, deletePhoto} from '../../Js/actions/galleryActions';

import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';

import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    margin: 20
  },
  media: {
    height: 200
  },
  icon: {
    color: 'black'
  },
  cardInfos: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  addPhoto: {
    display: 'flex'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: '5px 0',
    width: theme.spacing(7),
    height: '80%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    border: '1px solid grey',
    borderRadius: '5px'
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
}));

function UserPhotos() {
  const classes = useStyles();

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className={classes.inputs}>
        <div className={classes.search}>
          <div>
            <SearchIcon className={classes.searchIcon} />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.addPhoto}>
          <InputBase
            placeholder='Add new picture…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'Add new picture' }}
          />
          <div>
            <Button>
              {' '}
              <AddBoxIcon />
            </Button>
          </div>
        </div>
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image='https://source.unsplash.com/2ShvY8Lf6l0/800x599'
            title='Contemplative Reptile'
          />
          <CardContent className={classes.cardInfos}>
            <Typography gutterBottom variant='h5' component='h2'>
              Picture 1
            </Typography>
            <CardActions>
              <Button>
                <VisibilityIcon className={classes.icon} />
              </Button>
              <Button>
                <DeleteIcon className={classes.icon} />
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default UserPhotos;
