import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Loading.css'
import UpdateModal from './UpdateModal';


const Table = ({ sBill }) => {
    const [bills, setBills] = useState([])
    const [bill, setBill] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(data => {
                setBills(data)
            })
    }, [bills])

    const newArray = bills.reverse()
    console.log(newArray)

    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/delete-billing/${id}`)
            .then(res => console.log(res))
    }

    return (
        <div >
            <table class="table table-secondary table-hover">
                <thead>
                    <tr>
                        <th>Billing ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th className='ms-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map(bill =>

                        <tr key={bill._id}>
                            <th>{bill._id}</th>
                            <td>{bill.name}</td>
                            <td>{bill.email}</td>
                            <td>{bill.phone}</td>
                            <td>$ {bill.amount}</td>
                            <td>
                                <div>
                                    <button onClick={() => setBill(bill)} type="button" class="btn btn-some" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteItem(bill._id)} className='btn mx-2 btn-some'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            {bill && <UpdateModal bill={bill}></UpdateModal>}
        </div>
    );
};

export default Table;