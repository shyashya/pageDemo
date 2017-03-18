$(document).ready(function(){

  var playlist = [{
      title:"xtzgg",
      artist:"Miaow",
      mp3:"http://html.kissneck.net/songs/xtzgg.mp3"},
      {
          title:"cef",
          artist:"Miaow",
          mp3:"http://html.kissneck.net/songs/cef.mp3"}

  ];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    supplied: "ogv, m4v, oga, mp3",

  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);

})
