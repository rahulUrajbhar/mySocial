import Online from '../online/Online'
import './rightbar.css'
import {Users} from "../../dummyData"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <img className='rightbarBirthdayGiftIcon' src='/assets/gift.png' alt='Gift img' />
        <span className='birthdayText'>
          <b>Pola Faster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img className='rightbarAdImg' src='/assets/ad.png' alt=''/>
      <h4 className='rightbarTitle'>Online Friends</h4>
      <ul className='rightbarFriendList'>
          {Users?.map(u=>(
            <Online key={u.id} user={u}/>
            ))}
      </ul>
    </div>
  )
}
