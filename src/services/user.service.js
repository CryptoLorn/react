import axiosServices from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: ()=> axiosServices.get(urls.users).then(value => value.data)
}