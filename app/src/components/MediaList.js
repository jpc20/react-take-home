import React from 'react'
import MediaCard from './MediaCard';

const MediaList = ({ medias }) => {
    return (
        <div>
            {medias.map((media, i) => (
                <MediaCard key={i} media={media} />
            ))}
        </div>
    )
}

export default MediaList
