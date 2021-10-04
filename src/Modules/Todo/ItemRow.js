import React from 'react';

import moment from 'moment'
import StatusTag from '../../Components/StatusTag';

function ItemRow(props) {
    return (
        <tr>
            <td>
                <input
                    onChange={props.handleComplete}
                    data-id={props.item.id}
                    checked={props.item.status === '3'}
                    type="checkbox"
                />
            </td>
            <td><span className="tag">{moment(props.item.date).format('D/M/Y hh:mm a')} </span></td>
            <td className={props.item.status === '3' ? 'strike' : ''}>{props.item.name}</td>
            <td><StatusTag status={props.item.status} /></td>
            <td>
                <button className="btn btn-block" onClick={() => props.handleEdit(props.item)}>
                    <i className="" style={{ color: 'olivedrab' }}></i>
                </button>
                <button className="btn btn-block">
                    <span
                        onClick={props.handleEdit}
                        data-id={props.item.id}
                        role="img"
                        className="is-pulled-right"
                        aria-label="Edit"
                    >&#x270E;</span></button>

            </td>

            <td>
                <button className="btn btn-block" onClick={() => props.handleEdit(props.item)}>
                    <i className="" style={{ color: 'olivedrab' }}></i>
                </button>
                <button className="btn btn-block">
                    <span
                        onClick={props.handleRemove}
                        data-id={props.item.id}
                        role="img"
                        className="is-pulled-right"
                        aria-label="Remove"
                    >&#10060;</span></button>

            </td>

        </tr>
    );
}

export default ItemRow;