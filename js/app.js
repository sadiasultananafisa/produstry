$(function(){
    $(".btn_toggler").click(function () {
        let logo = $("nav .navlogo");
        let navMenu = $("#mycusNav ul");
        logo.toggleClass("activeLogo");
        navMenu.toggleClass("activemenu");
      });
}
)