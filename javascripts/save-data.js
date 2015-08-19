define(function(require){
  var $ = require("jquery");
  var visited = false;

  $("#visited").click(function(){
    visited = true;
  });
  $("#wish-List").click(function(){
    visited = true;
  });

$("#addButtonLocation").click(function() {

  var newLocation = {
    location: $("#addLocation").val(),
    location_type: $("#addLocationType").val() || "city",
    visited: visited
  };


$.ajax({
  url:"https://trippin88.firebaseio.com/trips.json",
  method: "POST",
  data: JSON.stringify(newLocation)
})
.done(function(newData) {
  console.log("newData",newData)
})
.fail(function(xhr, status, error) {
  // body...
});

});
}); // end button