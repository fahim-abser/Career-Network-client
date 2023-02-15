import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PostArticle = () => {
    const navigate=useNavigate();
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const post = form.post.value;
        const imageData = e.target.image.files[0]
        formData.append('image',imageData)

        fetch('https://api.imgbb.com/1/upload?key=d1f3d96d8051fdcb90609fd80a5c336d',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                console.log(data)
                const article={
                    name,
                    title,
                    post,
                    image:data?.data?.url
                };
                const url= 'http://localhost:5000/articles'
                fetch(url,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(article)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged){
                        console.log(data)
                        toast.success('Article Posted Succesfully')
                        navigate('/article')
                    }
                })
            }
            
        })

    }
    return (
        <div className='m-10'>
            <div className='bg-slate-50 shadow rounded-xl'>
                <div className='text-3xl text-center font-bold mt-3 text-amber-700'>
                    Submit an Article
                </div>
                <form onSubmit={HandleSubmit}>
                    <div className=''>
                        <div className='grid lg:flex gap-2 m-5'>
                            <div className="form-control w-full  mt-5 mx-auto">
                                <label htmlFor='name' className="label">
                                    <span className="label-text text-2xl">What is your name?</span>
                                </label>
                                <input type="text" id='name' name='name' placeholder="Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full mt-5 mb-5 mx-auto">
                                <label htmlFor='title' className="label">
                                    <span className="label-text text-2xl">Post Title</span>
                                </label>
                                <input type="text" id='title' name='title' placeholder="Post Title" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3'>
                                <div className="form-control w-96 mx-auto lg:mt-10">
                                    <label className="label">
                                        <span className="label-text text-2xl">Pick a file</span>
                                    </label>
                                    <input type="file" name='image' className="file-input file-input-bordered w-full " required/>
                                </div>
                            <div className="form-control col-span-2 mt-5 lg:mt-0 w-full mb-5 mx-auto">
                                <label className='text-2xl mb-2' htmlFor="post">Your Post</label>
                                <textarea className=' input input-bordered w-full h-40' placeholder=' Write Your Post' name="post" id="post" rows="50" required></textarea>
                            </div>
                        </div>

                        <div className='text-center'>
                            <button className="btn btn-success hover:bg-green-200 btn-wide my-5 text-black font-bold">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostArticle;