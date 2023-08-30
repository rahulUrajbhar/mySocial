import "./online.css"

export default function Online({user}) {
    console.log(user)
  return (
    <li className='rightbarFriend'>
        <div className='rightbarProfileImgContainer'>
          <img className='rightbarProfileImg' src={user.profilePicture} alt=''/>
          <span className='rightbarFriendOnline'></span>
        </div>
        <span className='rightbarFriendUserName'>{user.username}H</span>
    </li>
  )
}
