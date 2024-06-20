<%-- 
    Document   : header
    Created on : 11-Mar-2024, 1:42:36 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
        <link rel="stylesheet" href="css/header.css"/>
        <script src="js/header.js"></script>
        <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
<div class="header bg-white">
    <div class="dis-fx">
        
        
        <div class="inline-head logoname" style="width: 20vw; min-width: 200px;">
            <div style="padding-right: 5px;padding-top: 10px;">
                <img src="images/logo1.png" alt="Trulli" width="75" height="40 ">
            </div>
            <div style="display: none" >
                <a id="compName" class="companname">               
                    Vidya Online 
                </a>
            </div>
        </div>
    </div>
    
    <div class="inline-head two" >
        <%
            String user_r = (String) request.getSession().getAttribute("role");
        %>
        <h1><%=user_r%></h1><h1> _User Portal</h1>
    </div>
    <div class="inline-head two">
        <b>
            <%
                String user_name = (String) request.getSession().getAttribute("user_name");
            %>
            <%=user_name%>
            <!--<a href="logout">Logout</a>-->
                 
        </b>
            <div id="ic_prof">

                <div class="profile">
                    <span class="profile-name"><img src="images/icons/profile.png" alt="Trulli" width="45" height="45" /></span>
                    <div class="profile-dropdown">
                        <a href="#">Profile</a>
                        <a onclick="lout()" >Settings</a>
                        <a href="logout">Logout</a>
                    </div>
                </div>
            </div>
            <%--<%@include file="pages/header_profile.jsp" %>--%>
<!--            <div id="ic_prof" onclick="prof()">
                <img src="images/icons/profile.png" alt="Trulli" width="45" height="45" />
                <ul>
            <li class="sub-item">
              <span class="material-icons-outlined"> grid_view </span>
              <p>Dashboard</p>
            </li>
            <li class="sub-item">
              <span class="material-icons-outlined">
                format_list_bulleted
              </span>
              <p>My Orders</p>
            </li>
            <li class="sub-item">
              <span class="material-icons-outlined"> manage_accounts </span>
              <p>Update Profile</p>
            </li>
            <li class="sub-item">
              <span class="material-icons-outlined"> logout </span>
              <p>Logout</p>
            </li>
          </ul>
            </div>-->
    </div>
             <div style="height: 100px;width: 50px;background-color: lightcyan;"></div>
            
</div>
            
<!--            <div id="prof_u" index='-1' onfocusout="p_h()">
                <div id="p_bar" class="b_lines">
                    <img src="images/icons/profile.png" alt="Trulli" width="45" height="45" />
                </div>
                <div id="p_name" class="b_lines">
                    <a><%=user_name%></a>
                </div>
                <div id="p_child" class="b_lines">
                    <div class="p_chs">
                        Change Password
                    </div>
                    <div class="p_chs" href="logout">
                        LogOut
                    </div>
                </div>
            </div>-->