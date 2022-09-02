import "./posts.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Users} from "../../dummyData"
import {useState, useEffect} from "react"
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"

export default function Posts({post}) {
 
const [like, setLike] = useState(post.likes.length)  
const [isLiked, setIsLiked] = useState(false)
const [user, setUser] = useState({})

useEffect(()=>{
  const fetchUsers = async () =>{
  const res = await axios.get(`http://localhost:8800/api/users/${post.userId}`)
    setUser(res.data)
}
  fetchUsers()
}, [post.userId]);
//seemed adding this dependency was not necessary?

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked)
}

  return (
    <div className="posts">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
              <img className="postProfilePic" src={user.profilePicture || "../../resources/picture/bailey.jpg"} alt="Raul"/>
              </Link>
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postPic" src={post.img || "../../resources/images/IMG_10.jpg"} alt="books"/>

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
