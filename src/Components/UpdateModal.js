import axios from 'axios';
import React from 'react';

const UpdateModal = ({ bill }) => {
    const { _id } = bill

    const editBill = (event) => {
        const updatedBill = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            amount: event.target.bill.value,
        }
        axios.put(`http://localhost:5000/update-billing/${_id}`, updatedBill)
            .then(res => console.log(res))
    }


    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={editBill} class="modal-body fs-5 d-flex flex-column">
                                <label htmlFor="">
                                    Your Name
                                </label>
                                <input name='name' type="text" required />
                                <label htmlFor="">
                                    Your Email
                                </label>
                                <input name='email' type="text" required />
                                <label htmlFor="">
                                    Your Phone
                                </label>
                                <input name='phone' type="text" required />
                                <label htmlFor="">
                                    Your Bill Amount
                                </label>
                                <input name='bill' type="number" required placeholder='$ 0' />
                                <input class="btn btn-success w-50 mx-auto my-3" type="submit" value="Pay Bill" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;