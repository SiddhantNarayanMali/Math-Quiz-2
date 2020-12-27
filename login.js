function adduser()
{
    Player1 = document.getElementById("Login1").value;
    Player2 = document.getElementById("Login2").value;

    localStorage.setItem("Player1", Player1);
    localStorage.setItem("Player2", Player2);


    window.location = "game.html";
}