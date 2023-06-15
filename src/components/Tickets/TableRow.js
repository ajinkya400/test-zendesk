const TableRow = ({ status, subject, requester }) => {
    return(
        <tr>
            <td>
                {status}
            </td>
            <td>
                {subject}
            </td>
            <td>
                Type
            </td>
            <td>
                Priority
            </td>
        </tr>
    )
}

export default TableRow;
