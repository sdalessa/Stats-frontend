import "./posts.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Posts() {
  return (
    <div className="posts">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfilePic" src="../../resources/users/raul.jpg" alt="Raul"/>
              <span className="postUsername">Giovanni Doe</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">My first post :)</span>
            <img className="postPic" src="../../resources/images/IMG_0308.jpg" alt="books"/>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="../../resources/icons/like.png" alt="like" className="likeIcon" />
              <img src="../../resources/icons/heart.png" alt="heart" className="likeIcon" />
              <span className="postLikeCounter">12 people liked this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">4 comments</span>
            </div>
          </div>
        </div>
    </div>
  )
}
