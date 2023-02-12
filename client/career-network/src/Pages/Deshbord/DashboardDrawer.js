import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { onlyDrawerClick } from '../../app/DashboardSlice/DashboardSlice'

function DashboardDrawer() {
    const dispatch = useDispatch()
    const navbar = [
        {name:"my dashboard",send:"/employedashboard"},
        {name:"resume",send:"/employedashboard/resumemanager"},
    ]
    return(
        <div className=''>
            <div className="">
                <div className="font-besicFont text-white">
                    <div className='h-16 flex justify-between items-center pl-6 pr-12'>
                        <h1 className='text-2xl'>Career network</h1>
                        <button onClick={()=>dispatch(onlyDrawerClick())} className='text-2xl'><RxCross1 className='sm:hidden'/></button>
                    </div>
                    <ul className="menu p-4 text-white">
                        {navbar.map((item, i)=>(
                            <li key={i} onClick={()=>dispatch(onlyDrawerClick())} className="border-b-2 hover:bg-sky-800 hover:rounded-lg duration-150 capitalize">
                                <Link to={item.send}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardDrawer