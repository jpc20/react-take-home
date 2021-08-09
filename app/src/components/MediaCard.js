import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: "35%",
  },
  media: {
    height: "12rem",
  },
});


const MediaCard = ({ media }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
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
    )
}

export default MediaCard
