import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";


const BlogDetails = () => {
  
  const { id } = useParams();
  

 const {data:blog,Ispending,error}=useFetch('http://localhost:9000/blogs/'+ id);
    
    const handleClick=()=>{
      fetch('http://localhost:9000/blogs/'+ blog.id,{
        method: 'DELETE'
      }).then(()=>{
        console.log("Blog Deleted");
      })
    }


  return (

    <div className="blog-details">
       {Ispending && <div>Loading...</div>}
       {error && <div>{error}</div>}
       {blog && (
        <article>
             <h2>{blog.title}</h2>
             <p>{blog.author}</p>
             <div>{blog.body}</div>
             <button onClick={handleClick}>Delete Blog</button>
        </article>
       )}
    </div>
  );
}
 
export default BlogDetails;