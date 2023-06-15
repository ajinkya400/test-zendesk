import axios from "./axios";

const fetchTickets = async () => {
    try {
        return await axios.get('/');
    } catch(e) {
        return e;
    }
    
} 

export {
    fetchTickets
}