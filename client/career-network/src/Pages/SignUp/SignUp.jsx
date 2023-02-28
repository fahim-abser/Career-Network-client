import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../others/Hooks/useToken';
import signup from '../../../src/others/images/signup.png'


const SignUp = () => {
    const { registerUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSignUp =(data) => {
        const formdata = new FormData()
        const image = data.image[0]
        registerUser(data.email, data.password)
            .then(result => {
                formdata.append("image",image)
                const user = result.user
                setUser(user);
                fetch('https://api.imgbb.com/1/upload?key=d1f3d96d8051fdcb90609fd80a5c336d',{
                    method:'POST',
                    body:formdata
                    })
                .then((res)=>res.json())
                .then((item)=> {
                    if(item){
                        const updateInfo = {
                            displayName: data?.name,
                            photoURL:item?.data?.url
                        }
                        updateUser(updateInfo)
                        .then(()=>{
                            saveUser(data.name, item?.data?.url, data.email, data.role);
                            toast('Your Account Created Successfully.')
                        })
                        .catch(error=>console.log(error))
                    }
                })
                .catch(error=>console.log(error))
            })
            .catch(error => console.log(error))
        }


   const saveUser = (name,image, email, role) => {
       const verify = false
       const user = { name,image, email, role, verify };
       fetch('http://localhost:5000/user', {
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)
       })
           .then(res => res.json())
           .then(data => {
               setCreatedUserEmail(email);
           })
   }

    const handlegoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                setUser(user);
                const userInfo = {
                    displayName: user.name
                }
                console.log(user?.photoURL)
                updateUser(userInfo)
                    .then(() => {
                        const role = "seeker";
                        saveUser(user.name, user?.photoURL, user.email, role);
                    })
                    .catch(err => console.log(err));
                toast('Your Account Created Successfully.')
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="min-h-screen w-full shadow-2xl p-10">
            <div className="flex justify-evenly items-center flex-row-reverse w-full">
                <div className="w-full gap-x-5 mx-auto">
                    <div className='w-full p-7 max-w-sm mx-auto'>
                        <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text dark:text-white">Full Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full " />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text dark:text-white">image</span></label>
                                <input type="file" {...register("image")} className="border border-slate-200" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text dark:text-white">Email</span></label>
                                <input type="email" {...register("email", {
                                    required: true
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text dark:text-white">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text dark:text-white">Role</span></label>
                                <select {...register("role")}>
                                    <option disabled selected value="">Select</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="seeker">Job Seeker</option>
                                </select>

                            </div>
                            <input className='btn  w-full mt-4' value="Sign Up" type="submit" />
                        </form>
                        <p className='mt-3'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handlegoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
                <div className="lg:block hidden w-full">
                    <img className=' h-[450px]' src={signup} alt="" />
                </div>
            </div>
        </div>

    );
};

export default SignUp;