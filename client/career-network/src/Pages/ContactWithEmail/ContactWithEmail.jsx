import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import contact from '../../others/images/contact.jpg'

const ContactWithEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('career_network', 'career_networkdb', form.current, 'C9iSTUwF4FqvQAVVI')
            .then((result) => {
                console.log(result.text);
                toast.success('Your message send successfully')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${contact})` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='py-6 max-h-[800px] p-7 '>
                    <h2 className='text-center text-3xl mb-5  font-bold'>Contact With Email</h2>
                    <div className='flex justify-center'>
                        <form ref={form} onSubmit={sendEmail} className=' w-96'>
                            <div className='form-control gap-y-3'>
                                <input className='h-12  input input-bordered' type="text" name='name' placeholder='Your Full Name' required />
                                <input className='h-12  input input-bordered' type="email" name='email' placeholder='Your Email' required />
                                <input className='h-20  input input-bordered' type="text" name='subject' placeholder='Your Subject' required />
                                <input className='h-20  input input-bordered' type="text" name='message' placeholder='Your Message' required />
                                <input className='btn btn-success w-28 text-white flex mx-auto' type="submit" value='Send Email' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactWithEmail;