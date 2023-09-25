import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID AnolweewbxETd3cCl6p9lT4xEn0Ubwe3hnDK4aC6AgE'
        },
        params: {
            query: term
        }
    })
    
    return response.data.results
}

export default searchImages