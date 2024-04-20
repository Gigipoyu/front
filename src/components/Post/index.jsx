import "./post.css"
import elapsed from "../../utils/elapsed"
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";



const Post = ({post}) => {

  const createdAt = '2024-04-15T12:30:45'


let timeAgo = elapsed(createdAt);
  return (
    <div className="card mb-3" >
    <div className="card-header" >
        <div className="header-left">
            <div className="header-profile"><img src="profile.png" alt="profile" /></div>
            <div className="header-category">
              <p>
              catégorie
              </p>
              </div>
            <div className="header-date"><p>{timeAgo} </p></div>
        </div>
        <div className="header-right">
          <button type="button" className="btn btn-primary">voir</button>
          </div>
    </div>
    <div className="card-body">
        <div className="body-left">
      <h6 className="card-title">Secondary card title</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="body-right"></div>
    </div>
    <div className="card-footer" >
        <div className="card-footer-like">
        <AiTwotoneLike />
          <p></p>
          <AiTwotoneDislike />

        </div>
        <div className="card-footer-comment">
        <FaRegCommentAlt />

          <p></p>
        </div>
    </div>
  </div>
  )
}

export default Post