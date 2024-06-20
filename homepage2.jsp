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
        <title><%=session.getAttribute("user_id")%></title>
        <link rel="stylesheet" href="css/tooth.css"/>
        <link rel="stylesheet" href="css/mouth.css"/>
        <link rel="stylesheet" href="css/issueCreatePage.css"/>
        <link rel="stylesheet" href="css/issue_view_page.css"/>
        <link rel="stylesheet" href="css/d_style.css">
        
        <script src="js/sri_1.js"></script>
        <script type="text/javascript">
            
//            console.log();    
            
             
//            var tickets = ${tickets};
        </script>
        <script src="js/call_log_module.js"></script>
        <script src="js/header_actions.js"></script>
        <script src="js/report.js"></script>

    </head>
    <body>
        
        
        <div id="mainContainer" class="mainone" style="display: flex; flex-direction: column;">
            
            <div>
                <%@include file="pages/header.jsp" %>
            </div>
            <div class="heading_break"></div>
            
            <div class="dis-fx" style=" height: 97%;">
                <div id="navigationBar" class="childone navBar bg-white">
                    
                    <div class="svit_menu min-h">
                        <%@include file="pages/menubarpage.jsp" %>
                    </div>
                </div>

                <div id="visualArea" class="childone visBody bg-white">
                    <!--<div class="heading_break"></div>-->
                    <div class="vsa_ch" id="hommie">
                        <%@include file="pages/ticket_View_Screen.jsp" %>
                        <%@include file="pages/ticketListScreen.jsp" %>
                        <%--<%@include file="pages/homePage.jsp" %>--%>
                        <%--<%@include file="pages/dashboard_1.jsp" %>--%>
                    </div>
                    <div class="vsa_ch" id="call_log_menu">
                        <%--<%@include file="pages/issuelogScreen.jsp" %>--%>
                        <%@include file="pages/ticketCreatingPage.jsp" %>
                    </div>
                    <div class="vsa_ch" id="home_menu" class="min-h">
                        
                        <%@include file="pages/dashboard_1.jsp" %>
                        <%--<%@include file="test_pages/image_Screen.jsp" %>--%>
                        <!--<iframe src="http://localhost:8080/sriv/LoginAction" width="100%" height="300" style="border:1px solid black;"></iframe>-->
                        <div>


                        </div>
                        <div id="home_menu_list">

                        </div>
                        
                    </div>
                    <div class="vsa_ch" id="issue_menu" class="">
                        issue_menu
                        
                        <%--<%@include file="pages/issueCreatingPage.jsp" %>--%>
                    </div>
                    <div class="vsa_ch" id="reports_menu" class="">
                        <%@include file="pages/reportsPage.jsp" %>
                    </div>
                    <div class="vsa_ch" id="downloads_menu" class="">

                        
                    </div>
                    <div class="vsa_ch" id="settings_menu" class="">
                        <%@include file="pages/settings_page.jsp" %>
                        
                    </div>

                </div>
            </div>
        </div>
    </body>
</html>
