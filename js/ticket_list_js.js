/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
        const rowsPerPage = 10;
        let currentPage = 1;
        let currentPageC = 1;
        var ttickects = null;
        var load=true;
function gettcs(){
    if(load){
        var parms = "action=gett";
//        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
        
        xhttp.onload = function() {
            
          console.log(this.responseText);
          var jsonData = this.responseText;
          var tickets = (JSON.parse(jsonData)).tickets_details;
          setMasterTick(tickets);
            
        };
    }
}

function setMasterTick(tickets){
    var x = 0;
            var y = 0;
            var op_t = [];
            var cl_t = [];
            for(var i = 0;i<tickets.length ; i++){
                if(tickets[i].status ==  0){
                //var ttic = null;
                    //ttic = "{id:"+tickets[i].id+",district:'"+tickets[i].district+"',title:'"+tickets[i].title+"',created:'"+tickets[i].created+"',level:'"+tickets[i].level+"',date:'"+tickets[i].date+"',status:'"+tickets[i].status+"'}";
                    op_t[x]=tickets[i];
                    x++;
                }else{
//                var ttic = null;
//                    ttic = "{id:"+tickets[i].id+",district:'"+tickets[i].district+"',title:'"+tickets[i].title+"',\n\
//                            created:'"+tickets[i].created+"',level:'"+tickets[i].level+"',date:'"+tickets[i].date+"',status:'"+tickets[i].status+"'}";
                    cl_t[y]=tickets[i];
                    y++;
                }
            }
            ttickects = {"opt":op_t,"clt":cl_t};
            load = false;
            displayTable(1,"ticketTable");
            console.log("page is : "+1);
            console.log(ttickects);
    
}
function displayTable(page,table) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    var pageinfo = document.getElementById('page-info');
    let tickets = (ttickects.opt).slice(start, end);
    if(table === "ticketTableClosed"){
        tickets = (ttickects.clt).slice(start, end);
        pageinfo = document.getElementById('page-info2');
    }
    

    const tableBody = document.getElementById('t_body');
    tableBody.innerHTML = '';
    
    tab_show(tickets,table);
    
//    tickets.forEach(row => {
//        const tr = document.createElement('tr');
//        Object.values(row).forEach(cell => {
//            const td = document.createElement('td');
//            td.textContent = cell;
//            tr.appendChild(td);
//        });
//        tableBody.appendChild(tr);
//    });

    pageinfo.textContent = `Page ${currentPage} of ${Math.ceil(ttickects.opt.length / rowsPerPage)}`;
}
function tab_show(tickets,table){
    console.log("tic--------------"+tickets);
    var table = document.getElementById(table);
            var tbody = table.querySelector("tbody");
            if(table === "ticketTableClosed"){
                tbody = table.querySelector("t_body_clo");
            }
            tbody.innerHTML = "";
    for(var i = 0;i<tickets.length ; i++){
        
                    let row_2 = document.createElement('tr');
                    row_2.setAttribute("id",tickets[i].id);
                    row_2.setAttribute("class","row-tic");
                    row_2.setAttribute("onclick","vTic("+tickets[i].id+")");
//                    let row_2_data_1 = document.createElement('td');
//                    row_2_data_1.innerHTML = i+1;
                    let row_2_data_2 = document.createElement('td');
                    row_2_data_2.setAttribute("class","t_id_list");
//                    let cre_icon = document.createElement('div');
//                    cre_icon.setAttribute("class","cre_pro");
                    row_2_data_2.innerHTML = tickets[i].id;
//                    let row_2_data_3 = document.createElement('td');
//                    row_2_data_3.innerHTML = tickets[i].district;
                    let row_2_data_4 = document.createElement('td');
                    row_2_data_4.innerHTML = tickets[i].title;
                    let row_2_data_5 = document.createElement('td');
                    row_2_data_5.setAttribute("class","t_list_cre");
//                    row_2_data_5.appendChild(cre_icon);
                    row_2_data_5.innerHTML =   tickets[i].created;
                    let row_2_data_6 = document.createElement('td');
                    if(tickets[i].status === "0"){
                        row_2_data_6.innerHTML = "Open";
                    }else{
                        row_2_data_6.innerHTML = "Close";
                    }
                    let row_2_data_7 = document.createElement('td');
                    row_2_data_7.innerHTML = tickets[i].level;
                    let row_2_data_8 = document.createElement('td');
//                    row_2_data_8.setAttribute("class","view-tic");
//                    row_2_data_8.innerHTML = "view";
                    let row_2_data_9 = document.createElement('td');
                    row_2_data_9.innerHTML = tickets[i].date+" "+ tickets[i].time;;
                    let row_2_data_10 = document.createElement('td');
                    row_2_data_10.innerHTML = tickets[i].closed_date+" "+ tickets[i].closed_time;;

//                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
//                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    row_2.appendChild(row_2_data_6);
                    row_2.appendChild(row_2_data_9);
                    if(tickets[i].status === "1"){
                        row_2.appendChild(row_2_data_10);
                    }
                    row_2.appendChild(row_2_data_7);
//                    row_2.appendChild(row_2_data_8);

                    tbody.appendChild(row_2);
    }
}
function vTic(ticId){
    var parms = "action=view&tic="+ticId;
//        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
//          console.log(this.responseText);
          var jsonData = this.responseText;
          var ticket = (JSON.parse(jsonData)).ticket[0];
          var comment = (JSON.parse(jsonData)).comments;
//          console.log(comm);
          console.log(jsonData);
          document.getElementById("tic_v").style.display = "block";
          if(ticket.status === 0 && ticket.role_id != 1){
              document.getElementById("update_butt").style.display = "block";
          }else if(ticket.status === 1 && ticket.role_id != 1){
              document.getElementById("update_butt").style.display = "none";
          }
          if(ticket.status == 0){
              document.getElementById("ticket_status").style.color = "Green";
              document.getElementById("ticket_status").innerHTML = "Open";
              document.getElementById("row_responce").removeAttribute("style");
              document.getElementById("update_butt").removeAttribute("style");
              document.getElementById("status").removeAttribute("disabled");
          }else{
              document.getElementById("ticket_status").style.color = "red";
              document.getElementById("ticket_status").innerHTML = "Close";
              document.getElementById("row_responce").style.display = "none";
              document.getElementById("update_butt").setAttribute("style","display : none");
              document.getElementById("status").setAttribute("disabled","true");
              document.getElementById("row_responce").setAttribute("style","display : none");
          }
          
          document.getElementById("dccb_value").innerHTML = ticket.dccb;
          document.getElementById("id_value").innerHTML = ticket.id;
          document.getElementById("pacs_value").innerHTML = ticket.pacs +" "+ticket.pacsid;
          document.getElementById("date_value").innerHTML = ticket.date+"     "+ticket.time;
          document.getElementById("created_value").innerHTML = ticket.created;
          document.getElementById("title_value").innerHTML = ticket.title;
          document.getElementById("category_value").innerHTML = ticket.category;
          document.getElementById("subcategory_value").innerHTML = ticket.subcategory;
          document.getElementById("description_value").innerHTML = ticket.description;
          document.getElementById("fileDisplay").innerHTML = `<p>Attachment <a href="${ticket.attachment}" target="_blank">View</a></p>`;
          var comment_station =  document.getElementById("comment_station");
          comment_station.innerHTML = "";
          if(comment.length == 0){
              
              document.getElementById("row_comments").setAttribute("style","display : none");
          }else{
              
              document.getElementById("row_comments").removeAttribute("style");
          }
          for(let i = 0; i<comment.length; i++ ){
              console.log(comment[i]);
             let comm = document.createElement('div');
             let com_name = document.createElement('div');
             let com_time = document.createElement('div');
             let comm_body = document.createElement('div');
             comm.setAttribute("class","comm");
             com_name.setAttribute("class","com_name");
             com_time.setAttribute("class","com_name");
             comm_body.setAttribute("class","comm_body");
             com_name.innerHTML = comment[i].username;
             com_time.innerHTML = comment[i].date;
             comm_body.innerHTML = comment[i].comment;
             comm.appendChild(com_name);
             comm.appendChild(com_time);
             comm.appendChild(comm_body);
             comment_station.appendChild(comm);
             
          }

        };
}
 function nextPage() {
            if (currentPage * rowsPerPage < (ttickects.opt).length) {
                currentPage++;
                displayTable(currentPage,"ticketTable");
            }
        }

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable(currentPage,"ticketTable");
    }
}
 function nextPagec() {
            if (currentPageC * rowsPerPage < (ttickects.opt).length) {
                currentPageC++;
                displayTable(currentPageC,"ticketTableClosed");
            }
        }

function prevPagec() {
    if (currentPageC > 1) {
        currentPageC--;
        displayTable(currentPageC,"ticketTableClosed");
    }
}
function showTickets(){
    console.log("entered");
    document.getElementById('home_menu_list').innerHTML = '';
    
    let table = document.getElementById('ticketTable');
        
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
        
        
    for(var i = 0;i<tickets.length ; i++){
        
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = i;
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = tickets[i].id;
        let row_2_data_3= document.createElement('td');
        row_2_data_3.innerHTML = tickets[i].district;
        let row_2_data_4 = document.createElement('td');
        row_2_data_4.innerHTML = tickets[i].title;
        let row_2_data_5 = document.createElement('td');
        row_2_data_5.innerHTML = tickets[i].created;
        let row_2_data_6 = document.createElement('td');
        row_2_data_6.innerHTML = tickets[i].status;
        let row_2_data_7 = document.createElement('td');
        row_2_data_7.innerHTML = tickets[i].level;
//        let row_2_data_8 = document.createElement('td');
//        row_2_data_8.innerHTML = "View";
        
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        row_2.appendChild(row_2_data_7);
//        row_2.appendChild(row_2_data_8);
        
        tbody.appendChild(row_2);
        
    }
    
    
document.getElementById('home_menu_list').appendChild(table);
    
}

function swTopen(){
    displayTable(1,"ticketTable");
          document.getElementById("ticketListContainer").style.display = "block";
          document.getElementById("ticketListContainerClosed").style.display = "none";
//          document.getElementById("head_2").style.borderbottom= "1px solid green";
          document.getElementById("head_1").style.border = "";
          document.getElementById("head_1").setAttribute("style","border-bottom:4px solid green;");
          document.getElementById("head_2").removeAttribute("style");
          document.getElementById("head_1").style.color = "black";
}
function swTclos(){
//            alert("hai");
          displayTable(1,"ticketTableClosed");
          document.getElementById("ticketListContainerClosed").style.display = "block";
          document.getElementById("ticketListContainer").style.display = "none";
//          document.getElementById("head_1").style.border = "1px solid green";
          document.getElementById("head_2").setAttribute("style","border-bottom:4px solid green;");
          document.getElementById("head_1").removeAttribute("style");

//          document.getElementById("head_2").style.border= "";
          document.getElementById("head_2").style.color = "black";
}
