import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, Button, ImageListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginRight: "1rem"
  },
  card: {
    width: "7rem",
},
  media: {
    height: "12rem",
    borderRadius: "0.5rem"
  },
});


const MediaCard = ({ media }) => {
    const classes = useStyles();

    return (
        <ImageListItem className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={media.cover_photo_url}
                        title="cover photo"
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </ImageListItem>
    )
}

export default MediaCard
