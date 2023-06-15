import { useEffect, memo, useContext } from 'react';
import { fetchTickets } from "../../services/tickets";
import Table from "./Table";
import { TicketContext } from '../../context/TicketContext';
import './tickets.css';

const fetchApi = async (setTickets) => {
    const response = await fetchTickets();
    setTickets(response.data.tickets);
}

const Tickets = () => {
    const { setTickets } = useContext(TicketContext);
    useEffect(() => {
        fetchApi(setTickets)
    }, [])
    return(
        <div className="table-container">
            <h1>Tickets</h1>
            <Table />
        </div>
    );
};

export default memo(Tickets);
