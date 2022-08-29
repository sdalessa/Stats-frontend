import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightside/Rightbar"
import Feeds from "../../components/feeds/Feeds"
import "./home.css"

export default function Home() {
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
