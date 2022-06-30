import React from 'react';
import BillModal from './BillModal';
import Table from './Table';

const Home = () => {


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
                <Table></Table>
                <BillModal></BillModal>

            </div>
        </>
    );
};

export default Home;