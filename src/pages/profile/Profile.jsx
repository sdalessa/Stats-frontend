import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightside/Rightbar"
import Feeds from "../../components/feeds/Feeds"
import "./profile.css"

export default function Profile() {
  return (
    <>

    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feeds/>
    <Rightbar/>
    </div>

</>
  )
}
