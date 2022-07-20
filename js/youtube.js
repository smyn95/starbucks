 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
  // <div id="player"></div> #을 붙이면 안된다 api가 자동으로 찾아주기 때문
   new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {//영상을 재생하기 위한 여러가지 변수들
      autoplay:true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events:{
      onReady: function(event){ //onReady 라는 메소드에 event 매개변수를 추가한다.
        event.target.mute()// 음소거
      }
    }
   });
 }