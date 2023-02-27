import { useEffect, useState } from "react";


const useGetNotifications = (email) => {
    const [notInfos, setNotInfos] = useState([]);

    useEffect(() => {
      if (email) {
        // console.log(email)
        const url =`http://localhost:5000/notifications?email=${email}`
        //  console.log(url)
            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                setNotInfos(data)
                
            }) 
       
      }
    }, [email]);
    return notInfos;
  };
  
  export default useGetNotifications;
  