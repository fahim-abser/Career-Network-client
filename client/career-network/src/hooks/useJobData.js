import { useEffect, useState } from "react";

const useJobData = (search, searchLocation, selectCategory) => {
  const [jobData, setJobData] = useState([]);
  const {loading,setLoading} = useState(false);

  useEffect(() => {
    // console.log(email)
    const url = `https://careernetwork-server.vercel.app/alljobs?keyword=${search}&category=${selectCategory}&location=${searchLocation}`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setJobData(data);
      });
  }, [loading]);
  return {jobData,setLoading,setJobData,loading};
};

export default useJobData;
