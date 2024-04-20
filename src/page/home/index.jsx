import Post from "../../components/Post"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts ] = useState()
  useEffect(() => {
    let data;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/post/readPost",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    axios
        .request(config)
        .then((response) => {
            console.log(response);
            setPosts(response.data.posts);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


  return (
    <>
    <div className="create">
      <Link
    to={"/createpost"}
    className="submitButton"
    aria-label="Créer post"
  >
    Créer post
  </Link>
  
  </div>
    <div>

      {posts && posts.map((post) => (
        <Post 
        key = {post.id}
        post= {post} />
      ))}
    </div>
    </>
  )
}

export default Home