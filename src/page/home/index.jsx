import Post from "../../components/PostCard"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { userService } from '../../utils/userService';


const Home = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // Abonnement aux mises à jour de l'utilisateur à l'aide du service userService
    const subscription = userService.user.subscribe((x) => setUser(x));

    // Nettoyage de l'abonnement lors de la destruction du composant
    return () => subscription.unsubscribe();
}, []);

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
      { user? <Link 
    to={"/createpost"}
    className="submitButton"
    aria-label="Créer post"
  >
    Créer post
  </Link>: null}
  
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