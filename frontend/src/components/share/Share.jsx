import { EmojiEmotions, Label, PermMediaSharp, Room } from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareContainer">
            <div className='shareTop'>
                <img className='shareProfileImg' src='/assets/person/1.jpeg' alt='profileImage'/>
                <input type="text" className='shareProfileText' placeholder="What's in your mind" />
            </div>
            <hr className='shareProfileHr'/>
            <div className='shareBottum'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMediaSharp htmlColor='tomato' className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className='shareOption'>
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <Room htmlColor='green' className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
