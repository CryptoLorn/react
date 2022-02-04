import axiosServices from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getByUserId: (id) => axiosServices.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}