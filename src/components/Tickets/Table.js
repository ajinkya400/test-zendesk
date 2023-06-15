import { useContext, useState } from "react";
import TableRow from "./TableRow";
import { TicketContext } from "../../context/TicketContext";
import ReactPaginate from 'react-paginate';

const Table = () => {
    const { tickets } = useContext(TicketContext);
    const itemsPerPage = 25;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = tickets.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(tickets.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % tickets.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Status
                    </th>
                    <th>
                        Subject
                    </th>
                    <th>
                        Type
                    </th>
                    <th>
                        Priority
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    currentItems && currentItems.map((ticket) => <TableRow {...ticket} key={ticket.id} />)
                }

            </tbody>
        </table>
        <ReactPaginate
            containerClassName="pagination"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    </div>
    )
}

export default Table;
