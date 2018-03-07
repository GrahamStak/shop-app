import React from 'react'

function makeRows(props){
    const rows = []
    props.items.forEach(i => {
        rows.push(
            <tr>
                <td><a href={`/admin/item/update/${i.id}`}>{i.name}</a> <button onClick={() => props.confirmDelete(i)}>Delete</button></td>
                <td>{i.description}</td>
                <td>{i.price}</td>
            </tr>
        )
    });
    return rows
}

const ItemTable = props => (
  <div className='ItemTable'>
    <table>
        {props.items && makeRows(props)}
    </table>
  </div>
)

export default ItemTable
