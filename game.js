Name1 = localStorage.getItem("Player1");
Name2 = localStorage.getItem("Player2");

Score1 = 0;
Score2 = 0;

document.getElementById("Name1").innerHTML = Name1+" : ";
document.getElementById("Score1").innerHTML = Score1;

document.getElementById("Name2").innerHTML = Name2+" : ";
document.getElementById("Score2").innerHTML = Score2;

function send()
{
    Num1 = document.getElementById("num1").value;
    Num2 = document.getElementById("num2").value;
    ActualAns = parseInt(Num1)  * parseInt(Num2);

    QuestionNum = "<h4>"+Num1+" X "+Num2+"</h4>";
    Input = "<br>Answer : <input type='text' id='answer'>";
    Button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    Row = QuestionNum+Input+Button;

    document.getElementById("output").innerHTML = Row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

Question = "player1";
Answer = "player2";

document.getElementById("Question").innerHTML = "Question Turn : "+Name1;
document.getElementById("Answer").innerHTML = "Answer Turn : "+Name2;

function check()
{
    InputAns = document.getElementById("answer").value;
    if (InputAns == ActualAns)
    {
        if (Answer == "player1")
        {
            Score1 = Score1 + 1;
            document.getElementById("Score1").innerHTML = Score1;
            
        }
        else
        {
            Score2 = Score2 + 1;
            document.getElementById("Score2").innerHTML = Score2;
        }
    }

    if (Question == "player1")
    {
        Question = "player2";
        document.getElementById("Question").innerHTML = "Question Turn : "+Name2;
    }
    else
    {
        Question = "player2";
        document.getElementById("Question").innerHTML = "Question Turn : "+Name1;
    }

    if (Answer == "player1")
    {
        Answer = "player2";
        document.getElementById("Answer").innerHTML = "Answer Turn : "+ Name2;
    }
    else
    {
        Answer = "player1";
        document.getElementById("Answer").innerHTML = "Answer Turn : "+Name1;
    }
    document.getElementById("output").innerHTML = "";
}