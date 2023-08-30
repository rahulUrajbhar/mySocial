import { Chat, GroupAdd, Notifications, Search } from "@mui/icons-material"
import "./topbar.css"


export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Social Chat</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search fontSize="medium" className="topbarIconSearch"/>
            <input placeholder="Search" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                <GroupAdd className="topbarIconGroup"/>
                <div className="topbarBadges">
                  <span className="topbarIconBadge">1</span>
                </div>
              </div>
              <div className="topbarIconItem">
                <Chat className="topbarIconChat"/>
                <div className="topbarBadges">
                  <span className="topbarIconBadge">1</span>
                </div>
              </div>
              <div className="topbarIconItem">
                <Notifications className="topbarIconNofy"/>
                <div className="topbarBadges">
                 <span className="topbarIconBadge">1</span>
                </div>
              </div>
          </div>
          <img className="topbarImg" src="../assets/person/1.jpeg" alt="topbarImg"/>
        </div>
    </div>
  )
}
