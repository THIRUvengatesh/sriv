/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//  function used to assign issue and close and update remark
function updateCallLog(){
    
   
    console.log("Creating Call Log");
    if(checkIssueUpdateFeilds()){
        console.log("checkIssueUpdateFeilds  Call Log");
        var formData = new FormData(updateissue);
        var fd = Object.fromEntries(formData);

        var parms = "action=update&issueid="+fd.iv_issue_id+"&issueStatus="+fd.issueStatus
                +"&issueRemark="+fd.issueRemark+"&assignto="+fd.employeList+"&emp_id="+emp_id
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
          chr.cl = chr.cl+1;
          chr.op = chr.op-1;

            const data = google.visualization.arrayToDataTable([
              ['Contry', 'Mhl'],
              ['opened',chr.op],
              ['closed',chr.cl],
              ['reopened',chr.ro]
            ]);

            // Set Options
            const options = {
              title:''
            };
          const chart = new google.visualization.PieChart(document.getElementById('myChart'));
          chart.draw(data, options);
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

function checkIssueUpdateFeilds(){
    var valid = true;
    
    
        var formData = new FormData(updateissue);
        // output as an object
        var fd = Object.fromEntries(formData);
        if(fd.iv_issue_id == "" || fd.iv_issue_id == null ){valid = false;}
        
        
    return valid;
}

function closeissueviewcontainer(){
    
    document.getElementById("issueviewcontainer").style.display = "none";
}

function expandissue(no){
    console.log(issues[no].issue_id);
    
    document.getElementById("issueviewcontainer").style.display = "block";
    console.log("h");
    document.getElementById("iv_issId").innerHTML  = issues[no].issue_id;
    document.getElementById("iv_issue_id").value  = issues[no].issue_id;
    document.getElementById("iv_IssuedDate").innerHTML = issues[no].logdate;
    document.getElementById("iv_RequestType").innerHTML = issues[no].typeofrequest;
    document.getElementById("iv_CategoryType").innerHTML = issues[no].applicationCatagiry;
    document.getElementById("iv_IssueDetails").innerHTML = issues[no].issue;
    document.getElementById("iv_PACSUserName").innerHTML = issues[no].paccs;
    document.getElementById("iv_IssueGeneratedBy").innerHTML = issues[no].creatername;
    
}

function doSom(){
    console.log("hai");
    var a =  { 'issues' : [{'serial_id':'0','issue_id':'issue0107','logdate':'2024-03-05 04:21:17','districts':'erode','paccs':'K 864 MURALICHENNAMPATTI PACS LTD - 91300801014001','module':'Share','issue':'the creation of issue','createdby':'SVIT0018','creatername':'null','remarks':'Open','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0112','logdate':'2024-03-05 11:10:09','districts':'erode','paccs':'AA 533 UMAREDDIYUR PACCS LTD - 91300801001001','module':'Membership','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0113','logdate':'2024-03-05 11:10:12','districts':'erode','paccs':'AA 533 UMAREDDIYUR PACCS LTD - 91300801001001','module':'Membership','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0115','logdate':'2024-03-05 13:47:41','districts':'erode','paccs':'A A 215 RAJANNAGAR PACS LTD - 91300809046001','module':'Deposits','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0116','logdate':'2024-03-05 13:48:00','districts':'erode','paccs':'K 864 MURALICHENNAMPATTI PACS LTD - 91300801014001','module':'Membership','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0117','logdate':'2024-03-05 13:48:44','districts':'erode','paccs':'K 392 ATHANI PACS LTD - 91300801006001','module':'Membership','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0118','logdate':'2024-03-05 13:48:58','districts':'erode','paccs':'AA 533 UMAREDDIYUR PACCS LTD - 91300801001001','module':'Membership','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0119','logdate':'2024-03-06 02:19:31','districts':'erode','paccs':'K 864 MURALICHENNAMPATTI PACS LTD - 91300801014001','module':'Share','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0120','logdate':'2024-03-06 02:19:54','districts':'erode','paccs':'K 392 ATHANI PACS LTD - 91300801006001','module':'Share','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},{'serial_id':'0','issue_id':'issue0121','logdate':'2024-03-06 03:15:43','districts':'erode','paccs':'AA265.MUKASIPUDUR PACS LTD - 91300801007001','module':'Deposits','issue':'the creation of issue','createdby':'SVIT0018','creatername':'Thiru Vengatesh - SVIT0018','remarks':'Close','typeofrequest':'Request','applicationCatagiry':'DCT','status':'open'},]};
    console.log(a.issues);
}
function showLogs3(){
    
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
        
        row_0.appendChild(row_0_data_1);
        row_0.appendChild(row_0_data_2);
        row_0.appendChild(row_0_data_21);
        row_0.appendChild(row_0_data_3);
        row_0.appendChild(row_0_data_4);
        row_0.appendChild(row_0_data_5);
        row_0.appendChild(row_0_data_6);
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
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_21);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
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
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_21);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        if(role == "role3"){
            row_2.setAttribute("onclick","expandissue("+i+")" );
        }
        tbody.appendChild(row_2);
        
    }
    
    
document.getElementById('home_menu_list').appendChild(table);
    
}


const menus3 = ['menu1', 'menu4', 'menu21'];
const menu_name3 = ['home_menu', 'hommie', 'reports_menu'];


function clickedMenu3(menu, menuName) {
  for (i=0; i<menus3.length; i++) {
    document.getElementById(menus3[i]).style.color  = "#172B4D";
    document.getElementById(menus3[i]).style.background  = "#ffffff";
    document.getElementById(menus3[i]).style.fontWeight = "normal";
    document.getElementById(menu_name3[i]).style.display = "none";
  }
  document.getElementById(menu).style.color  = "#172B4D";
  document.getElementById(menu).style.background  = "#b8d1fb";
  // document.getElementById(menu).style.background  = "#172B4D";
  document.getElementById(menu).style.fontWeight = "bold";
  document.getElementById(menuName).style.display = "block";

  menu === 'menu21' ? showLogs() : '';//loadAssigntoParameter()
  menu === 'menu21' ? loadAssigntoParameter() : '';
}

function loadAssigntoParameter(){
    console.log("loadAssigntoParameter");
    var alist = document.getElementById('assignEmployeList');
    
    alist.innerHTML = '';
        for(var i = 0;i<assignedtolist.length ; i++){
            
        }
        assignedtolist.forEach(function(item){
            console.log(item.emp_name);
            var option = document.createElement('option');
            console.log(i);
            option.value=item.emp_name;
            option.innerHTML=item.emp_name;
            alist.appendChild(option);

        });
    
}   