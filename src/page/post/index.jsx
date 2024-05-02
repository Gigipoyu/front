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
        axios
            .get(
                `http://localhost:3000/api/post/readOnePost?id=${post_id}`
            )
            .then((response) => {
                setPost(response.data.post);
                console.log(response);
            })
            .get(
                `http://localhost:3000/api/comment/readComment?id=${post_id}`
            )
            .then((response) => {
                setComments(response.data.comments);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

return (
    <>
    <div>Post</div>
    <PostCard    post = {post} />
    <br />
    {comments && comments.map((item) =>(
        <CommentCard 
        key = {item.id}
        comment = {item}
        /> 
    ))}
    </>
  )
}

export default Post