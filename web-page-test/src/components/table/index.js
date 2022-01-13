import { useNavigate } from 'react-router-dom';
import './index.css'

function Table({ content, headers, initial }) {
    const nav = useNavigate()

    return <div className="table-container">
        <table className="table">
            <thead className="table-headers">
                <tr>
                    <th className="table-header">#</th>
                    {headers.map((header, index) => <th key={`header-${index}`} className="table-header">{header.name}</th>)}
                </tr>
            </thead>

            <tbody>
                {content.map((row, index) => (
                    <tr key={`row-${index}`} className="table-row" onClick={() => nav(`/${row.station_id}`)}>
                        <td className="table-cell">{initial + (index + 1)}</td>
                        {headers.map((header, indexCell) => <td key={`row-${index}-cell-${indexCell}`} className="table-cell">{row[header.key]}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Table;
