<%-- 
    Document   : ticketListScreen
    Created on : 30-Mar-2024, 3:41:44 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="nothing.LoadingCredentials" %>
<%@ page import="DBActions.DBWorks" %>
<%@ page import="org.json.JSONArray" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Arrays" %>
<%@ page import="java.util.Iterator" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.tracker.ticket.Tick" %>


<!DOCTYPE html>

        <link rel="stylesheet" href="css/tick_list.css">
        <script src="js/ticket_list_js.js"></script>
        <script>
            var o=0;
            var tickets = '';
        </script>
<div>     
    <div id="ticket_list_head">
        
        <%
            String closed_tick1 = (String) request.getSession().getAttribute("closed_tick");
            String open_tick1 = (String) request.getSession().getAttribute("open_tick");
//            String totel_tick = (String) request.getSession().getAttribute("totel_tick");
//            String today_tick = (String) request.getSession().getAttribute("today_tick");
        %>
        <div class="hds" id="head_1" style="border-bottom: 4px solid green;" onclick="swTopen()">
            Opened (<%=open_tick1%>)
        </div>
        <div class="hds" id="head_2" onclick="swTclos()">
            Closed(<%=closed_tick1%>)
        </div>
        <div class="hds" id="head_2" onclick="swTclos()">
            Escalated
        </div>
    </div>
    <div  id="ticketListContainer">
        <div  class="concon" >
            <table id="ticketTable">
                <thead id="tl_head" style="
    color: rgb(0 53 255 / 52%);
">
                    <tr>
                        <!--<th>S.No</th>-->
                        <th>ID No</th>
                        <!--<th>District</th>-->
                        <th>Ticket Title</th>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Open Time</th>
                        <th>Escalation</th>
                        <!--<th id="act">Action</th>-->
                    </tr>
                </thead>
                <tbody id="t_body">
                    <%
                        List<Tick> tickList =  (List<Tick>)request.getSession().getAttribute("tickets"); 
                    %>
                    <%
                        int sno = 1;
                        for (Tick tick : tickList) {
                    %>
                    <tr id="<%=tick.getId()%>" class="row-tic" onclick="vTic(<%=tick.getId()%>)">
                            <td><%=sno%></td>
                            <td><%=tick.getId()%></td>
                            <td><%=tick.getDistrict()%></td>
                            <td><%=tick.getTitle()%></td>
                            <td><%=tick.getCreated()%></td>
                            <td><%=tick.getDate()+"   "%><%=tick.getTime()+" "%></td>
                            <td>Open</td>
                            <td><%=tick.getEsLevel()%></td>
                            <!--<td class="view-tic">view</td>-->
                        </tr>
                    <%
                        sno++;
                        }
                    %>
                </tbody>
            </table>
        </div>
                
    <div id="pagination">
        <button id="prev" onclick="prevPage()">Previous</button>
        <span id="page-info"></span>
        <button id="next" onclick="nextPage()">Next</button>
    </div>
    </div>
                
    <div  id="ticketListContainerClosed">
        <div class="concon" >
            <table id="ticketTableClosed">
                <thead id="tl_head" style="color: rgb(0 53 255 / 52%);">
                    <tr>
                        <!--<th>S.No</th>-->
                        <th>Ticket ID</th>
                        <!--<th>District</th>-->
                        <th>Ticket Title</th>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Open Time</th>
                        <th>Closed Time</th>
                        <th>Escalation</th>
                        <!--<th id="act">Action</th>-->
                    </tr>
                </thead>
                <tbody id="t_body_clo">
                    <%
                        List<Tick> clo_tickets =  (List<Tick>)request.getSession().getAttribute("clo_tickets"); 
                    %>
                    <%
                        int tno = 1;
                        for (Tick tick : clo_tickets) {
                    %>
                    <tr id="<%=tick.getId()%>" class="row-tic" onclick="vTic(<%=tick.getId()%>)">
                            
                            <td><%=tick.getId()%></td>
                            <td><%=tick.getTitle()%></td>
                            <td><%=tick.getCreated()%></td>
                            <td><%=tick.getDate()+"   "%><%=tick.getTime()+" "%></td>
                            <td><%=tick.getclosed_date()+"   "%><%=tick.getclosed_time()+" "%></td>
                            <td>Closed</td>
                            <td><%=tick.getEsLevel()%></td>
                            <!--<td class="view-tic">view   </td>-->
                        </tr>
                    <%
                        tno++;
                        }
                    %>
                </tbody>
            </table>
        </div>     
    <div id="pagination">
        <button id="prev" onclick="prevPagec()">Previous</button>
        <span id="page-info2"></span>
        <button id="next" onclick="nextPagec()">Next</button>
    </div>
    </div>
</div> 