/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function createTicket(){
    
   
    console.log("Creating ctrateTicket");
//    if(checkIssueFeilds()){
    if(true){
        
//        console.log("checkIssueFeilds  Call Log");
        var formData = new FormData(tickCreFro);
        var files =  document.getElementById('attachmentID');
        if (files.files.length === 0) {
                alert('Please select a file.');
                return;
            }
        formData.append("parameterName", "parameterValue");
        // output as an object
        var fd = Object.fromEntries(formData);
        formData.append("action","create");
        var parms0 = "action=create";
        var parms = "action=create&dccbName="+fd.dccBank+"&district="+fd.district
                    +"&pacsCode="+fd.paccs+"&category="+fd.category
                    +"&subcategory="+fd.subcategory+"&title="+fd.title+"&filename="+fd.filename
                    +"&ticketDescreption="+fd.ticketDescreption+"&file="+files.files[0];
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
            if (xhttp.status === 200) {
                console.log(this.responseText);
                alert("Tickect created succesfully 1 ");

                console.log(this.responseText);
                var jsonData = this.responseText;
                if(jsonData != "invalidS"){
                var tickets = (JSON.parse(jsonData)).tickets_details;
                  var table = document.getElementById("ticketTable");
                  var tbody = table.querySelector("tbody");
                  tbody.innerHTML = "";
                  for(var i = 0;i<tickets.length ; i++){
                      let row_2 = document.createElement('tr');
                      row_2.setAttribute("id",tickets[i].id);
                      row_2.setAttribute("class","row-tic");
                      row_2.setAttribute("onclick","vTic("+tickets[i].id+")");
                      let row_2_data_1 = document.createElement('td');
                      row_2_data_1.innerHTML = i+1;
                      let row_2_data_2 = document.createElement('td');
                      row_2_data_2.innerHTML = tickets[i].id;
                      let row_2_data_3 = document.createElement('td');
                      row_2_data_3.innerHTML = tickets[i].district;
                      let row_2_data_4 = document.createElement('td');
                      row_2_data_4.innerHTML = tickets[i].title;
                      let row_2_data_5 = document.createElement('td');
                      row_2_data_5.innerHTML = tickets[i].created;
                      let row_2_data_6 = document.createElement('td');
                      row_2_data_6.innerHTML = "open";
                      let row_2_data_7 = document.createElement('td');
                      row_2_data_7.innerHTML = tickets[i].level;
                      let row_2_data_8 = document.createElement('td');
                      row_2_data_8.setAttribute("class","view-tic");
                      row_2_data_8.innerHTML = "view";
                      let row_2_data_51 = document.createElement('td');
                      row_2_data_51.innerHTML = tickets[i].date+"_"+tickets[i].time;

                      row_2.appendChild(row_2_data_1);
                      row_2.appendChild(row_2_data_2);
                      row_2.appendChild(row_2_data_3);
                      row_2.appendChild(row_2_data_4);
                      row_2.appendChild(row_2_data_5);
                      row_2.appendChild(row_2_data_51);
                      row_2.appendChild(row_2_data_6);
                      row_2.appendChild(row_2_data_7);
                      row_2.appendChild(row_2_data_8);

                      tbody.appendChild(row_2);

                  }
            }else if (xhttp.status === 500){
                document.getElementById("home_menu").innerHTML=this.responseText;
            }
        }else{
            alert("Session Invalid Login Again"); 
        }
        
    };
    
    }else{
        
    alert("Feilds must be filled out");
    }
    
}


function createTickectFun(){
            var formD = new FormData(tickCreFro);
        var fd = Object.fromEntries(formD);
            const fileInput = document.getElementById('attachmentID');
//            const fileNmae = document.getElementById('fileName').value;
            const file = fileInput.files[0];
            if(fd.dccBank !='' && fd.district !='' && fd.paccs != '' && fd.title != '' && fd.category != '' && fd.subcategory != '' ){
               
                console.log("overlay");
                const formData = new FormData();
                formData.append('file', file);
                formData.append('action', "create");
                formData.append('dccbName', fd.dccBank);
                formData.append('district', fd.district);
                formData.append('pacsCode', fd.paccs);
                formData.append('title', fd.title);
                formData.append('category', fd.category);
                formData.append('subcategory', fd.subcategory);
                formData.append('ticketDescreption', fd.ticketDescreption);
                console.log(formData);
                 document.getElementById("overlay").style.display = "block";


                fetch('TicketAction', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {

                    alert("Tickect created succesfully "+data.tickets_details[0].id);
                    document.getElementById("tickCreFro").reset();
                    shyowD(data);
                    countt(data);
                    const imageUrl = data.fileUrl;
                    console.log(data);
    //                const imageDisplay = document.getElementById('imageDisplay');
    //                imageDisplay.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
    //                
    //                const fileDisplay = document.getElementById('fileDisplay');
    //                fileDisplay.innerHTML = `<p>File uploaded: <a href="${imageUrl}" target="_blank">${file.name}</a></p>`;
                });
//                off();
                document.getElementById("overlay").style.display = "none";
            }else(alert("All feild must Filled"));
}
function countt(jsonData){
    var ticket_count = jsonData.tickets_counts;
    document.getElementById("totel_tick").innerHTML = ticket_count.totel;
    document.getElementById("open_tick").innerHTML = ticket_count.open;
    document.getElementById("closed_tick").innerHTML = ticket_count.closed;
    document.getElementById("head_1").innerHTML = "Opened ("+ticket_count.open+")";
    document.getElementById("head_2").innerHTML = "Closed ("+ticket_count.closed+")";
//    document.getElementById("head_3").innerHTML = ticket_count.totel;
}

function shyowD(jsonData){
    var tickets = jsonData.tickets_details;
//    var tickets = (JSON.parse(jsonData)).tickets_details;
    var table = document.getElementById("ticketTable");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    for(var i = 0;i<tickets.length ; i++){
        let row_2 = document.createElement('tr');
        row_2.setAttribute("id",tickets[i].id);
        row_2.setAttribute("class","row-tic");
        row_2.setAttribute("onclick","vTic("+tickets[i].id+")");
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = i+1;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = tickets[i].id;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = tickets[i].district;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = tickets[i].title;
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.innerHTML = tickets[i].created;
        let row_2_data_6 = document.createElement('td');
        row_2_data_6.innerHTML = "open";
        let row_2_data_7 = document.createElement('td');
        row_2_data_7.innerHTML = tickets[i].level;
        let row_2_data_8 = document.createElement('td');
        row_2_data_8.setAttribute("class","view-tic");
        row_2_data_8.innerHTML = "view";
        let row_2_data_51 = document.createElement('td');
        row_2_data_51.innerHTML = tickets[i].date+"_"+tickets[i].time;

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_51);
        row_2.appendChild(row_2_data_6);
        row_2.appendChild(row_2_data_7);
        row_2.appendChild(row_2_data_8);

        tbody.appendChild(row_2);

    }
}



function loaddist(){
    
        var parms = "action=load&mod=dist&dc="+document.getElementById('dccBankNameInput').value;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
          console.log(this.responseText);
          console.log(this.responseText);
          var jsonData = this.responseText;
          var d = (JSON.parse(jsonData)).dist_details;
          var list = document.getElementById('disNames');
          list.innerHTML='';
          d.forEach(function(item){
            
                    var option = document.createElement('option');
                    option.value=item.dist;
                    console.log(item);
                    list.appendChild(option);
                
            });
        };

}

function loadpac(){
    
        var parms = "action=load&mod=pacs&dc="+document.getElementById('dccBankNameInput').value+"&di="+document.getElementById('districtinput').value;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
          console.log(this.responseText);
          console.log(this.responseText);
          var jsonData = this.responseText;
          var d = (JSON.parse(jsonData)).pacs_details;
          var list = document.getElementById('paccslist');
          list.innerHTML='';
          d.forEach(function(item){
            
                    var paclist = document.createElement('option');
                    paclist.value=item.pacs;
                    console.log(item);
                    list.appendChild(paclist);
                
            });
        };

}
function loadSub(){
    
        var parms = "action=loadSub&cata="+document.getElementById('categoryInput').value;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
          console.log(this.responseText);
          console.log(this.responseText);
          var jsonData = this.responseText;
          var d = (JSON.parse(jsonData)).subC;
          var list = document.getElementById('subCatag');
          list.innerHTML='';
          list.value='';
          d.forEach(function(item){
            
                    var option = document.createElement('option');
                    option.value=item.opt;
                    console.log(item);
                    list.appendChild(option);
                
            });
        };

}

function checkticketFeilds(){
    var valid = true;
    
    
        var formData = new FormData(tickCreFro);
        // output as an object
        var fd = Object.fromEntries(formData);
        if((fd.user_role == "admin" || fd.user_role == "l1" || fd.user_role == "l2") && checkMailData()){valid = false;}
        else if((fd.user_role == "pacs" && checkMailData()) &&(fd.user_dccb == null || fd.user_district == null || fd.user_pacs == null)){valid = false;}
        else if((fd.user_role == "dccb" && checkMailData()) &&(fd.user_dccb == null || fd.user_district == null)){valid = false;}
        
        
        
    return valid;
}

 async function uploadFile() {
    let formData = new FormData(tickCreFro); 
    formData.append("file", attachmentID.files[0]);
    await fetch('TicketAction', {
      method: "POST", 
      body: formData
    }); 
    alert('The file upload with Ajax and Java was a success!');
  }
  
  function setFileName() {
            // Get the value of the file input
            var fileName = document.getElementById("attachmentID").value;
            // Extract the filename from the file input value
            var cleanFileName = fileName.split("\\").pop();
            // Set the value of the hidden input field to the filename
            document.getElementById("filename").value = cleanFileName;
        }
        
function doValidateDCCB() {
  if (is_valid_datalist_value('dccBankNameList', document.getElementById('dccBankNameInput').value)) {
      loaddist();
  } else {
    alert("Invalid DCCB Name");
    document.getElementById('dccBankNameInput').value='';
  }
}        
function doValidateDis() {
  if (is_valid_datalist_value('disNames', document.getElementById('districtinput').value)) {
      loadpac();
  } else {
    alert("Invalid Dist Name");
    document.getElementById('districtinput').value='';
  }
}       
function doValidatePac() {
  if (is_valid_datalist_value('paccslist', document.getElementById('paccs').value)) {
      
  } else {
    alert("Invalid pacs Name");
    document.getElementById('paccs').value='';
  }
}

function is_valid_datalist_value(idDataList, inputValue) {
  var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
  if (option != null) {
    return option.value.length > 0;
  }
  return false;
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}