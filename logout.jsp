<%-- 
    Document   : logout
    Created on : 07-Feb-2024, 11:12:02 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            session.removeAttribute("uname");
            session.invalidate();
        %>
        Logout Succesfull
    </body>
</html>
