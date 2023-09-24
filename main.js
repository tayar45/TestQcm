import qcm from "./qcm.js"
var nb=0

var score=0

var responces=[]

var next =document.getElementById("next")

var question=document.getElementById("question")

var nbQs=document.getElementById("nbQs")

var oprion1=document.querySelector("#option1 span")

var oprion2=document.querySelector("#option2 span")

var oprion3=document.querySelector("#option3 span")

var oprion4=document.querySelector("#option4 span")

var correct_option=qcm[nb].correct_option

nbQs.innerText="السؤال رقم "+(nb+1)
question.innerText= qcm[nb].question
oprion1.innerHTML=qcm[nb].options[0]
oprion2.innerHTML=qcm[nb].options[1]
oprion3.innerHTML=qcm[nb].options[2]
oprion4.innerHTML=qcm[nb].options[3]


next.onclick=()=> {
  
var radioButtons= document.getElementsByName("option")
var selectedOption = 5;

// Loop through the radio buttons to find the selected one
for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        selectedOption = i;
        break; 
    }
    
}
responces[nb]=selectedOption
if (selectedOption==correct_option) {
  score++
}

nb++

if (qcm[nb]==undefined) {
  
endQcm(score)
}
else{
correct_option=qcm[nb].correct_option
nbQs.innerText="السؤال رقم "+(nb+1)
question.innerText= qcm[nb].question
oprion1.innerHTML=qcm[nb].options[0]
oprion2.innerHTML=qcm[nb].options[1]
oprion3.innerHTML=qcm[nb].options[2]
oprion4.innerHTML=qcm[nb].options[3]
}

}




function endQcm(score) {
  
  var container=document.getElementById("card")
  var text;




if (score<10) {
  text="Sir awld l9a7ba t9ra 3la karak"
}
else{
  text="Habibi ma 3lakch"
}

container.innerHTML=`
    <div class="card-body text-center">
    <h5class="card-title"Result</h5>
    <p class="card-text">Score :${score}</p>
    <hr>
     <p class="card-text">${text}</p>
     
     <button id="replay" >Answer</button>
  </div>
`


sessionStorage.setItem("responces",JSON.stringify(responces))
sessionStorage.setItem("qcm",JSON.stringify(qcm))


var replay = document.getElementById("replay")
replay.onclick=function (){
 window.location.href="/responsesPage"
  
}

  
}





