import React from 'react';
import { useDispatch , useSelector, shallowEqual} from 'react-redux';

import { addPhoto, deletePhoto } from '../../Js/actions/galleryActions';

import { fade, makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  InputBase
} from '@material-ui/core';

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
  const dispatch = useDispatch();
  const photos = useSelector(
    state => ({
      photos: state.photos.photos,
    }),
    shallowEqual
  );

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
              <AddBoxIcon onClick={() => dispatch(addPhoto())} />
            </Button>
          </div>
        </div>
      </div>
      <Card 
      className={classes.root}
      photos={photos}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={photos.link}
            title='Contemplative Reptile'
          />
          <CardContent className={classes.cardInfos}>
            <Typography gutterBottom variant='h5' component='h2'>
              {photos.title}
            </Typography>
            <CardActions>
              {/* <Button>
                <VisibilityIcon className={classes.icon} />
              </Button> */}
              {/* <Button>
                <DeleteIcon className={classes.icon} />
              </Button> */}
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default UserPhotos;
