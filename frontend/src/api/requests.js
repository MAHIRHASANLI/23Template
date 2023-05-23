import {BASE_URL} from "./baseURL"
import axios from "axios"
///Get All
export const GetAll = async()=>{
    let Globaldata;
    await axios.get(`${BASE_URL}/robotics`).then(res=>{
        Globaldata = res.data
    })
    return Globaldata;
}


///Get By Id

export const GetById = async(id) =>{
    let Globaldata;
    await axios.get(`${BASE_URL}/robotics/${id}`).then(res=>{
        Globaldata = res.data
    })
    return Globaldata
}


/// Post
export const PostById = (payload)=>{
    axios.post(`${BASE_URL}/robotics`,payload)
}

//Delete

export const DeleteById =(id)=>{
    axios.delete(`${BASE_URL}/robotics/${id}`)
}