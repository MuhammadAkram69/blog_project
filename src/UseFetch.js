import { useState,useEffect } from "react"


const useFetch=(url)=>{
    const [Ispending,SetIsPending]=useState(true);
    const [error, SetError]=useState(null);
    const[data,Setdata]=useState(null);

useEffect(()=>{
    const abortcont=new AbortController();
    setTimeout(() => {
     fetch(url,{signal:abortcont.signal})
    .then(res=>{
     if(!res.ok){
         console.log('could not fetch the data from resurce.')
     }
     return res.json();
    })
    .then(data=>{
     console.log(data);
     Setdata(data);
     SetError(null);
     SetIsPending(false);
    })
    .catch(err=>{
        if(err.name==='AbortError'){
            console.log('Fetch aborted')
        }
        else{
            SetError(err.message);
            SetIsPending(false)
        }
     
    })
    }, 1000);
    return ()=>{
        abortcont.abort();
    }
    
 },[])
return {data,Ispending,error}
}
export default useFetch;

