import axios from 'axios';
import React, { createContext, useState } from 'react';
// import Loading from './Loading';

export const PayContext = createContext(0)

const BillModal = () => {
    const [amounts, setAmounts] = useState(0)
    // const [loading, setLoading] = useState(true)

    const a = amounts

    const defineAmount = (event) => {
        const amount = event.target.value;
        setAmounts(amount)
    }


    const payBill = (event) => {
        const bill = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            amount: amounts
        }
        axios.post('http://localhost:5000/billing-list', bill)
            .then(res => console.log(res))
        event.target.reset()
        // console.log('done')

    }


    return (
        <PayContext.Provider value={a}>
            <div>
                <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="staticBackdropLabel">Pay Your Bill Now!</h5>

                            </div>
                            <form onSubmit={payBill} class="modal-body fs-5 d-flex flex-column">
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
                                <input onChange={defineAmount} name='bill' type="number" required placeholder='$ 0' />
                                <input class="btn btn-success w-50 mx-auto my-3" type="submit" value="Pay Bill" />
                            </form>
                            <div class="modal-footer">
                                <button type="button" class="btn mx-auto btn-danger" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PayContext.Provider>
    );
};

export default BillModal;
