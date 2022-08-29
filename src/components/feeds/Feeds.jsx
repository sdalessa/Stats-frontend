import Share from "../share/Share"
import Posts from "../posts/Posts"
import "./feeds.css"

export default function Feeds() {
  return (
    <div className="feeds">
        <div className="feedWrapper">
          <Share/>
          <Posts/>
          <Posts/>  
        </div>
    </div>
  )
}
