/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("changePasswordForm");
    const message = document.getElementById("message");
   

    form.addEventListener("submit", function(event) {
        event.preventDefault();
         message.style.color = "green";

        const currentPassword = document.getElementById("currentPassword").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            message.style.color = "red";
            message.textContent = "New passwords do not match!";
            
            return;
        }

        // Here you can add your password change logic
        // For demonstration purposes, I'm just showing a success message
        var parms = "action=chps&cps="+currentPassword+"&nps="+newPassword;
            
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "UserAct",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        message.textContent = "Password changed successfully!";
         xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
        alert(this.responseText);
    };
    });
});
