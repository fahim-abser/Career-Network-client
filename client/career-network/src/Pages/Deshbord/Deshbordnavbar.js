import React, { useContext, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider'

function Deshbordnavbar() {

    // state context
    const [menu, setMenu] = useState(true)
    const [inbox,setInbox]=useState(false)
    const [recuriter, setRecuriter]=useState(false)
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    // navbar list item 

    const navItems =<>
        <li className={`listItem ${menu ? 'text-black' : "text-white"}`}><Link to="/deshbord" className=''>deshbord</Link></li>
        <li onMouseEnter={()=>setInbox(true)} onMouseLeave={()=>setInbox(false)} className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to={"/deshbord/inbox"}>inbox</Link>
            <ul className={`${inbox?"block z-0 lg:bg-white lg:fixed ml-8 ":"hidden"}`}>
                <li className='hover:bg-sky-600 pl-4 '>interview</li>
                <li className='hover:bg-sky-600 pl-4 '>jobs</li>
                <li className='hover:bg-sky-600 pl-4 '>offer</li>
                <li className='hover:bg-sky-600 pl-4 '>candidate email</li>
                <li className='hover:bg-sky-600 pl-4 '>internal comment</li>
                <li className='hover:bg-sky-600 pl-4 '>candidate alert</li>
                <li className='hover:bg-sky-600 pl-4 '>task</li>
            </ul>
        </li>
        <li onMouseEnter={()=>setRecuriter(true)} onMouseLeave={()=>setRecuriter(false)} className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to={'/deshbord/recruitment'}>recruitment</Link>
            <ul className={`${recuriter ? "block lg:bg-white lg:fixed ml-8 " : "hidden"}`}>
                <Link to="/deshbord/recruitment/createjob"><li className='hover:bg-sky-600 pl-4 '>add a job</li></Link>
                <li className='hover:bg-sky-600 pl-4 '>converstation</li>
                <li className='hover:bg-sky-600 pl-4 '>task</li>
            </ul>
        </li>
        <li className={`listItem ${menu? "text-black": "text-white"}`}><Link to={"/deshbord/employees"}>employees</Link></li>
        <li className={`listItem ${menu? "text-black": "text-white"}`}><Link to={"/deshbord/reports"}>reports</Link></li>
        <li className={`listItem ${menu? "text-black": "text-white"}`}><Link to={"/deshbord/setting"}>setting</Link></li>
        {user?.uid ? <>
            <li className={`listItem ${menu ? "text-black" : "text-white"}`}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
                <li className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to='/login'>Login</Link></li>
            </>
        }
    </>
    // navbar start hare
    return (
      <div className='relative h-16'>
            <div className={`navbar max-w-[1250px] mx-auto backdrop-blur-3xl z-20 fixed top-0 lg:bg-transparent lg:text-black ${menu?'bg-transparent text-black duration-200 ease-in':'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4`}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="">
                        <label onClick={()=>setMenu(!menu)} className="btn btn-ghost lg:hidden">
                            <i className=''>{menu ? <FiMenu className='text-3xl'></FiMenu> : <RxCross1 className='text-3xl '></RxCross1>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex capitalize">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className={`w-full lg:hidden z-10 top-16 fixed bg-sky-700 backdrop-blur-3xl duration-1000 ${menu?'h-0 duration-1000 hidden':" pb-10 duration-1000 block bg-sky-700" }`}>
                    <ul className='text-lg capitalize'>
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Deshbordnavbar