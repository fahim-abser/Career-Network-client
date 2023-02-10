import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const jobinfo = useLoaderData();
    const navigation = useNavigation();

    const { job_title } = jobinfo;
    const price = 35;
    console.log(jobinfo)

    if (navigation.state === "loading") {
        return <Loading></Loading>

    }
    console.log(jobinfo)
    return (
        <div className='px-10'>
            <h3 className='text-3xl font-bold text-center text-sky-900'>Payment for {job_title}</h3>
            <p className='text-xl font-bold text-center text-sky-900'>Please pay <strong>${price}</strong> for your selected item</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        jobinfo={jobinfo}
                        price={price}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;