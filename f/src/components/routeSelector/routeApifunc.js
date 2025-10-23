import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "http://10.1.92.185:8080/booking/"
    let incoming = await axios.post(baseURL, { startCity, destination })
    return incoming
}