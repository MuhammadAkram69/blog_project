import {useState,useEffect} from 'react'
import BlogList from './Bloglist';
import useFetch from './UseFetch';

const Home = () => {
    
    const [name,SetName]= useState('akram');
    const [age,Setage]= useState(24);
    // const [Ispending,SetIsPending]=useState(true);
    // const [error, SetError]=useState(null);
    const {data:blogs,Ispending,error} =useFetch('http://localhost:8000/blogs')

    const handleclick=() =>{
        SetName('Rafay')
        Setage(22);
  }

    // const[blogs,Setblog]=useState(null);
        // [{title:'King of north', body:'lorem ipsum...', author:'dario',id:1},
        // {title:'Politics of Pak', body:'lorem ipsum...', author:'Iqbal',id:2},
        // {title:'The unconcious Mind', body:'lorem ipsum...', author:'luigin',id:3}]);

    // const deletehandle=(id)=>{
    //    const newblogs= blogs.filter(blog=>blog.id!==id);
    //    Setblog(newblogs);
    // }
    
    // useEffect(()=>{
    //    setTimeout(() => {
    //     fetch( 'http://localhost:8000/blogs')
    //    .then(res=>{
    //     if(!res.ok){
    //         console.log('could not fetch the data from resurce.')
    //     }
    //     return res.json();
    //    })
    //    .then(data=>{
    //     console.log(data);
    //     Setblog(data);
    //     SetError(null);
    //     SetIsPending(false);
    //    })
    //    .catch(err=>{
    //     SetError(err.message);
    //     SetIsPending(false)
    //    })
    //    }, 1000);
       
    // },[])

    return ( 
        <div className="home">
            <h1>This is home page !</h1>
            <p>{name} is {age} years old!</p>
            <button onClick={handleclick}>Click me</button>
            {error && <div>{error}</div>}
            {Ispending && <div>Loading...</div>}
            {/* deletehandle={deletehandle} to be added in next line for deletion puspose */}
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='dario')} title="Dario's Blogs" deletehandle={deletehandle}/> */}
        </div>

     ); 
}

export default Home;