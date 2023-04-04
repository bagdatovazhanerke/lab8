$(document).ready(function(){
     // Define the correct answers for each question
     var answers = ["2009", "JavaScript", "Cascading Style Sheets", "JavaScript", "CSS"];
     
     // Define the quiz questions and answer choices
     var questions = ["Which year was Nazarbayev University founded?",         
                      "What is the full name of the programming language 'JS'?",         
                      "What does 'CSS' stand for?",         
                      "What programming language is used for client-side scripting?",         
                      "What language is used to style web pages?"     ];
     var choice_options = [         ["2009", "2010", "2011", "2012"],
         ["JavaScript", "Java Syntax", "Joint Syntax", "Jolly Script"],
         ["Cascading Style Sheets", "Cascading Script Styles", "Cascading Syntax Sheets", "Cascading Styling Systems"],
         ["JavaScript", "Python", "PHP", "Java"],
         ["CSS", "HTML", "JavaScript", "Java"]
     ];
     
     // Generate quiz questions
     var quizBox = $("#quiz-box"); // Jquery
     for (var i = 0; i < questions.length; i++) {
         quizBox.append ("<div class='question'><p class='d'> Q" + (i+1) + ". " + questions[i] + "</p></div>");
         var questionDiv = $('.question').eq(i);
         for (var j = 0; j < choice_options[i].length; j++) {
             questionDiv.append ("<label><input type='radio' name='q" + (i+1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>");
         }
     }
     
     var countAnswers = 0;
     var reset = false;
 
     $("button").click (function (event){
         for (var i = 0; i < questions.length; i++) {
             $("input[name=q" + (i+1) + "]").each (function (index){
                 var choice = $(this).parent().text().trim(); 
                 if ($( this ).prop("checked") == true && answers[i] == choice){
                     countAnswers += 1;
                 }
             });
         }
         $("#quiz-box").append ("<h2>Result of the quiz is: " + countAnswers + "</h2>");
     });
 });
 