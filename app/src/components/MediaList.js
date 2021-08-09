import React from 'react'
import MediaCard from './MediaCard';
import { ImageList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap'
  },
  media: {
    height: "12rem",
  },
});

const MediaList = ({ medias }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.gridList} cols={2.5}>
            {medias.map((media, i) => (
                <MediaCard key={i} media={media} />
            ))}
            </ImageList>
        </div>
    )
}

export default MediaList
