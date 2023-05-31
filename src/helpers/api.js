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

export async function getImages(query, page) {
    params.q = query;
    params.page = page;
    try {
        const { data, status } = await pixabay({params})
        if (status === 200) {
        const {hits, totalHits} = data;
        if (totalHits === 0) throw new Error('No images found')
        const totalPages = Math.ceil(totalHits / params.per_page)
        const images = cleanImages(hits)
        return {images, totalPages}
    }
        throw new Error(`Could not get images: status ${status}`)
    } catch (error) {
        throw error
    }
}