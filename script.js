let body = document.querySelector("body");
let display = document.querySelector("#display");
let displayItems = document.querySelectorAll(".displayitem");
let userRock = document.querySelector("#rock");
let userPaper = document.querySelector("#paper");
let userScissors = document.querySelector("#scissors");
let buttons = document.querySelectorAll("buttons");
let submit = document.getElementById("submit");
let savedChildren = [];
let count = Math.floor(Math.random() * 3 + 1);
let userLabel = document.querySelector("#userScore");
let sysLabel = document.querySelector("#sysScore");
let userScore = 0;
let sysScore = 0;
for (let i = 0; i < displayItems.length; i++) {
  savedChildren.push(displayItems[i]);
}
body.addEventListener("load", load());
submit.addEventListener("click", function clicked() {
  if (userPaper.className == "selected" || userRock.className == "selected" || userScissors.className == "selected") {
    let selected = document.querySelector(".selected");
    /*The variable count in statements below represents a random number between one and three(3 is part of this set of numbers too).
    based on this variable's value the computer will show different items(in system's section or side, whatever you wanna call it!!) every time.
    for example if count is equal to 3 the systtem will choose scissors,2 represents paper and 1 is for rock.
    (if you want to know count's value you can type a console.log() and put count between () as a parameter)
    */
    if(typeof display != undefined){
      displayItems.forEach( function (item) {
        item.remove();
      })
      count = Math.floor(Math.random() * 3 + 1);
   }
    if (count == 1) {
      display.appendChild(savedChildren[0]);
      if (selected.id == "rock") {

      } else if (selected.id == "paper") {
        userScore += 1;
        userLabel.innerHTML = `Score:${userScore}`;
      } else {
        sysScore += 1;
        sysLabel.innerHTML = `Score:${sysScore}`;
      }
    } else if (count == 2) {
      display.appendChild(savedChildren[1]);
      if (selected.id == "paper") {

      } else if (selected.id == "scissors") {
        userScore += 1;
        userLabel.innerHTML = `Score:${userScore}`;
      } else {
        sysScore += 1;
        sysLabel.innerHTML = `Score:${sysScore}`;
      }
    } else {
      display.appendChild(savedChildren[2]);
      if (selected.id == "scissors") {

      } else if (selected.id == "rock") {
        userScore += 1;
        userLabel.innerHTML = `Score:${userScore}`;
      } else {
        sysScore += 1;
        sysLabel.innerHTML = `Score:${sysScore}`;
      }
    }
    if(userScore == 5){
      alert("you won")
      userScore -= userScore;
      sysScore -= sysScore;
      sysLabel.innerHTML = `Score:${sysScore}`;
      userLabel.innerHTML = `Score:${userScore}`;
      load();
    }
    else if(sysScore == 5){
      alert("you lost!")
      userScore -= userScore;
      sysScore -= sysScore;
      sysLabel.innerHTML = `Score:${sysScore}`;
      userLabel.innerHTML = `Score:${userScore}`;
      load();
    }
  }

});
userRock.addEventListener("click", function() {
  if (userRock.className == "selected") {
    userRock.classList.remove("selected")
  } else {
    userPaper.classList.remove("selected")
    userRock.classList.add("selected")
    userScissors.classList.remove("selected")
  }

})
userPaper.addEventListener("click", function() {
  if (userPaper.className == "selected") {
    userPaper.classList.remove("selected")
  } else {
    userPaper.classList.add("selected")
    userRock.classList.remove("selected")
    userScissors.classList.remove("selected")
  }
})
userScissors.addEventListener("click", function() {
  if (userScissors.className == "selected") {
    userScissors.classList.remove("selected")
  } else {
    userScissors.classList.add("selected")
    userRock.classList.remove("selected")
    userPaper.classList.remove("selected")

  }
})
//when page gets loaded this function makes system's choice invisible until user select an item.
function load() {
   displayItems.forEach(function(item){
     item.remove();
   })
    userLabel.innerHTML = `Score:${userScore}`;
    sysLabel.innerHTML = `Score:${sysScore}`;
}
