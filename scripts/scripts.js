//java script notes

const question = [
  {
    q: "1. What is the name of Europe's highest mountain?",
    options: [
      {
        op1: "Mount Alps",
        op2: "Mount Elbrus",
        op3: "Mount Blanc",
        op4: "Mount Kazbek",
        ans: "Mount Elbrus",
      },
    ],
  },
  {
    q: "2. Who invented the internet?",
    options: [
      {
        op1: "Christopher Sholes",
        op2: "Quentin Stafford-Fraser",
        op3: "Tim Berners-Lee",
        op4: "Ralph Benjamin",
        ans: "Tim Berners-Lee",
      },
    ],
  },
  {
    q: "3. Who invented the Mobile Phone?",
    options: [
      {
        op1: "Thompson Bell",
        op2: "Jack Ben",
        op3: "John Berners-Lee",
        op4: "Martin Cooper",
        ans: "Martin Cooper",
      },
    ],
  },
];
var numberOfQuestion=3;
 var selectAns=0;
var score = 0;
var countQ = 0;
var ans;
var timeLeft = 30;
var timerId = setInterval(countdown, 1000);
var elem = document.getElementById("timer");
 
ans=setQ(countQ);


function setQ(x) {
  document.querySelector(".divQuestion").innerHTML = question[x].q;

  document.querySelector(".divOption1").innerHTML = question[x].options[0].op1;
  document.querySelector(".divOption2").innerHTML = question[x].options[0].op2;
  document.querySelector(".divOption3").innerHTML = question[x].options[0].op3;
  document.querySelector(".divOption4").innerHTML = question[x].options[0].op4;
  var ans=question[x].options[0].ans;
return ans;
}
/*function score() {}
const divNext = document.querySelector(".next");
divNext.addEventListener("click", function () {
  selectOption(divNext);
  divNext.style.background = "transparent";
  if (countQ < 3 && countQ >= -1) {
    countQ++;
    setQ(countQ);
    score();
  } else {
  }
});
const divBack = document.querySelector(".back");
divBack.addEventListener("click", function () {
  selectOption(divBack);
  divBack.style.background = "transparent";
  if (countQ > 0 && countQ <= 3) {
    if (countQ == 3) {
      countQ--;
    }

    countQ--;
    setQ(countQ);
  }
});

/*for (var i = 0; i < question.length; i++) {
  document.getElementById("para").innerHTML += question[i].options[0].ans;
   //alert(document.write(question[i].options[i].ans));
  //document.write(i);
}*/
loadFunction()
{

}
function startButton(bu) {
  /*let x=document.getElementById("textname");
  x.style.display="none";*/
  x = document.getElementById("structure");

  bu.style.display = "none";
  x.style.display = "grid";
  timeLeft=30;
 countdown();
}
function countdown() {
  
  if (timeLeft == 0) {
    elem.innerHTML = "00:00";
    
    clearTimeout(timerId);
    setcolor();
    if (selectAns==1)  {
      score++;
      alert("You are right");
    }
    else{
      alert("You are Wrong");
    }
    
    if (countQ < 2) 
    {
       countQ++;
      
      ans= setQ(countQ);
      timeLeft=30;
      timerId = setInterval(countdown, 1000);
    }
    else if(countQ == 2){
      scoreBoard();
    }
   
  }  
    
  else {
    elem.innerHTML = timeLeft;
    timeLeft--;
  }
 
}



function scoreBoard(){
 /* y=document.getElementById("structure");
  y.style.display="none";*/
  y=document.getElementById("timer");
  y.style.display="none";
  y = document.getElementById("divOption1");
  y.style.display="none";
  y = document.getElementById("divOption2");
  y.style.display="none";
  y = document.getElementById("divOption3");
  y.style.display="none";
  y = document.getElementById("divOption4");
  y.style.display="none";
  let av=((score/ numberOfQuestion)*100).toFixed(0);
  
  s=document.getElementById("qu");
  /*s.style.background=URL("C:\Users\Vaira\OneDrive\Desktop\quizproject\image-quiz\HTML-vs-CSS-vs-JavaScript-min.webp")*/
  
  if(av>60)   s.innerHTML="Well Done You Got " + av + '%';
  else if(av>30) s.innerHTML=" You got " + av + '%';
  else s.innerHTML="You got " + av + "% No Worries Try again ";
}
function setcolor(){
  y = document.getElementById("divOption1");
  y.style.color = "black";
  y.style.background = "rgb(157, 82, 157)";

  y = document.getElementById("divOption2");
  y.style.color = "black";
  y.style.background = "rgb(157, 82, 157)";
  y = document.getElementById("divOption3");
  y.style.color = "black";
  y.style.background = "rgb(157, 82, 157)";

  y = document.getElementById("divOption4");
  y.style.color = "black";
  y.style.background = "rgb(157, 82, 157)";

}
function selectOption(x) {
 setcolor();
  x.style.color = "red";
  x.style.background = "white";
  if(x.innerHTML==ans){
    selectAns=1;
  }
  else{
    selectAns=0;
  }
 timeLeft=0;
 
}
/*y = document.getElementById("next");

  y.setAttribute('disabled', '');
}
  var y = document.getElementById("structure");
  y.style.display=block;
var x = document.getElementById("start");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

document.getElementById("para").innerHTML +="the number is "+ i;
questions.res = "London";

const Questions = [{
    q: "What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]
 
},=
*/
