import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  console.log("console running before");
  const { id } = useParams();
  console.log("console running after");
  // const history= useHistory();

 const {data:blog,Ispending,error}=useFetch('http://localhost:8000/blogs/'+ id);
    
    const handleClick=()=>{
      fetch('http://localhost:8000/blogs/'+ blog.id,{
        method: 'DELETE'
      }).then(()=>{
        // history.push('/');
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