import { useEffect, useState } from "react";


const useCheckSaved = (email,jobID,loading) => {
    const [isSaved, setIsSaved] = useState(false);
   
    console.log(email, jobID);
    useEffect(() => {
      if (email) {
        // console.log(email)
        const url =`http://localhost:5000/savedjob?email=${email}&_id=${jobID}`
        // console.log(url)
            fetch(url)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                setIsSaved(data)
                
            }) 
       
      }
    }, [loading,email]);
    return isSaved;
  };
  
  export default useCheckSaved;
  