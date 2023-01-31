import React from 'react'
import { toast } from 'react-hot-toast'

function AlluserModal({addValueInModal,setAddValueInModal,refetch}) { 
    const deleteUser = (data) =>{
        fetch(`http://localhost:5000/deleteUser?id=${data}`,{
            method:'DELETE',
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                refetch()
                toast.success("delete successfully")
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg capitalize">are you sure this user deleted</h3>
                <div className="modal-action">
                <label onClick={()=>setAddValueInModal(null)} htmlFor="my-modal" className="btn">cancle</label>
                <label onClick={()=>deleteUser(addValueInModal)} htmlFor="my-modal" className="btn">Delete</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlluserModal