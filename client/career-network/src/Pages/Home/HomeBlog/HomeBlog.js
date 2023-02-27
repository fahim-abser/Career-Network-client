import React from 'react'
import { Pagination } from 'swiper'
import { SwiperSlide,Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useTasksQuery } from '../../../app/SomeApi/taskApi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import GetLoading from '../../../components/Loading/GetLoading';

function HomeBlog() {

    const {data,isError,error,isSuccess,isLoading,isFetching}=useTasksQuery()
    if(isLoading || isFetching){
        return <div className='grid place-items-center h-80'>
            <GetLoading></GetLoading>
        </div>
    }
    if(isError){
        return <p>{error.status}</p>
    }

  return (
    <div className='relative h-full m-0 px-0 py-8 w-full bg-home'>
        <div className='text-center capitalize'>
            <h3 className='text-4xl text-sky-800 font-semibold 
            '>recent Blog artical</h3>
            <p>Fresh job related news content posted each day</p>
        </div>
        <div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className=" h-full w-full"
            >
                {isSuccess && data?.map((item)=>(
                    <SwiperSlide className='shadow-lg shadow-slate-400 rounded-br-3xl w-full h-full '>
                        <div className=''>
                            <div>
                                <img className='pt-3 w-full px-3 h-36 ' src={item?.image} alt="" />
                            </div>
                            <div className='flex flex-col justify-between p-3'>
                                <div className='flex items-center justify-start gap-6'>
                                    <div className='flex items-center justify-start gap-1'>
                                        <AiOutlineUser className='text-secondary'></AiOutlineUser>
                                        <p>{item?.name}</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-1'>
                                        <BiMessageDetail className='text-secondary'></BiMessageDetail>
                                        <p>192</p>
                                    </div>
                                </div>
                                <h4 className='text-xl text-secondary font-semibold'>{item?.title}</h4>
                                <p>{item?.post ? <span>{ item?.post.length>=150 && item?.post.slice(0,150)}</span> : item?.post}<Link className='font-semibold text-green-800' to={"/"}> see more...</Link></p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default HomeBlog