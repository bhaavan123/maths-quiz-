player1_name=localStorage.getItem("user_name1");
player2_name=localStorage.getItem("user_name2");

player1_score=0;
player2_score=0;

question_turn="player_1";
answer_turn="player_2";

document.getElementById("player1_name").innerHTML = player1_name+ ": ";
document.getElementById("player2_name").innerHTML = player2_name+ ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_questions").innerHTML ="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML ="answer turn - "+player2_name;

function send() {
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number_1)*parseInt(number_2);
    question_word="<h4 id='word_display'>"+number1+ "x"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_checkbox'>";
    check_button="<button onclick='check()' class='btn btn-info'>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value= "";
    document.getElementById("number_2").value= "";
}

function check(){
    answer=document.getElementById("input_checkbox").value;
    
    console.log("answer in lower case - "+answer);
    if(answer_turn=="player_1"){
      player1_score=player1_score+1;
      document.getElementById("player1_score").innerHTML=player1_score;
  }
  else{
      player2_score=player2_score+1;
      document.getElementById("player2_score").innerHTML=player2_score;  
  }
  

  if(question_turn=="player_1"){
      question_turn="player_2";
      document.getElementById("player_question").innerHTML="Question turn- "+player2_name;
  }
  else{
      question_turn="player_1";
      document.getElementsById("player_question").innerHTML="Question turn- "+player1_name;
  }

  if(answer_turn=="player_1"){
      answer_turn="player_2";
      document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;
  }
  else{
      answer_turn="player_1";
      document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
  }

  document.getElementById("output").innerHTML="";
}