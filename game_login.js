function add_user(){
    player_1=document.getElementById("user_name1").value;
    player_2=document.getElementById("user_name2").value;

    localStorage.setItem("user_name1",player_1);
    localStorage.setItem("user_name2",player_2);

    window.location="game_page.html";
}