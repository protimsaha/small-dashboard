import React from 'react';
import BillModal from './BillModal';
import Table from './Table';

const Home = () => {
    // const [sId, setSId] = useState('')
    // const [sBill, setSBill] = useState([])


    // const searchId = (event) => {
    //     const id = event.target.value;
    //     setSId(id)
    // }


    // useEffect(() => {
    //     const url = `http://localhost:5000/billing-list/${sId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSBill([data]))

    // }, [sBill, sId])

    return (
        <>
            <div className='d-flex bg-secondary align-items-center container fs-5 justify-content-around my-3'>
                <div className='d-flex align-items-center'>
                    <p className=''>Billings</p>
                    <input className='mx-4' type="text" placeholder='Search' />
                </div>
                <div>
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Add New Bill
                    </button>

                </div>
            </div>
            <div className='container'>
                <Table ></Table>
                <BillModal></BillModal>
            </div>
        </>
    );
};

export default Home;