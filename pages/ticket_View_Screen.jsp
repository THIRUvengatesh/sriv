<%-- 
    Document   : ticket_View_Screen
    Created on : 31-Mar-2024, 3:10:41 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<link rel="stylesheet" href="css/ticket_view_page.css"><!-- comment -->
            <% 
                String role = (String) request.getSession().getAttribute("role");
                if((role.equals("pacs")) || (role.equals("dccb"))){
            %>
                <script src="js/ticketViewPage.js"></script>
            <%}else if(role.equals("l1")){%>
                <script src="js/ticketViewPage_1.js"></script>
                <script src="js/ticketViewPage_si.js"></script>
            <%}else if(role.equals("l2")){%>
                <script src="js/ticketViewPage_2.js"></script>
                <script src="js/ticketViewPage_si.js"></script>
            <%}%>
            
        <div style="display: none;" id="tic_v" class="alpha-9-11">
    <div id="tick_v_h">
        <div class="tick_v_h_c">Tickect View</div>
        <div style="background-color: red;height: 100%;" id="tick_v_h_c_x" class="tick_v_h_c" onclick="cloceView()">X</div>
    </div>
    <div id="tick_v_b">
        <form action="update" id="ticket_vi">
            <table id="v_table">
                
            <tr>
                <td></td>
                <td>Ticket Status</td>
                <td>
                    <div id="ticket_status"></div>
                </td>
                <td></td>
            </tr>
            
            <tr id="row_dccb">
                <td></td>
                <td>DCCB</td>
                <td id="dccb_value">error</td>
                <td></td>
            </tr>
            <tr id="row_pacs">
                <td></td>
                <td>Pacs</td>
                <td id="pacs_value">error</td>
                <td></td>
            </tr>
            <tr id="row_id">
                <td></td>
                <td>Tickect Id</td>
                <td id="id_value">error</td>
                <td></td>
            </tr>
            <tr id="row_date">
                <td></td>
                <td>Date</td>
                <td id="date_value">00-00-0000</td>
                <td></td>
            </tr>
            <tr id="row_created">
                <td></td>
                <td>Raised by</td>
                <td id="created_value">error</td>
                <td></td>
            </tr>
            <tr id="row_title">
                <td></td>
                <td>Title</td>
                <td id="title_value"> Error in adding date in voucher entry</td>
                <td></td>
            </tr>
            <tr id="row_category">
                <td></td>
                <td >Category</td>
                <td id="category_value">Voucher</td>
                <td></td>
            </tr>
            <tr id="row_subcategory">
                <td></td>
                <td>Subcategory</td>
                <td id="subcategory_value">Loan</td>
                <td></td>
            </tr>
            <tr id="row_description">
                <td></td>
                <td>Description</td>
                <td id="description_value" >
                    I am getting error while adding date in voucher entry in loan module .<br> 
                    And while initiate the Closer of Loan Auto Intrest Not Geting Initiated
                </td>
                <td></td>
            </tr>
            <tr id="row_attachment">
                <td></td>
                <td>Attachment</td>
                <td><div id="fileDisplay"></div></td>
                <td></td>
            </tr>
            
            <% 
                role = (String) request.getSession().getAttribute("role");
            %>
            <%
                if((role.equals("l2"))){
                
            %>
            
<!--            <tr id="row_L1_responce">
                <td></td>
                <td>L1 Response</td>
                <td>
                    L1 Response Text
                </td>
                <td></td>
            </tr>-->
            <%
                }
            %>
            <%
//                if((role.equals("l1")) || (role.equals("l2"))){
            %>
            <tr id="row_status" <%if((role.equals("pacs")) || (role.equals("dccb"))){%>hidden<%}%>>
                <td></td>
                <td>Status</td>
                <td>
                    <select id="status" name="status" onfocusout="pri()" >
                        <option>Open</option>
                        <option>Resolved</option>
                        <option>Escalate</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <tr id="row_priority" <%if((role.equals("pacs")) || (role.equals("dccb"))){%>hidden<%}%>>
                <td></td>
                <td>Priority</td>
                <td>
                    <select id="priority" name="priority" disabled>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <%
//                }
            %>
            
            <tr id="row_comments">
                <td></td>
                <td>Comments</td>
                <td>
                    <div id="comment_station">
                        <div class="comm">
                            <div class="com_name">Vengatesh</div>
                            <div class="comm_body"> 
                                Its look like internal error of the server , we are facing this kind issues a lot with other modules
                            </div>
                        </div>
                        <div class="comm">
                            <div class="com_name">Pradeep</div>
                            <div class="comm_body">
                                Noted..... we are working on that.
                            </div>
                        </div>
                        <div class="comm">
                            <div class="com_name">Pradeep</div>
                            <div class="comm_body">
                                Noted..... we are working on that.
                            </div>
                        </div>
                        <div class="comm">
                            <div class="com_name">Pradeep</div>
                            <div class="comm_body">
                                Noted..... we are working on that.
                            </div>
                        </div>
                    </div>
                </td>
                <td></td>
            </tr>
            
            <%
//                if((role.equals("l1")) || (role.equals("l2"))){
            %>
            <tr id="row_responce" <%if((role.equals("pacs")) || (role.equals("dccb"))){%>hidden<%}%> >
                <td></td>
                <td>Comment</td>
                <td>
                    <textarea id="responceInput" name="responce"></textarea>
                </td>
                <td></td>
            </tr>
            <%
//                }
            %>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <%--<%if((role.equals("l1")) || (role.equals("l2"))){%>hidden<%}%>--%>
                    <%--<%if((role.equals("l1")) || (role.equals("l2"))){%>--%>
                    <input id="update_butt" <%if((role.equals("pacs")) || (role.equals("dccb"))){%>hidden<%}%> type="button" value="Update" onclick="update()">
                    <%--<%}%> --%>
                    
                    <input type="button" value="Close" onclick="cloceView()"></td>
                <td></td>
            </tr>
        </table>
        </form>
    </div>
</div>