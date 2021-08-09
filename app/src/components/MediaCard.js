import React from 'react'
import { 
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    ImageListItem,
    IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import GetAppIcon from '@material-ui/icons/GetApp';

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

    const downloadFile = (mediaUrl) => {
            fetch(mediaUrl, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'video/mp4',
            },
        })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
            new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
            'download',
            `${mediaUrl}.mp4`,
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
    }

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
                    <IconButton aria-label="link" onClick={() => navigator.clipboard.writeText(media.tracking_link)}>
                        <LinkIcon />
                    </IconButton>
                    <IconButton aria-label="download" onClick={() => downloadFile(media.download_url)}>
                        <GetAppIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </ImageListItem>
    )
}

export default MediaCard
