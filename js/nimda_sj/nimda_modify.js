/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function loadUser(){
    var ml = document.getElementById('uu_mail').value;
    var parms = "action=loadU&email="+ml;
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
          document.getElementById("uu_name").value=jData.name;
          document.getElementById("uu_Clevel").value=jData.role_id;
          document.getElementById("uu_cont").value=jData.mobile;
          document.getElementById("uu_userID").value=jData.user_id;
          
          var list = document.getElementById('uu_Ulevel');
          list.innerHTML = '';
    
          if(jData.role_id == "admin"){
              var option = document.createElement('option');
                option.value="l1";
                option.innerHTML = "l1";
                list.appendChild(option);
              var option2 = document.createElement('option');
                option2.value="l2";
                option2.innerHTML = "l2";
                list.appendChild(option2);
               
                
                console.log("admin");}
//          document.getElementById("uu_name").value=jData.name;
//          document.getElementById("uu_name").value=jData.name;
        };
}
function updateUser(){
    var ml = document.getElementById('uu_mail').value;
    var parms = "action=updateU&email="+ml;
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
          document.getElementById("uu_name").value=jData.name;
          document.getElementById("uu_Clevel").value=jData.role_id;
//          document.getElementById("uu_name").value=jData.name;
//          document.getElementById("uu_name").value=jData.name;
        };
}