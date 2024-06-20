<%-- 
    Document   : user_Creation_Page
    Created on : 23-Mar-2024, 12:58:17 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="userCreatingArea" class="callLog">
    
                        <form action="create" id="userCreFro" name="userCreate" >
                            <table>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        Role :
                                    </td>
                                    <td>
                                        <input name="user_role" id="user_role_id" list="user_role_List" onfocusout="doValidateRoleAD()" >
                                        <datalist id="user_role_List">
                                            <%
                                                String[] roleItems = (String[]) request.getSession().getAttribute("roles");
                                            %>
                                            <% 
                                                
                                                int len = roleItems.length;
                                                for(int i = 0 ;i <len ; i++){
                                            %>
                                            <option value="<%=roleItems[i]%>"><%=roleItems[i]%></option>
                                            <%
                                                }
                                            %>
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    
                                    <td>
                                        Name :
                                    </td>
                                    <td>
                                        <input type="text" id="cre_UserName_id" name="cre_UserName" >
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Email :
                                    </td>
                                    <td>
                                        <input type="text" id="cre_UserEmail_id" name="cre_UserEmail" onfocusout="ckml()" >
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        Mobile :
                                    </td>
                                    <td>
                                        <input type="text" id="cre_UserMobile_id" name="cre_UserMobile" onfocusout="ckph()" maxlength="10" >
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        DCCB Name :
                                    </td>
                                    <td>
                                        <input name="user_dccb" id="user_dccb_id" list="user_dccb_List" onfocusout="doValidateDCCBAD()" >
                                        <datalist id="user_dccb_List">
                                            <%
                                                String[] dccbItems = (String[]) request.getSession().getAttribute("dccbs");
                                            %>
                                            <% 
                                                
                                                for(int i = 0 ;i <dccbItems.length ; i++){
                                            %>
                                            <option value="<%=dccbItems[i]%>"><%=dccbItems[i]%></option>
                                            <%
                                                }
                                            %>
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        District Name :
                                    </td>
                                    <td>
                                        <input name="user_district" id="user_district_id" list="user_district_List" onfocusout="doValidateDis()" >
                                        <datalist id="user_district_List">
                                            

                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Pacs Name :
                                    </td>
                                    <td>
                                        <input name="user_pacs" id="user_pacs_id" list="user_pacs_List" onfocusout="doValidatePacs()" >
                                        <datalist id="user_pacs_List">
                                            
                                        </datalist>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="button" value="Submit" onclick="creTick()"><input type="reset" value="Reset">
                                    </td>
                                </tr>
                            </table>
                        </form>
</div>
