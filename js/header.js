/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function prof(){
     document.getElementById("prof_u").style.display = "flex" ;
    
}
//object.addEventListener("prof_u", "p_h()");
function p_h(){
    console.log("hide");
//     document.getElementById("prof_u").style.display = "none";
}

document.addEventListener("load", function() {
    const logoutLink = document.getElementById("logout");

    logoutLink.addEventListener("click", function(event) {
//        event.preventDefault();
        // Add your logout functionality here
        alert("Logged out successfully");
    });
});
function lout(){
    const parentElement = document.getElementById("visualArea");
    const childElements = parentElement.querySelectorAll(".vsa_ch");
    childElements.forEach(function(child) {
        child.style.display = "none";
       
    });
    document.getElementById("settings_menu").style.display = "block";
    document.getElementById("ch_ps").style.display = "block";
    
}

