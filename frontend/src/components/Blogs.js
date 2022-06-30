import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    axios({
      method : "GET",
      url : `http://localhost:5000/api/blog`,
      headers : {
        // "Authorization" : `Bearer ${window.sessionStorage.getItem('token')}`
      }
    }).then((res) => {
      if (res.data.blogs) {
        setBlogs(res.data.blogs)
        setloading(true);
      } else {
        // setClassList(res.data.data);
        // setLoading(true);
      }
    }).catch((error) => {
      console.log("this is blogs")
      // toast.error(error.response.data.error);
    });
  }, []);
  // const sendRequest = async () => {
  //   const res = await axios
  //     .get("http://localhost:5000/api/blog")
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // useEffect(() => {
  //   sendRequest().then((data) => {
  //     setloading(true);
  //     console.log("this is data", data)
  //     setBlogs(data.blogs);
  //   });

  // }, []);
  console.log(blogs);
  return (
    <div>
      {loading ?
        <div>
        {
          blogs.map((blog, index) => (
            // <h1>{`this is blog${index}`}</h1>
            <Blog
              id={blog._id}
              isUser={false}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={blog.user.name}
            />
          ))
        }
        </div>
         :
          <div>
          
          </div>
        }
    </div>
  );
};

export default Blogs;