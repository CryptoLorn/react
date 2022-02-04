import {useEffect, useState} from "react";
import {Outlet, useParams, Link} from "react-router-dom";

import {albumService} from "../../services/album.service";
import "./AlbumsPage.css";

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAlbumId(id).then(value => setAlbums([...value]));
    }, [id]);

    return (
        <div className={'albums_body'}>
            {
                albums.map(album => <div key={album.id}>
                    {album.id} {album.title}
                    <Link to={`${album.id.toString()}/photos`} state={album}>
                        <button>Photos</button>
                    </Link>
                </div>)
            }
            <div className={'photos_details'}><Outlet/></div>
        </div>
    );
};

export default AlbumsPage;