import { useEffect, useState } from "react";


const useCheckApply = (email,jobID,loading) => {
    const [isApplied, setIsApplied] = useState(false);
   
    console.log(email, jobID);
    useEffect(() => {
      if (email) {
        // console.log(email)
        const url =`http://localhost:5000/appliedjob?email=${email}&_id=${jobID}`
        // console.log(url)
            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                setIsApplied(data)
                
            }) 
       
      }
    }, [loading,email]);
    return isApplied;
  };
  
  export default useCheckApply;
  