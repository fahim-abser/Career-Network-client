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
        <li className={`px-3  dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to={'/deshbord'}>Recruiter</Link></li>
        <div onMouseEnter={()=>setInbox(true)} onMouseLeave={()=>setInbox(false)} className=' mx-1'>
            <li  className={`px-3 dark:text-white lg:pl-3 pl-10  lg:py-1 py-2  lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>inbox</Link></li>
            <ul className={`font-besicFont h-0 lg:absolute block ${inbox?" h-fit animate lg:pl-3 pl-16 duration-1000 bg-slate-200 text-black lg:p-3":"hidden "}`}>
                <Link><li className='py-1'>interview</li></Link>
                <Link><li className='py-1'>jobs</li></Link>
                <Link><li className='py-1'>offer</li></Link>
                <Link><li className='py-1'>candidate email</li></Link>
                <Link><li className='py-1'>internal comment</li></Link>
                <Link><li className='py-1'>condidate alert</li></Link>
            </ul>
        </div>
        <div onMouseEnter={()=>setRecuriter(true)} onMouseLeave={()=>setRecuriter(false)} className='mx-1 ' >
            <li className={`px-3 dark:text-white lg:pl-3 pl-10  lg:py-1 py-2  lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to={"/dashboard/recruitment"}>Recruitment</Link></li>
            <ul className={`font-besicFont ${recuriter?"lg:absolute block animate lg:pl-3 pl-16 duration-1000 bg-slate-200 text-black lg:p-3":"hidden "}`}>
                <Link><li className='py-1'>recruit</li></Link>
                <Link><li className='py-1'>conversation</li></Link>
                <Link><li className='py-1'>task</li></Link>
                <Link to={"/dashboard/recruitment/createjob"}><li className='py-1'>add jobs</li></Link>
            </ul>
        </div>
        <li className={`px-3 dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link>Employee</Link></li>
        <li className={`px-3 dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu? "text-black": "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to={"/deshbord"}>Dashboard</Link></li>
        {user?.uid ? <>
            <li className={`px-3 dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
                <li className={`px-3 dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/login'>Login</Link></li>
                <li className={`px-3 dark:text-white lg:pl-3 pl-10 mx-1 lg:py-1 py-2 lg:text-black ${menu ? "text-black" : "text-white"} font-besicFont hover:bg-sky-900 lg:hover:bg-transparent`}><Link to='/signup'>Signup</Link></li>

            </>
        }
    </>
    // navbar start hare
    return (

      <div className='relative h-16 '>
            <div className={`navbar max-w-[1440px] mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:bg-transparent lg:text-black ${menu?'bg-transparent text-black duration-200 ease-in':'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4 dark:text-white `}>

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
                        <ul className="text-xl font-medium flex capitalize justify-center items-center">
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