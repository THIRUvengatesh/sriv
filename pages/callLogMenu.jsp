<%-- 
    Document   : callLogMenu
    Created on : 05-Mar-2024, 10:40:58 pm
    Author     : VENKI
    Detail     : This is Actual Issue Creating Page
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<div id="callLogArea" class="callLog">
                        <form action="action" id="callLogFro" name="issueCreate" >
                            <table>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        DCCB Name :
                                    </td>
                                    <td>
                                        <input name="dccbName" id="dccbNameInput" >
                                        <datalist id="pacsCodes">
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        District :
                                    </td>
                                    <td>
                                        <input name="district" id="districtinput" list="districtList" onfocusout="doValidatedist(),loadp()" >
                                        <datalist id="districtList">
                                            <option value="${user.dist}">chennai</option>
                                             </datalist>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td>
                                        Pacs Name :
                                    </td>
                                    <td>
                                        <input name="pacsCode" id="pacsCodeInput" onfocusout="doValidatePacs()" list="pacsCodes" >
                                        <datalist id="pacsCodes">
                                        </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        issue Module :
                                    </td>
                                    <td>
                                        <input name="module" id="moduleinput" list="moduleList" onfocusout="doValidate()" >
                                        <datalist id="moduleList">
                                             </datalist>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Type Of Request :
                                    </td>
                                    <td>
                                        <select name="requestType"  id="requestType">
                                            <option value="Request">Request</option>
                                            <option value="Issue">Issue</option>
                                            <option value="Enhancement">Enhancement</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Application Catagiry :
                                    </td>
                                    <td>
                                        <select name="catagiry" class="selectOption" id="catagiry">
                                            <option value="DCT">DCT</option>
                                            <option value="Pre Migration">Pre Migration</option>
                                            <option value="ERP">ERP</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Issue description :
                                    </td>
                                    <td>
                                        <textarea name="issueDescreption" id="issueDescreptionTextarea" >the creation of issue</textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Priority :
                                    </td>
                                    <td>
                                        <select name="requestPriority"  id="requestPriority">
                                            <option value="High">High</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Medium">Medium</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        Issue generated by  :
                                    </td>
                                    <td>
                                        <input type="text" name="createdby" id="createdby" value="${user.firstName} ${user.lastName} - ${user.empId}" readonly><input type="text" name="employe_id" value="${user.empId}" hidden>
                                    </td>
                                </tr>
<!--                                <tr>
                                    <td></td>
                                    <td>
                                        Attachments  :
                                    </td>
                                    <td>
                                        <input type="file" name="attachment" id="attachment" >
                                    </td>
                                </tr>-->
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <input type="button" value="Submit" onclick="createCallLog()"><input type="reset" value="Reset">
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>