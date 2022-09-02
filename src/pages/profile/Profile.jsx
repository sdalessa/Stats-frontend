import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightside/Rightbar"
import Feeds from "../../components/feeds/Feeds"
import "./profile.css"

export default function Profile() {
  return (
    <>

    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="../../resources/picture/raul.jpg" alt="" className="profileCoverImg" />
            <img src="../../resources/picture/raul.jpg" alt="" className="profileUserImg" />
            </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Users Name</h4>
            <span className="profileInfoDesc">Hello Hello Hello</span>
        </div>
        </div>
        <div className="profileRightBottom">
    <Feeds username="Derick"/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
</>
  )
}
