var firebaseConfig = { apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", 
authDomain: "testkwitter.firebaseapp.com",
 databaseURL: "https://testkwitter.firebaseio.com",
  projectId: "testkwitter", 
  storageBucket: "testkwitter.appspot.com", 
  messagingSenderId: "624653701634", 
  appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
