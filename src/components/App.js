import { memo, useState } from "react";
import { TicketContext } from "../context/TicketContext";
import Tickets from "./Tickets";

function App() {
  const [tickets, setTickets] = useState([]);
  const [ticketCount, setTicketCount] = useState(0);

  return (
    <div className="container">
      <TicketContext.Provider value={{
        tickets,
        setTickets,
        ticketCount,
        setTicketCount
      }}>
        <Tickets />
      </TicketContext.Provider>
    </div>
  );
}

export default memo(App);
