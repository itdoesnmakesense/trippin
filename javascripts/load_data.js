define(function(require){

  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");
  console.log("templates", templates);

  var myFirebaseRef = new Firebase("https://trippin88.firebaseio.com/");
          myFirebaseRef.child("trips").on("value", function(snapshot) {

            var trips = snapshot.val();
            console.log("trips", trips); 
            //This will hold the complete DOM string of trips
            var populatedTemplate = templates.tripTpl(trips);
            //insert the DOM string into the appropriate element
            $("#list-of-trips").html(populatedTemplate);

  }); //end myFirebaseRef//
}); //end define // 