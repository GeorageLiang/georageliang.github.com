$(document).ready(function(){
  $(".navbar-inverse").headroom({
    "tolerance": 20,
    "offset": 520,
    "classes": {
      "initial": "header",
      "pinned": "up",
      "unpinned": "down"
    }
  });
});