/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function pri(){
    var stat = document.getElementById("status").value;
    if(stat=="Escalate"){
        console.log(stat);
        document.getElementById("priority").removeAttribute("disabled");
    }else{
        document.getElementById("priority").setAttribute("disabled","true");
    }
}
function cloceView(){
    document.getElementById("tic_v").style.display = "none";
}
function update(){
    var formData = new FormData(ticket_vi);
    var fd = Object.fromEntries(formData);
    var t_id = document.getElementById("id_value").innerHTML;
       
    var parms = "action=update&tic="+t_id+"&responce="+fd.responce+"&status="+fd.status;
    if(fd.status=="Escalate"){
        parms= parms+"&priority="+fd.priority;
    }
    console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TicketAction",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
//            document.getElementsByID("responceInput").value = "";
document.getElementById("responceInput").value = "Fifth Avenue, New York City";
          console.log(this.responseText);
          var jsonData = this.responseText;
          var tickets = (JSON.parse(jsonData)).tickets_details;
            var table = document.getElementById("ticketTable");
            var tbody = table.querySelector("tbody");
            var table1 = document.getElementById("ticketTableClosed");
            var tbody1 = table1.querySelector("tbody");
            tbody.innerHTML = "";
            tbody1.innerHTML = "";
            for(var i = 0;i<tickets.length ; i++){
                if(tickets[i].status ==  0){
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
                    let row_2_data_9 = document.createElement('td');
                    row_2_data_9.innerHTML = tickets[i].date+" "+ tickets[i].time;;

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    row_2.appendChild(row_2_data_6);
                    row_2.appendChild(row_2_data_9);
                    row_2.appendChild(row_2_data_7);
                    row_2.appendChild(row_2_data_8);

                    tbody.appendChild(row_2);
                }else{
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
                    row_2_data_6.innerHTML =  tickets[i].date+" "+ tickets[i].time;
                    let row_2_data_7 = document.createElement('td');
                    row_2_data_7.innerHTML = tickets[i].closed_date+" "+ tickets[i].closed_time;;
                    let row_2_data_8 = document.createElement('td');
                    row_2_data_8.setAttribute("class","view-tic");
                    row_2_data_8.innerHTML = "view";
                    let row_2_data_9 = document.createElement('td');
                    row_2_data_9.innerHTML = tickets[i].date
                    let row_2_data_10 = document.createElement('td');
                    row_2_data_10.innerHTML = "closed";
                    

                    row_2.appendChild(row_2_data_1);
                    row_2.appendChild(row_2_data_2);
                    row_2.appendChild(row_2_data_3);
                    row_2.appendChild(row_2_data_4);
                    row_2.appendChild(row_2_data_5);
                    row_2.appendChild(row_2_data_6);
                    row_2.appendChild(row_2_data_9);
                    row_2.appendChild(row_2_data_10);
                    row_2.appendChild(row_2_data_7);
                    row_2.appendChild(row_2_data_8);

                    tbody1.appendChild(row_2);
                    
                }
                
                
            }
            cloceView();
        };
}

