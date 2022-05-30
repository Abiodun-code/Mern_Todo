import React from 'react';
import InputGroup from '../components/InputGroup';
import RowDetail from '../components/RowDetail';
// import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState([])
    const [Form, setForm] = useState({})

    // Post New Data
    const onChangeHandler = async(Forms) =>{
        const res = await fetch('/api/users', { 
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(Forms)
        })
      
        const data = await res.json()
      
        setForm({...Form, data})
    }
    
    // Get All Data
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('/api/users')
            const data = await res.json()
            setUsers(data)
            console.log(data)

            return data
        }
        fetchData()
    }, [])

    // DeleteTodo
const deleteTodo = async (id) =>{
    await fetch(`/api/users/${id}/`, {
      method: 'DELETE',
    })
  
    setForm(Form.filter((Forms)=> Forms.id !== id))
  }

  return (
    <div className='row p-4'>
        {/* <div className='alert alert-success d-flex align-items-center' role='alert'>
            <svg className='bi flex-shrink-0 me-2' width='24' height='25' role='img' aria-label='Success:'><use xlink:href='#check-circle-fill'/></svg>
            <div>
                An example success alert with an icon
            </div>
        </div> */}
        <div className='mt-4'>
            <h2>Crud Users</h2>
        </div>
        <div className='col-12 col-lg-4'>
            <InputGroup onChangeHandler={onChangeHandler} deleteTodo={deleteTodo} />
        </div>
        <div className='col-12 col-lg-7'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Email</th>
                        <th scope='col'>Lastname</th>
                        <th scope='col'>Firstname</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <RowDetail user={user}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home