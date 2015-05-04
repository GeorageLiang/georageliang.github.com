/**
 * Created by George on 2015/5/4.
 */
KISSY.ready(function(S){


  KISSY.use('gallery/musicPlayer/2.0/index', function (S, MusicPlayer) {
    musicPlayer = new MusicPlayer({
      auto:true, //自动播放 默认不播放.
      mode:'random', //如果几首歌想随机播放,设置为 random, 默认为order.
      musicList:[{"name":"quiet", "path":"http://shop.cngame.com/res/2007Tuesday134750.mp3"}],
      volume:0.8
    });

  });

});