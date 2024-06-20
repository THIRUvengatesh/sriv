<%-- 
    Document   : home_page
    Created on : 05-Feb-2024, 5:39:24 am
    Author     : VENKI
--%>

<%
                if((session.getAttribute("status") == "failed")){ //&((session.getAttribute("user")!= null))){
                    response.sendRedirect("index.jsp");
                }
                String rol3 = "role3";
            %>  
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>welcome</title>
        <link rel="stylesheet" href="css/tooth.css"/>
        <link rel="stylesheet" href="css/mouth.css"/>
        <link rel="stylesheet" href="css/d_style.css">
        
        <script src="js/nimda_sj/nimda_krow_wen.js"></script>
        <script src="js/nimda_sj/nimda_sj_1.js"></script>
        <script type="text/javascript">
            
            
            var role = "${role}";
            var emp_id = "${emp_id}";
            console.log("user     "+emp_id+"   "+role);

        </script>

    </head>
    <body>
        <input type="hidden" id="userM" value="">
        <input type="hidden" id="empname" value="${user.firstName} ${user.lastName}"> 
        <input type="hidden" id="emprole" value="${user.role}">
        
        <div id="mainContainer" class="mainone" style="display: flex; flex-direction: column;">
            
            <div>
                <%@include file="pages/header.jsp" %>
            </div>
            <div class="heading_break"></div>
            <div class="dis-fx" style=" height: 97%;">
            <div id="navigationBar" class="childone navBar">
                
                <div class="svit_menu min-h">hai
                    <div class="mn" id="menu1" style="background-color: lightblue;" onclick="clickedMenu3('menu1', 'home_menu')"><a>Home</a></div>
                    <div class="mn" id="menu2" style="" onclick="clickedMenu3('menu2', 'cre_resu')"><a>User Creation</a></div>
                    <div class="mn" id="menu21" style="" onclick="clickedMenu3('menu21', 'manage_resu')"><a>Manage Users</a></div>
                    <div class="mn" id="menu3" onclick="clickedMenu3('menu3', 'reports_menu')"><a>Reports</a></div>
                </div>
            </div>
            
            <div id="visualArea" class="childone visBody">
                
                
                <div id="home_menu" class="min-h">
                    
                </div>
                <div id="cre_resu" class="min-h df">
                    <%@include file="pages/ad_User_Creation_Page.jsp" %>
                </div>
                <div id="manage_resu" class="min-h df">
                    <%@include file="pages/ad_modify_users_screeen.jsp" %>
                    <%@include file="pages/ad_delete_users_screen.jsp" %>
                </div>
                <div id="reports_menu" class="">
                    <%--<%@include file="pages/reportsPage.jsp" %>--%>
                    XXXXXXXXXXXXXXXXXXXXX
                </div>
                <div id="downloads_menu" class="">
                    
                    <c:if test="${session.getAttribute('user.role') eq rol3}">
                        <p>Both attributes are equal.</p>
                    </c:if>
                </div>
                
            </div>
            </div>
        </div>
    </body>
</html>
