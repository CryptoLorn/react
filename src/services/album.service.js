import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getAlbumId: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getAlbumPhotos: (albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
};