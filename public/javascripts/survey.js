var surveyArray = [
    "I'm a morning person.",
    "I'm always punctual and on time.",
    "I prefer to stay in and chill on a Friday night.",
    "Rush Hour 2 is my favorite movie.",
    "WCW was better than WWF.",
    "Rootbeer is disgusting.",
    "I only read YA novel series set in a dystopian future.",
    "Game of Thrones is the best TV show ever made.",
    "N*SYNC is better than Backstreet Boys.",
    "I love watching The Bachelor / Bachelorette."

];

function appendQuestions(arr) {
  var qNum = 1;
  for (i = 0; i < arr.length; i++) {
    var id = "#textQ" + qNum;
    $(id).text(arr[i]);
    console.log(qNum + ". " + arr[i]);
    console.log(id);
    qNum++;
  };
};

appendQuestions(surveyArray);


// function to loop through questions array and append questions to the form
/*
function showQuestions(arr) {
  var qNum = 1;
    for (var i = 0; i < arr.length; i++) {
        var singleQ = $("<div>");
        var label = "<label for 'q" + qNum + "'><span id='textQ'></span></label><br>";
        var range = "<span>Strongly Disagree<input type='range' class='custom-range w-100' min='1' max='5' step='1' id=q" + qNum + ">Strongly Agree</span><br><br><hr>"
        singleQ.addClass("form-group survey");
        $(".survey-container").append(singleQ);
        singleQ.html(label);
        singleQ.html(range);
        $(".textQ").text(arr[i]);
        console.log(label);
        console.log(range);
        console.log(qNum + ". " + arr[i]);
        qNum++;
        
    };
};


showQuestions(surveyArray);
*/

//on click event to create new friend object and POST to API/friends
$("#submit").on("click", function (event) {
    event.preventDefault();
    validateForm();

    var newFriend = {
      name: $("#userName").val().trim(),
      image: $("#userPic").val().trim(),
      results: [
        parseInt($("#q1").val()),
        parseInt($("#q2").val()),
        parseInt($("#q3").val()),
        parseInt($("#q4").val()),
        parseInt($("#q5").val()),
        parseInt($("#q6").val()),
        parseInt($("#q7").val()),
        parseInt($("#q8").val()),
        parseInt($("#q9").val()),
        parseInt($("#q10").val()),
      ],
      score: 0
    };

    for (var i = 0; i < newFriend.results.length; i++) {
      newFriend.score += newFriend.results[i];
    }

    console.log(newFriend);

    $.post("/api/friends", newFriend)
      .then(function (data) {
        console.log("add.html", data);
        console.log("Adding friend...");
      });
  });

  //form validation logic
  function validateForm() {
    var x = document.forms["survey-form"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

/*





      <div class="form-group survey">
        <label for="q1">I'm a morning person.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q1">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q2"></label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q2">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q3">WCW was better than WWF.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q3">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q4">Game Of Thrones is the best television show ever made.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q4">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q5">I only read YA novel series that are set in a dystopian future.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q5">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q6">Rootbeer is disgusting.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q6">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q7">Question 7 Lorem ipsum dolor sit amet consectetur adipisicing elit.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q7">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q8">Question 8 Lorem ipsum dolor sit amet consectetur adipisicing elit.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q8">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q9">Question 9 Lorem ipsum dolor sit amet consectetur adipisicing elit.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q9">
          Strongly Agree</span><br><br>
      </div>
      <hr>
      <div class="form-group survey">
        <label for="q10">Question 10 Lorem ipsum dolor sit amet consectetur adipisicing elit.</label><br>
        <span>Strongly Disgree
          <input type="range" class="custom-range w-50" min="1" max="5" step="1" id="q10">
          Strongly Agree</span><br><br>
      </div>
      <br><br>

*/