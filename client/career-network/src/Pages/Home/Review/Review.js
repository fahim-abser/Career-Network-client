import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Review.css"
import { EffectCoverflow, Pagination } from "swiper";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Context/AuthProvider";

export default function App() {
    const {user}=useContext(AuthContext)

    const {data:comments=[]}=useQuery({
        queryKey:[user],
        queryFn:(async()=>{
            const res = await fetch("http://localhost:5000/teamcomment")
            const data = res.json()
            return data
        })
    })
    console.log(comments)
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
                {comments?.length && comments?.map((item)=> <SwiperSlide>
                    <div className="block w-full h-full  px-6 bg-testimonial shadow-md hover:shadow-inner hover:shadow-slate-800 shadow-slate-400 transition-shadow duration-300 capitalize rounded-tl-3xl rounded-br-3xl">
                        <div className="flex flex-col justify-evenly h-full items-start">
                            <div className="flex justify-between items-center w-full">
                                <h2 className="text-2xl font-semibold capitalize text-sky-700">awesome design</h2>
                                <div className="flex items-center gap-4 text-2xl">
                                    <BsFacebook className="text-sky-800"></BsFacebook>
                                    <BsGithub></BsGithub>
                                    <AiFillLinkedin className="text-sky-800"></AiFillLinkedin>
                                </div>
                            </div>
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                            <div className="flex gap-3 items-center justify-start">
                                <img className="h-10 w-10 rounded-full bg-black" src="" alt="img" />
                                <div>
                                    <h4>abdul al noman</h4>
                                    <p> <span className="uppercase">mern</span> stack developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
                <SwiperSlide>
                    <div className="block w-full h-full bg-sky-700 px-6">
                        <h2>hello world</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="block w-full h-full bg-sky-700 px-6">
                        <h2>hello world</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}
