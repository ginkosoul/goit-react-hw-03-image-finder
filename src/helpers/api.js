import axios from "axios";
import cleanImages from "./cleanImages";

const baseURL = 'https://pixabay.com/api/';
const params ={
    key: '35837403-e3eb495b2214d16b5d801685b',
    page: 1,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
}
const pixabay = axios.create({baseURL,params})

export async function getImages(query) {
    params.q = query;
    params.page = 1;
    try {
        const { data, status } = await pixabay({params})
        if (status === 200) {
        const {hits, totalHits} = data;
        const totalPages = Math.ceil(totalHits / params.per_page)
        const images = cleanImages(hits)
        return {images, totalPages}}
        return null;
    } catch (error) {
        throw error
    }
}

export async function loadImages(page){
    params.page = page;
    try {
        const { data, status } = await pixabay({params})
        if (status === 200) {  
        return cleanImages(data.hits)}
        return null;
    } catch (error) {
        throw error
    }
}