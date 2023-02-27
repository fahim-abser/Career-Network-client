import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import GetLoading from '../../../components/Loading/GetLoading';
import CheckOut from './CheckOut';
const stripePromise = loadStripe('pk_test_51MZcj2HtXaK7NZJf1EVqhwbpTPeXjDpDcIBCnU7403d5Pp7lgNWBpqsd8jQUj3OTm24mVqD2aCFpAvuPSyaGvqW700fgsACTio');
console.log(stripePromise)
const Payment = () => {
    const jobinfo = useLoaderData();
    const navigation = useNavigation();

    const { job_title } = jobinfo;
    const price = 35;
    // console.log(jobinfo)

    if (navigation.state === "loading") {
        return <GetLoading></GetLoading>

    }
    // console.log(jobinfo)
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