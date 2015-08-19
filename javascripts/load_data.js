define(function(require){

  var firebase = require("firebase");

  var myFirebaseRef = new Firebase("https://trippin88.firebaseio.com/");
          myFirebaseRef.child("trips").on("value", function(snapshot) {

            var trips = snapshot.val();
            console.log("trips", trips); 

  }); //end myFirebaseRef//
}); //end define // 