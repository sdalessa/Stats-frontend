import "./posts.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import {useState} from "react"

export default function Posts({post}) {
 
const [like, setLike] = useState(post.like)  
const [isLiked, setIsLiked] = useState(false)

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
}

  return (
    <div className="posts">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfilePic" src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="Raul"/>
              <span className="postUsername">{Users.filter((u)=> u.id === post?.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postPic" src={post.photo} alt="books"/>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="../../resources/icons/like.png" onClick={likeHandler}  alt="like" className="likeIcon" />
              <img src="../../resources/icons/heart.png" onClick={likeHandler} alt="heart" className="likeIcon" />
              <span className="postLikeCounter">{like} people liked this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
    </div>
  )
}
