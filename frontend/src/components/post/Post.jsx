import { MoreVert } from "@mui/icons-material"
import "./post.css"
import {Users} from '../../dummyData'
import React, { useState } from 'react';

export default function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isliked,setIsLiked] = useState(false)
const likeHandler=()=>{
  setLike(isliked ? like-1 : like+1)
  setIsLiked(!isliked)
}

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="PostDetails">
            <img className="postProfileImg" src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="Post Profile Img" />
            <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
            <span className="postPostedAt">{post.date}</span>
          </div>
          <MoreVert />
        </div>
        <div className="postCenter">
          <div className="postDiscription">{post?.desc}</div>
          <img className="PostImg" src={post?.photo} alt="Post img" />
        </div>
        <div className="postBottum">
          <div className="postLikes">
            <img className="postLikeIcon" onClick={likeHandler} src="/assets/like.png" alt="thumb like" />
            <img className="postLikeIcon" onClick={likeHandler} src="/assets/heart.png" alt="heart" />
            <span className="postLikesCounter">{like} People liked it</span>
          </div>
          <div className="postCommentsCounter">{post.comment} Comments</div>
        </div>
      </div>
    </div>
  )
}
