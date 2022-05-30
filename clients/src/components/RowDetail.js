import React from 'react'

const RowDetail = ({user, deleteTodo}) => {
  return (
    <tr key={user.id}>
        <th>{user.Email}</th>
        <td>{user.Lastname}</td>
        <td>{user.Firstname}</td>
        <td>{user.Age}</td>
        <td className='gap-action'>
            <span className='badge bg-info'>
                <a href='/id' className='text-white'>
                    <i className='fas fa-edit'></i>
                </a>
            </span>
            <span className='badge bg-danger' onClick={()=>deleteTodo(user.id)}>
                <i className='fas fa-trash-alt'></i>
            </span>
        </td>
    </tr>
  )
}

export default RowDetail