/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function logOut(){
    console.log("User Logging Out...");

    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log("showHomePage works");
        console.log(this.responseText);

        
      console.log(this.responseText);
    };
    xhttp.open("POST", "logout",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
  
}