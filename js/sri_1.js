/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
/*
$(function() {
console.log(2 + 3);
showHomePage();
})();
 * 
 */

function showLogs(){
    document.getElementById('home_menu_list').innerHTML = '';
    console.log("initial showLogs loading");
    let table = document.createElement('table');
        table.setAttribute("id", "issue_table");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    
    let row_0 = document.createElement('tr');
        let row_0_data_1 = document.createElement('th');
        row_0_data_1.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_1" onkeyup="filterLog(\'filter_input_log_1\',0)" placeholder="Search for ID.." title="Type in a ID">';
        let row_0_data_2 = document.createElement('th');
        row_0_data_2.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_2" onkeyup="filterLog(\'filter_input_log_2\',1)" placeholder="Search for Date.." title="Type in a Date">';
        let row_0_data_21 = document.createElement('th');
        row_0_data_21.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_3" onkeyup="filterLog(\'filter_input_log_3\',2)" placeholder="Search for Date.." title="Type in a Date">';
        let row_0_data_3 = document.createElement('th');
        row_0_data_3.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_4" onkeyup="filterLog(\'filter_input_log_4\',3)" placeholder="Search for Pacs.." title="Type in a Pacs">';
        let row_0_data_4 = document.createElement('th');
        row_0_data_4.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_5" onkeyup="filterLog(\'filter_input_log_5\',4)" placeholder="Search for issue_dis.." title="Type in a issue_dis">';
        let row_0_data_5 = document.createElement('th');
        row_0_data_5.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_6" onkeyup="filterLog(\'filter_input_log_6\',5)" placeholder="Search for status.." title="Type in a status">';
        let row_0_data_6 = document.createElement('th');
        row_0_data_6.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_7" onkeyup="filterLog(\'filter_input_log_7\',6)" placeholder="Search for module.." title="Type in a module">';
        let row_0_data_7 = document.createElement('th');
        row_0_data_7.innerHTML = '<input type="text" class="filter_input" id="filter_input_log_8" onkeyup="filterLog(\'filter_input_log_8\',7)" placeholder="Search for module.." title="Type in a module">';
        
        row_0.appendChild(row_0_data_1);
        row_0.appendChild(row_0_data_2);
        row_0.appendChild(row_0_data_21);
        row_0.appendChild(row_0_data_3);
        row_0.appendChild(row_0_data_4);
        row_0.appendChild(row_0_data_5);
        row_0.appendChild(row_0_data_6);
        row_0.appendChild(row_0_data_7);
        thead.appendChild(row_0);
    
    let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = 'issue_id.';
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = 'Date';
        let heading_21 = document.createElement('th');
        heading_21.innerHTML = 'District';
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = 'Pacs';
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = 'issue_dis';
        let heading_5 = document.createElement('th');
        heading_5.innerHTML = 'status';
        let heading_6 = document.createElement('th');
        heading_6.innerHTML = 'module';
        let heading_7 = document.createElement('th');
        heading_7.innerHTML = 'Priority';
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_21);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    thead.appendChild(row_1);
    
        
    for(var i = 0;i<issues.length ; i++){
        
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = issues[i].issue_id;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = issues[i].logdate;
        let row_2_data_21 = document.createElement('td');
        row_2_data_21.innerHTML = issues[i].districts;
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = issues[i].paccs;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = issues[i].issue;
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.innerHTML = issues[i].status;
        let row_2_data_6 = document.createElement('td');
        row_2_data_6.innerHTML = issues[i].module;
        let row_2_data_7 = document.createElement('td');
        row_2_data_7.innerHTML = issues[i].priority;
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_21);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        row_2.appendChild(row_2_data_7);
        if(role == "role3"){
            row_2.setAttribute("onclick","expandissue("+i+")" );
        }
        tbody.appendChild(row_2);
        
    }
    
    
document.getElementById('home_menu_list').appendChild(table);
    
}

function filterLog(id,j) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(id);
    filter = input.value.toUpperCase();
    table = document.getElementById("issue_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}
//
//function showHomePage(){
//    show1();
//}
//function showIssuePage(){
//    show21();
//    showLogs();
//    if(role == "role3"){loadAssigntoParameter();}
//    console.log("venki");
//}
//
//
//function showCallLogPage() {
//     show2();
//    
//loadCallLogParameters();
//}
//function shownoniPage() {
//     show3();
//}
//function showReportsPage() {
//    show4();
//}
//function showDownloadsPage() {
//    show5();
//}
//
//function show1(){
//    
////  document.getElementById("menu5").style.display = "block";
//  
//  document.getElementById("menu1").style.backgroundColor  = "lightblue";
//  document.getElementById("menu2").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu21").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu3").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu4").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu5").style.backgroundColor  = "lightgrey";
//  
//  document.getElementById("home_menu").style.display = "none";
//  document.getElementById("call_log_menu").style.display = "none";
//  document.getElementById("hommie").style.display = "block";
//  document.getElementById("issue_menu").style.display = "none";
//  document.getElementById("reports_menu").style.display = "none";
//  document.getElementById("downloads_menu").style.display = "none";
//  
//}
//
//
//function show2(){
//  document.getElementById("menu1").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu2").style.backgroundColor  = "lightblue";
//  document.getElementById("menu21").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu3").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu4").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu5").style.backgroundColor  = "lightgrey";
//  
//  
//  document.getElementById("home_menu").style.display = "none";
//  document.getElementById("call_log_menu").style.display = "block";
//  document.getElementById("hommie").style.display = "none";
//  document.getElementById("issue_menu").style.display = "none";
//  document.getElementById("reports_menu").style.display = "none";
//  document.getElementById("downloads_menu").style.display = "none";
//  
//}
//function show21(){
//  document.getElementById("menu1").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu2").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu21").style.backgroundColor  = "lightblue";
//  document.getElementById("menu3").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu4").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu5").style.backgroundColor  = "lightgrey";
//  
//  
//  document.getElementById("home_menu").style.display = "block";
//  document.getElementById("call_log_menu").style.display = "none";
//  document.getElementById("hommie").style.display = "none";
//  document.getElementById("issue_menu").style.display = "none";
//  document.getElementById("reports_menu").style.display = "none";
//  document.getElementById("downloads_menu").style.display = "none";
//  
//}
//
//function show3(){
//
//  document.getElementById("menu1").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu2").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu21").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu3").style.backgroundColor  = "lightblue";
//  document.getElementById("menu4").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu5").style.backgroundColor  = "lightgrey";
//  
//  document.getElementById("home_menu").style.display = "none";
//  document.getElementById("call_log_menu").style.display = "none";
//  document.getElementById("hommie").style.display = "none";
//  document.getElementById("issue_menu").style.display = "block";
//  document.getElementById("reports_menu").style.display = "none";
//  document.getElementById("downloads_menu").style.display = "none";
//  
//}
//
//function show4(){
//
//  document.getElementById("menu1").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu2").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu21").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu3").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu4").style.backgroundColor  = "lightblue";
//  document.getElementById("menu5").style.backgroundColor  = "lightgrey";
//  
//  document.getElementById("home_menu").style.display = "none";
//  document.getElementById("call_log_menu").style.display = "none";
//  document.getElementById("hommie").style.display = "none";
//  document.getElementById("issue_menu").style.display = "none";
//  document.getElementById("reports_menu").style.display = "block";
//  document.getElementById("downloads_menu").style.display = "none";
//  
//}
//function show5(){
//
//  document.getElementById("menu1").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu2").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu21").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu3").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu4").style.backgroundColor  = "lightgrey";
//  document.getElementById("menu5").style.backgroundColor  = "lightblue";
//  
//  document.getElementById("home_menu").style.display = "none";
//  document.getElementById("call_log_menu").style.display = "none";
//  document.getElementById("hommie").style.display = "none";
//  document.getElementById("issue_menu").style.display = "none";
//  document.getElementById("reports_menu").style.display = "none";
//  document.getElementById("downloads_menu").style.display = "block";
//  
//}


const menus0 = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu21'];
const menu_name0 = ['home_menu', 'call_log_menu', 'hommie', 'issue_menu', 'reports_menu', 'downloads_menu']

const menus = ['menu1', 'menu2', 'menu4', 'menu21'];
const menu_name = ['home_menu', 'call_log_menu', 'hommie', 'reports_menu']

function clickedMenu(menu, menuName) {
  for (i=0; i<menus.length; i++) {
    document.getElementById(menus[i]).style.color  = "#172B4D";
    document.getElementById(menus[i]).style.background  = "#ffffff";
    document.getElementById(menus[i]).style.fontWeight = "normal";
    document.getElementById(menu_name[i]).style.display = "none";
    document.getElementById("settings_menu").style.display = "none";
  }
  document.getElementById(menu).style.color  = "#172B4D";
  document.getElementById(menu).style.background  = "#b8d1fb";
  // document.getElementById(menu).style.background  = "#172B4D";
  document.getElementById(menu).style.fontWeight = "bold";
  document.getElementById(menuName).style.display = "block";

  menu === 'menu21' ? showLogs() : '';
//  menu === 'menu2' ? loadCallLogParameters() : '';
}

function loadp(){
    
    
    var list = document.getElementById('pacsCodes');
    list.innerHTML = '';
    var d = document.getElementById('districtinput').value;
    console.log("dist value "+d);
    pacsIds.forEach(function(item){
        if(d==item.dist){
            var option = document.createElement('option');
            option.value=item.pacs_d;
            console.log(item);
            list.appendChild(option);
        }
    }); 

}
function loadCallLogParameters() {
    

    var dlist = document.getElementById('districtList');
    
    dlist.innerHTML = '';
    dist_list.forEach(function(item){
        var option = document.createElement('option');
        option.value=item.dist_name;
        console.log(item.dist_name);
        dlist.appendChild(option);
    });

    var mlist = document.getElementById('moduleList');
    
    mlist.innerHTML = '';
    modules.forEach(function(item){
        var option = document.createElement('option');
        option.value=item;
        console.log(item);
        mlist.appendChild(option);
    });
    
}

function createCallLog(){
   
    console.log("Creating Call Log");
    if(checkIssueFeilds()){
        console.log("checkIssueFeilds  Call Log");
        var formData = new FormData(callLogFro);
        // output as an object
        var fd = Object.fromEntries(formData);

        var parms = "action=create&pacsCode="+fd.pacsCode+"&issueDate="+fd.issueDate+"&module="+fd.module
                +"&issueDescreption="+fd.issueDescreption+"&createdby="+fd.employe_id+"&dist="+fd.district
                +"&catagiry="+fd.catagiry+"&requestType="+fd.requestType+"&creatername="+fd.createdby
                +"&priority="+fd.requestPriority
                +"&emp_id="+emp_id+"&role="+role;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "localhost:8080/application_name/v3/newticket/post",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          console.log(this.responseText);
          var jsonData = this.responseText;
          issues = (JSON.parse(jsonData)).issues;
          document.getElementById("callLogFro").reset();
          alert("issue created succesfully");
        };
    }else{
        
    alert("Feilds must be filled out");
    }
    





// ...or iterate through the name-value pairs
for (var pair of formData.entries()) {
console.log(pair[0] + ": " + pair[1]);
  
}
}
function checkIssueFeilds(){
    var valid = true;
    
    
        var formData = new FormData(callLogFro);
        // output as an object
        var fd = Object.fromEntries(formData);
        if(fd.pacsCode == "" || fd.pacsCode == null ){valid = false;}
        else if(fd.issueDate == "" || fd.issueDate == null ){valid = false;}
        else if(fd.issueDescreption == "" || fd.issueDescreption == null ){valid = false;}
        else if(fd.module == "" || fd.module == null ){valid = false;}
        
        
        
    return valid;
}

function is_valid_datalist_value(idDataList, inputValue) {
  var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
  if (option != null) {
    return option.value.length > 0;
  }
  return false;
}

function doValidate() {
  if (is_valid_datalist_value('moduleList', document.getElementById('moduleinput').value)) {
      
  } else {
    alert("Invalid Module Name");
    document.getElementById('moduleinput').value='';
  }
}
function doValidatePacs() {
  if (is_valid_datalist_value('pacsCodes', document.getElementById('pacsCodeInput').value)) {
      
  } else {
    alert("Invalid Pacs Name");
    document.getElementById('pacsCodeInput').value='';
  }
}
function doValidatedist() {
  if (is_valid_datalist_value('districtList', document.getElementById('districtinput').value)) {
      
  } else {
    alert("Invalid District Nmae");
    document.getElementById('districtinput').value='';
  }
}




function doValidateAssignto() {
  if (is_valid_datalist_value('assignEmployeList', document.getElementById('employeList').value)) {
      
  } else {
    alert("Invalid ");
    document.getElementById('employeList').value='';
  }
}
