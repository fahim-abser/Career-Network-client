import { useEffect, useState } from "react";


const useGetUnreadNotNum = (email,stat,loading) => {
    const [notCount, setNotCount] = useState([]);

    useEffect(() => {
      if (email) {
        // console.log(email,stat,loading);
        const url =`http://localhost:5000/notificationCount?email=${email}&status=${stat}`
        //  console.log(url)
            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                setNotCount(data)
                
            }) 
       
      }
    }, [loading,email]);
    return notCount;
  };
  
  export default useGetUnreadNotNum;
  