<%-- 
    Document   : callLogMenu
    Created on : 05-Mar-2024, 10:40:58 pm
    Author     : VENKI
    Detail     : This is Actual Issue Creating Page
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

        <link rel="stylesheet" href="css/tick_cre_style.css">
        
        <script src="js/ticketPage.js"></script>
<div id="callLogArea" class="callLog">
    <form id="tickCreFro" enctype="multipart/form-data">
                            <table>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        DCCB Name :
                                    </td>
                                    <td>
                                           <%
                                                String user_dccb = (String) request.getSession().getAttribute("user_dccb");
                                                String user_role = (String) request.getSession().getAttribute("role");
                                            %>
                                            
                                            
                                            <% 
                                                if((user_role.equals("pacs")) || (user_role.equals("dccb"))){
                                            %>
                                                
                                            <%=user_dccb%><input name="dccBank" id="dccBankNameInput" value="<%=user_dccb%>" hidden >
                                            
                                            <% 
                                                }else{
                                            %>

                                                    <%
                                                        String[] dccbItems1 = (String[]) request.getSession().getAttribute("dccbNames");
                                                    %>
                                                    
                                                
                                                
                                                <input name="dccBank" id="dccBankNameInput" list="dccBankNameList" onfocusout="doValidateDCCB()" >
                                                <datalist id="dccBankNameList">
                                                
                                                    <%
//                                                        String[] dccbItems1 = (String[]) request.getSession().getAttribute("dccbNames");
                                                    %>
                                                    <% 

                                                        for(int i = 0 ;i <dccbItems1.length ; i++){
                                                    %>
                                                    <option value="<%=dccbItems1[i]%>"></option>
                                                    <%
                                                        }
                                                    %>
                                                    
                                                </datalist>
                                            <%
                                                }
                                            %>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        District :
                                    </td>
                                    <td>
                                            <% 
                                                if((user_role.equals("pacs")) || (user_role.equals("dccb"))){
                                                String user_dist = (String) request.getSession().getAttribute("user_dist");
                                            %>
                                            <%
                                                
                                            %>
                                            <%=user_dist%><input name="district" id="districtinput" value="<%=user_dist%>" hidden >
                                            <% 
                                                }else{
                                            %>
                                                <input name="district" id="districtinput" list="disNames" onfocusout="doValidateDis()"  >
                                                <!--<input list="disNames">-->
                                                <datalist id="disNames">
                                                    
                                                </datalist>
                                            <%
                                                }
                                            %>
                                        
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        Pacs Name :
                                    </td>
                                    <td>
                                            
                                            <% 
                                                if(user_role.equals("pacs")){
                                                String user_pacs = (String) request.getSession().getAttribute("user_pacs");
                                            %>
                                            
                                             <%=user_pacs%><input name="paccs" id="pacsCodeInput1" value="<%=user_pacs%>"  hidden >
                                             
                                             <% 
                                                }else if(user_role.equals("dccb")){
                                            %>
                                            <input name="paccs" id="paccs" list="paccslist" value="AA 533 UMAREDDIYUR PACCS LTD" onfocusout="doValidatePac()"  >
                                                <datalist id="paccslist">
                                                    <%
                                                        String[] pacsItems = (String[]) request.getSession().getAttribute("user_pacs");
                                                    %>
                                                    <% 
                                                        for(int i = 0 ;i <pacsItems.length ; i++){
                                                    %>
                                                    <option value="<%=pacsItems[i]%>"><%=pacsItems[i]%></option>
                                                    <%
                                                        }
                                                    %>
                                                </datalist>
                                            <%
                                                }else {
                                            %>
                                            <input name="paccs" id="paccs" list="paccslist" onfocusout="doValidatePac()">
                                            <datalist id="paccslist"></datalist>
                                            
                                            <%
                                                }
                                            %>

                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Category :
                                    </td>
                                    <td>
                                        <select name="category" id="categoryInput" onfocusout="loadSub()">
                                        
                                            <%
                                                String[] categoryItems = (String[]) request.getSession().getAttribute("category_list");
                                            %>
                                            <% 
                                                for(int i = 0 ;i <categoryItems.length ; i++){
                                            %>
                                            <option value="<%=categoryItems[i]%>"><%=categoryItems[i]%></option>
                                            <%
                                                }
                                            %>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Subcategory :
                                    </td>
                                    <td>
                                        <!--<select name="subcategory"  id="subcategoryInput">-->
                                            <input name="subcategory" id="subcategoryInput" list="subCatag" >
                                            <datalist id="subCatag">
                                            <%
//                                                String[] subCategoryItems = (String[]) request.getSession().getAttribute("subcategory_list");
                                            %>
                                            <% 
//                                                for(int i = 0 ;i <subCategoryItems.length ; i++){
                                            %>
                                            <%--<option value="<%=subCategoryItems[i]%>"><%=subCategoryItems[i]%></option>--%>
                                            <%
//                                                }
                                            %>
                                            </datalist>
                                        <!--</select>-->
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Ticket Title :
                                    </td>
                                    <td>
                                        <input name="title" class="selectOption" id="titleId">
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Ticket Description :
                                    </td>
                                    <td>
                                        <textarea name="ticketDescreption" id="ticketDescreptionTextarea" >the Description of Ticket</textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Attachment :
                                    </td>
                                    <td>
                                        <input type="file" name="file"  id="attachmentID" onfocusout="setFileName()">
                                        <input  name="filename"  id="filename" hidden>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="button" value="Submit" onclick="createTickectFun()"><input type="reset" value="Reset">
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                                        
                                        <div id="overlay" >
                                            <div id="overlay_text">Please Wait a While....</div>
                                        </div>