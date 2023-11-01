
const apiKey = 'AIzaSyD1FdYa-Uz0KlOT-JI0Hnx6gwz2vE4w564e';
const maxResults = 100;
const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&maxResults=${maxResults}`


export const fetchAPI = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Rethrow the error to be caught in the component
    }
}

export const getCommments = async (videoId) => {
    try {
        const commentURL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`
        console.log(commentURL);
        const response = await fetch(commentURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Rethrow the error to be caught in the component
    }
}

export const getSearchVideos = async (searchQuery) => {
    try {
        const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=50&key=${apiKey}`
        console.log(searchURL);
        const response = await fetch(searchURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Rethrow the error to be caught in the component
    }
}
