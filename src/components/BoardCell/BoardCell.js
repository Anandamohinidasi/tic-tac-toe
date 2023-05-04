import "./BoardCell.css";

export default function BoardCell ({onClick, value}) {
    return (
        <td className="cell" onClick={onClick}>{value}</td>
    )
}