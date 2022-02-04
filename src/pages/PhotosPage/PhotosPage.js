import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumService} from "../../services/album.service";

const PhotosPage = () => {
    const {state: {id}} = useLocation();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getAlbumPhotos(id).then(value => setPhotos([...value]));

    }, [id]);

    return (
        <div>
            {
                photos.map(photo => (
                    <div key={photo.id}>
                        <div>{photo.id}</div>
                        <div>{photo.title}</div>
                        <img src={`${photo.thumbnailUrl}`} alt={photo.id}/>
                    </div>
                ))
            }
        </div>
    );
};

export default PhotosPage;