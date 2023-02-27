import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Review.css"
import { EffectCoverflow, Pagination } from "swiper";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useCommentQuery } from "../../../app/SomeApi/taskApi";
import GetLoading from "../../../components/Loading/GetLoading";

export default function App() {
<<<<<<< HEAD
    const {user}=useContext(AuthContext)

    const {data:comments=[]}=useQuery({
        queryKey:[user],
        queryFn:(async()=>{
            const res = await fetch("http://localhost:5000/teamcomment")
            const data = res.json()
            return data
        })
    })
    // console.log(comments)
=======
    const {data:comments=[],isLoading,isFetching,isSuccess,isError,error}=useCommentQuery()
    if(isLoading || isFetching){
        return <div className="grid place-items-center h-80">
            <GetLoading></GetLoading>
        </div>
    }
    if(isError){
        return <p>{error.status}</p>
    }
>>>>>>> a7ab6d1d29014f0a506db0aa3049260f07986077
  return (
    <div className="relative h-full m-0 px-0 pt-14 pb-10 bg-home ">
        <div>
            <div className="text-center">
                <h2 className="text-4xl text-sky-800 font-semibold">Testimonials</h2>
                <p>Some user reviews about the website</p>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {isSuccess && comments?.map((item)=> <SwiperSlide>
                    <div className="block w-full h-full cursor-pointer px-6 bg-testimonial shadow-md hover:shadow-inner hover:shadow-slate-800 shadow-slate-400 transition-shadow duration-300 capitalize rounded-tl-3xl rounded-br-3xl">
                        <div className="flex flex-col justify-evenly h-full items-start">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-2xl font-semibold capitalize text-sky-700">{item?.title}</h2>
                                <div className="flex items-center gap-4 text-2xl">
                                    <a href={item?.facebook} target="_blank"><BsFacebook className="text-sky-800"></BsFacebook></a>
                                    <BsGithub><a href={item?.github} target="_blank"></a></BsGithub>
                                    <AiFillLinkedin className="text-sky-800"><a href={item?.linkdin} target="_blank"></a></AiFillLinkedin>
                                </div>
                            </div>
                            <p>{item?.dialog}</p>
                            <div className="flex gap-3 items-center justify-start">
                                <img className="h-10 w-10 rounded-full bg-black" src={item?.picture} alt="img" />
                                <div>
                                    <h4>{item?.name}</h4>
                                    <p className="uppercase">{item?.usertitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    </div>
  );
}
