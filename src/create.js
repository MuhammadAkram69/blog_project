import React, { useState } from "react";
import { URL } from "./axios";
// import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [ispending, setIspending] = useState('false');
  //   const history= useHistory();


  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIspending(true);

    fetch(`${URL}blogs/blogs`,
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log("New blog added!")
        setIspending(false);
        //   history.push('/');n
      })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="iqbal">Iqbal</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button>Adding Blog....</button>}
      </form>
    </div>
  );
}

export default Create;