

$(document).ready(function(){
    $("#hide").click(function(){



      console.log("HEY");
        $(".adding-form").fadeToggle();
    });
    $("#show").click(function(){
        $("p").show();
    });


});

$(document).click(function(e) {

  // check that your clicked
  // element has no id=info

  if( e.target.id != 'hide-form' && $("#hide-form").is("hidden")) {
    console.log("Hide Form");
    $("#hide-form").fadeOut();
  }
});
