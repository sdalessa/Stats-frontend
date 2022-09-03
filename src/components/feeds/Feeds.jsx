import {useState, useEffect} from "react"
import Share from "../share/Share"
import Posts from "../posts/Posts"
import "./feeds.css"
// import {DummyPosts} from "../../dummyData"
import axios from "axios"

export default function Feeds({username}) {
const [posts, setPosts] = useState([])

useEffect(()=>{
  const fetchPosts = async () =>{

  const res = username
  ? await axios.get("http://localhost:8800/api/posts/profile/"+username)
  : await axios.get("http://localhost:8800/api/posts/timeline/62ffa26b217fc610250523a2")
    setPosts(res.data)
}
  fetchPosts()
}, [username]);

  return (
    <div className="feeds">
        <div className="feedWrapper">
          <Share/>
          {posts.map((p) =>(
            <Posts key={p._id} post={p}/>  
          ))}

        </div>
    </div>
  )
}
