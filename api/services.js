import axios from "axios";

const API_URL = 'https://api-colombia.com/api/v1'

//Get info colombbia
export const getColombiaInfo = async () => {
    const responsse = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data
}

//Get info regiones de colombbia
export const getRegionesColombiaInfo = async () => {
    const responsse = await axios.get(`${API_URL}/Region`)
    return response.data
}

//Get info colombbia
export const getRegionColombiaInfo = async id => {
    const responsse = await axios.get(`${API_URL}/Region/${id}`)
    return response.data
}