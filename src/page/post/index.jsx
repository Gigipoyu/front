import "./post.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard";
import CommentCard from "../../components/CommentCard" 

const Post = () => {
    const{post_id} = useParams() ; 
    const [post,setPost] = useState(null) ;
    const[comments,setComments] = useState(null) ;
    const[userId,setUserId] = useState(null) ;

    useEffect(() => {
        const actualUser = JSON.parse(localStorage.getItem("user"));
        if (actualUser && actualUser !== undefined) {
            setUserId(actualUser.userId);
        }

    }, []);
    useEffect(() => {
          
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3000/api/post/readOnePost?id=${post_id}`,
            headers: { 
              'Content-Type': 'application/json'
            },

          };
          
          axios.request(config)
          .then((response) => {
            setPost(response.data.post)
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    useEffect(() => {
          
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/api/comment/readComment?id=${post_id}`,
          headers: { 
            'Content-Type': 'application/json'
          },

        };
        
        axios.request(config)
        .then((response) => {
          setComments(response.data.comments)
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

return (
    <div>
    <div>Post</div>

      {userId? <Link to={"/createcomment"}
    className="submitButton"
    aria-label="Créer comment"
  >
    Créer comment
  </Link>: null}

    {post? <PostCard post = {post}/> : null }

    <br />

    {comments && comments.map((comment) => (
        <CommentCard
        key = {comment.id}
        comment = {comment}/>
      ))}
    </div>
  )
}

export default Post