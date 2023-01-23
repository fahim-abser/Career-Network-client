import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()
    const {logIn, googleSignIn, githubSignIn} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleLogin = data =>{
        logIn(data.email, data.password)
        .then(result =>{
            const user = result.user
            console.log(user);
            if(user?.uid){
                navigate('/')
            }
        })
        .catch(error =>console.log(error))
    }

    const handlegoogle = () =>{
        googleSignIn(googleProvider)
        .then(result=>{
            
        })
        .catch(error =>console.log(error))
    }

    const handleGithub = () =>{
        githubSignIn(githubProvider)
        .then(result=>{
            
        })
        .catch(error =>console.log(error))
    }



    return (
        <div className='h-[600px] flex justify-center'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2 className="text-3xl font-bold text-center">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn  w-full mt-4' value="Log In" type="submit" />
                </form>
                <div className=''>
                    <button onClick={handlegoogle} className='btn btn-outline w-full my-7'><FaGoogle  className='text-2xl mx-4 text-blue-500'></FaGoogle> CONTINUE WITH GOOGLE</button>
                    <button onClick={handleGithub} className='btn bg-black w-full'><FaGithubSquare className='text-2xl mx-4'></FaGithubSquare> CONTINUE WITH Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;