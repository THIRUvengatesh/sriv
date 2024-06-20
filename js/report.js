/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */



function loadreporttype(){
    var reporthead = document.getElementById('reportHead').value;
    console.log(reporthead);
    
    if(reporthead == 1){
        var rhead = ['---select---','Pending Issues','Closed Issues','All Issues','Issue Details','Issue Closed By','Issue Created By'];
        var list = document.getElementById('reporttype');
        list.innerHTML = '';
        rhead.forEach(function(item){
            var option = document.createElement('option');
            option.value=item;
            option.innerHTML=item;
            list.appendChild(option);
        }); 
    }else if(reporthead == 2){
        var rhead = ['---select---'];
        var list = document.getElementById('reporttype');
        list.innerHTML = '';
        rhead.forEach(function(item){
            var option = document.createElement('option');
            option.value=item;
            option.innerHTML=item;
            list.appendChild(option);
        }); 
    }
}

function checkReportsFeilds(){
    return true;
}
function getReport2(){
    
    var rh = document.getElementById('reportHead').value;
    var rt = document.getElementById('reporttype').value;
    var fda = document.getElementById('fromDate').value;
    var tda = document.getElementById('toDate').value;
   
    console.log("Creating Reports Request -reports");
    if(checkReportsFeilds()){
        
        console.log("check reports Feilds  -reports");
       
        var parms = "action=report&rh="+rh+"&rt="+rt
                +"&fda="+fda+"&tda="+tda+"&emp_id="+emp_id
                +"&role="+role;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "IssueAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          console.log(this.responseText);
          var jsonData = this.responseText;
          issues = (JSON.parse(jsonData)).issues;
            console.log("issues   id  "+issues);
            
          document.getElementById("updateissue").reset();
          alert("issue updated succesfully");
          showLogs3();
          closeissueviewcontainer();
        };
    }else{
        
    alert("Feilds must be filled out");
    }
    
}


function getReport(){
    console.log("getReport ");
    
    
    var rh = document.getElementById('reportHead').value;
    var rt = document.getElementById('reporttype').value;
    var fda = document.getElementById('fromDate').value;
    var tda = document.getElementById('toDate').value;
    
    var parms = "action=report&rh="+rh+"&rt="+rt
                +"&fda="+fda+"&tda="+tda+"&emp_id="+emp_id
                +"&role="+role;
        console.log(parms);
    
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "ReportsActions",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
        xhttp.onload = function() {
          console.log(this.responseText);
          if (xhttp.status === 200) {
            // Create a link element
            var link = document.createElement('a');
            
            // Create a blob from the binary response data
            var blob = new Blob([xhttp.response], { type: 'text/csv' });
            
            // Create a URL for the blob
            var url = window.URL.createObjectURL(blob);
            
            // Set the link's href attribute to the blob URL
            link.href = url;
            
            // Set the link's download attribute to specify the filename
            link.download = 'example.csv';
            
            // Append the link to the document
            document.body.appendChild(link);
            
            // Trigger a click on the link to start the download
            link.click();
            
            // Remove the link from the document
            document.body.removeChild(link);
            
            // Release the blob URL
            window.URL.revokeObjectURL(url);
        }

        };

    
}