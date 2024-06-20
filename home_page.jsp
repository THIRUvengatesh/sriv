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
        <link rel="stylesheet" href="css/issueCreatePage.css"/>
        <link rel="stylesheet" href="css/issue_view_page.css"/>
        <link rel="stylesheet" href="css/d_style.css">
        
        <script src="js/sri_1.js"></script>
        <script type="text/javascript">
            
//            console.log();    
            var pacsIds = ${pacsNames}.pacs_details;
            var dist_list = ${dist_list}.dist_details;
            var chr = ${chart};
            console.log(chr);
            var modules = [${modules}];
            var role = "${role}";
            var emp_id = "${emp_id}";
            console.log("user     "+emp_id+"   "+role);
            var issues=(${issues}).issues;
            if(role != "role4"){
                var assignedtolist=${employes}.employes;
            }
             
        </script>
        <script src="js/call_log_module.js"></script>
        <script src="js/header_actions.js"></script>
        <script src="js/report.js"></script>

    </head>
    <body>
        <input type="hidden" id="userM" value="">
        <input type="hidden" id="district" value="${user.dist}"><!-- comment -->
        <input type="hidden" id="empname" value="${user.firstName} ${user.lastName}"> 
        <input type="hidden" id="emprole" value="${user.role}">
        
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
                    <div id="hommie">
                        <%@include file="pages/homePage.jsp" %>
                    </div>
                    <div id="call_log_menu">
                        <%--<%@include file="pages/issuelogScreen.jsp" %>--%>
                        <%@include file="pages/ticketCreatingPage.jsp" %>
                    </div>
                    <div id="home_menu" class="min-h">
                        <div>


                        </div>
                        <div id="home_menu_list">

                        </div>
                        <div id="issueviewcontainer">
                            <div>
                                <form id="updateissue" name="updateissue">
                                    <table>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Issued ID :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <!--<input type="text" id="issId"  name="issId" value="issue0001">-->
                                                <div id="iv_issId"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Issued Date :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_IssuedDate"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Type Of Request :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_RequestType"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Application Category :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_CategoryType"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Request/Issue Details :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_IssueDetails"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                PACS UserName :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_PACSUserName"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Issue generated by :
                                            </td>
                                            <td>
                                                <!--<input type="date" id="ivdate"  name="ivDate" value="2024-02-22">-->
                                                <div id="iv_IssueGeneratedBy"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Assigned To :
                                            </td>
                                        <td>
                                            <input name="employeList" id="employeList" list="assignEmployeList"  >
                                            <datalist id="assignEmployeList">
                                                <option value="${user.dist}">chennai</option>
                                                 </datalist>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                Status :
                                            </td>
                                        <td>
                                            <select name="issueStatus"  id="issueStatusId">
                                                <option value="Open">Open</option>
                                                <option value="Close">Close</option>
                                            </select>
                                        </td>
                                        </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            Solution/Remarks :
                                        </td>
                                        <td>
                                            <textarea name="issueRemark" id="issueRemarkTextarea" >the creation of issue</textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input type="button" value="Submit" onclick="updateCallLog()"><input type="reset" value="Reset"><input type="button" onclick="closeissueviewcontainer()" value="close">
                                        </td>
                                    </tr>
                                    </table>
                                </form>
                            </div> 
                        </div>
                    </div>
                    <div id="issue_menu" class="">
                        issue_menu
                        <%--<%@include file="pages/issueCreatingPage.jsp" %>--%>
                    </div>
                    <div id="reports_menu" class="">
                        <%@include file="pages/reportsPage.jsp" %>
                    </div>
                    <div id="downloads_menu" class="">

                        <c:if test="${session.getAttribute('user.role') eq rol3}">
                            <!-- This content will be displayed if 'attribute1' is equal to 'attribute2' -->
                            <p>Both attributes are equal.</p>
                        </c:if>
                    </div>

                </div>
            </div>
        </div>
    </body>
</html>
