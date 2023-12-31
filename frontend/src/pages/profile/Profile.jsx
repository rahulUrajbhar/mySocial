import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className='profileCantainer'>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </>
  )
}
