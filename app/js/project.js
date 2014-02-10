(function(){
  var demo = {
    init: function(){
      demo.el();
    },
    el: function(){
     $("h1 a").on("click", demo.toggleNav);
    },
    toggleNav:function(evt){
     evt.preventDefault();
     $("body").toggleClass("show-navigation");
    }
  }
  demo.init();
})();