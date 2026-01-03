const reels = [
  {
    username: "neha.chill",
    isLike: false,
    likeCount: 89,
    commentCount: 5,
    caption: "Chill evening 🌆",
    video: "./vedio/1.mp4",
    userProfile: "user3.jpg",
    shareCount: 3,
    isFollow: false
  },
  {
    username: "travelwith_kunal",
    isLike: true,
    likeCount: 980,
    commentCount: 110,
    caption: "Travel diaries ✈️",
    video: "./vedio/2.mp4",
    userProfile: "user4.jpg",
    shareCount: 64,
    isFollow: true
  },
  {
    username: "streetstyle_riya",
    isLike: false,
    likeCount: 210,
    commentCount: 18,
    caption: "Street fashion 🔥",
    video: "./vedio/3.mp4",
    userProfile: "user5.jpg",
    shareCount: 12,
    isFollow: false
  },
  {
    username: "danceby_isha",
    isLike: true,
    likeCount: 760,
    commentCount: 54,
    caption: "Dance reel 💃",
   video: "./vedio/4.mp4",
    userProfile: "user6.jpg",
    shareCount: 41,
    isFollow: true
  },
  {
    username: "coffee.with.aman",
    isLike: false,
    likeCount: 65,
    commentCount: 4,
    caption: "Coffee time ☕",
   video: "./vedio/5.mp4",
    userProfile: "user7.jpg",
    shareCount: 2,
    isFollow: false
  },
  {
    username: "glowup_mehak",
    isLike: true,
    likeCount: 1340,
    commentCount: 98,
    caption: "Glow up ✨",
   video: "./vedio/6.mp4",
    userProfile: "user8.jpg",
    shareCount: 77,
    isFollow: true
  },
  {
    username: "codewith_rahul",
    isLike: false,
    likeCount: 178,
    commentCount: 11,
    caption: "Coding life 💻",
   video: "./vedio/7.mp4",
    userProfile: "user9.jpg",
    shareCount: 9,
    isFollow: false
  },
  {
    username: "gymlife_saurav",
    isLike: true,
    likeCount: 520,
    commentCount: 36,
    caption: "Gym progress 🏋️",
   video: "./vedio/1.mp4",
    userProfile: "user10.jpg",
    shareCount: 28,
    isFollow: true
  },
  {
    username: "nightthoughts_ananya",
    isLike: false,
    likeCount: 92,
    commentCount: 6,
    caption: "Late night thoughts 🌙",
   video: "./vedio/2.mp4",
    userProfile: "user11.jpg",
    shareCount: 4,
    isFollow: false
  },
  {
    username: "makeupby_pooja",
    isLike: true,
    likeCount: 870,
    commentCount: 72,
    caption: "Makeup transition 💄",
  video: "./vedio/6.mp4",
    userProfile: "user12.jpg",
    shareCount: 49,
    isFollow: true
  },
  {
    username: "naturelover_vikas",
    isLike: false,
    likeCount: 144,
    commentCount: 9,
    caption: "Nature love 🌿",
    video: "./vedio/5.mp4",
    userProfile: "user13.jpg",
    shareCount: 6,
    isFollow: false
  },
  {
    username: "dailywith_sneha",
    isLike: true,
    likeCount: 660,
    commentCount: 44,
    caption: "Daily routine 🕒",
    video: "./vedio/4.mp4",
    userProfile: "user14.jpg",
    shareCount: 33,
    isFollow: true
  }
];
var allReels = document.querySelector('.all-reels')

function allReelsData(){
  var sum = ''
reels.forEach(function (elem,inx) {
    sum = sum + `<div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userProfile}"
                alt="">
              <h4>${elem.username}</h4>
              <button id="${inx}" class="follow-btn">${elem.isFollow?'Unfollow':'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id="${inx}" class="like">
              <h4 class="like-icon icon">${elem.isLike?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})
allReels.innerHTML = sum
};
allReelsData();
allReels.addEventListener('click',function(dets){
  if(reels[dets.target.id].isLike !== true){
reels[dets.target.id].likeCount++
  reels[dets.target.id].isLike = true
  }else{
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLike = false
  }
  if(reels[dets.target.id].isFollow !== true){
    reels[dets.target.id].isFollow = true
      }else{
        reels[dets.target.id].isFollow = false
      }
 
 allReelsData()
})