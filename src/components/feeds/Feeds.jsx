import Share from "../share/Share"
import Posts from "../posts/Posts"
import "./feeds.css"
import {DummyPosts} from "../../dummyData"

export default function Feeds() {
  return (
    <div className="feeds">
        <div className="feedWrapper">
          <Share/>
          {DummyPosts.map((p) =>(
            <Posts key={p.id} post={p}/>  
          ))}

        </div>
    </div>
  )
}
