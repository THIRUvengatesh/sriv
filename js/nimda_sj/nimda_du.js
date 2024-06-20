/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function loadU(){
    var m = document.getElementById('ud_mail').value;
    console.log(m);
    var parms = "action=loadU&email="+m;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          var jData = (JSON.parse(this.responseText)).user[0];
          console.log(jData);
//          issues = (JSON.parse(jsonData)).issues;
          document.getElementById("ud_name").value=jData.name;
          document.getElementById("ud_Clevel").value=jData.role_id;
          document.getElementById("ud_cont").value=jData.mobile;
          document.getElementById("ud_userID").value=jData.user_id;
//          document.getElementById("uu_name").value=jData.name;
//          document.getElementById("uu_name").value=jData.name;
        };
}
function deleU(){
    var m = document.getElementById('ud_mail').value;
    console.log(m);
    var parms = "action=loadU&email="+m;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          var jData = (JSON.parse(this.responseText)).user[0];
          console.log(jData);
//          issues = (JSON.parse(jsonData)).issues;
          document.getElementById("ud_name").value=jData.name;
          document.getElementById("ud_Clevel").value=jData.role_id;
//          document.getElementById("uu_name").value=jData.name;
//          document.getElementById("uu_name").value=jData.name;
        };
}