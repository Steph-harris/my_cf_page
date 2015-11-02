var myObjects = [ { title: "First Project", pic: "http://4.bp.blogspot.com/-Xsbd1jB28S0/VMuL2jwhUWI/AAAAAAAAEDc/kaFm7dhh6vo/s1600/work%2Bin%2Bprogress.png" }, { title: "Second Project", pic: "data:image/jpeg;base64,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" }, { title: "Third Project", pic: "http://www.1492colonialegroup.com/wp-content/uploads/2015/02/social-is-work-in-progress.png" }, { title: "Fourth Project", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS7rNBzYfFi_bJETyn07b15MCm8zTJfs3XySvC27axXAwHQuK" } ];
$(document).ready(function(){
  //all my code goes here
  $("#usermessage").css("background-color", "silver");
  $("#usermessage").on("keyup", function(){
    console.log("keyup works");
    var charCount = $("#usermessage").val().length;
      console.log(charCount);
    $("#char-count").html(charCount);
      if (charCount > 50) { $("#char-count").css("color", "red");
    } else {$("#char-count").css("color", "white")};
  });   
  $("#submit").on("click", function() {
    console.log("clicked")
    var comment = $("#usermessage").val();
      comment = comment.toUpperCase();
      console.log(comment)
      $("#visible-comment").html(comment);
      return false;
  }); 
  var rows = $(".my-row");
    console.log(rows)
    for(var i=0; i<rows.length; ++i) {
      if (i%2===0) {
        $(rows[i]).css("background-color", "#337AB7");
      };
    };
  for(var i=0; i<myObjects.length; ++i) {
    $("#" + i ).css("background-image", "url(" + myObjects[i].pic + ")");
  };
  $(".image").mouseenter( function() {
    console.log(myObjects[this.id].title);
    $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myObjects[this.id].title + "</p>");
  }).mouseleave( function() {
   $("p.info").html("");
  });
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(39.8312504,-75.0092525,17),
     zoom:10
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      animation: google.maps.Animation.DROP,
      map: map,
      title: 'Click to zoom'
    }); 
    google.maps.event.addListener(marker,'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });
  };
  google.maps.event.addDomListener(window, 'load', initialize);
}) //closed doc read. no code below here
 


