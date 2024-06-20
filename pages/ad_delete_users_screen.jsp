<%-- 
    Document   : ad_delete_users_screen
    Created on : 11-Apr-2024, 6:47:41 am
    Author     : VENKI
--%>

        <script src="js/nimda_sj/nimda_modify.js"></script>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<link rel="stylesheet" href="css/manage_resu_style.css">
<div class="manage_user_parent">
            <div class="mup_head">
                <div id="mfu" class="mup_h_c">Delete User</div>
                <!--<div id="plus" class="mup_h_c">+</div>-->   
            </div>
            <div class="mup_body">
                <form>
                    <table>
                        <tr>
                            <td></td>
                            <td>User Mail</td>
                            <td>
                                <input name="ud_mail" id="ud_mail" onfocusout="loadU()" >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User ID</td>
                            <td>
                                <input name="ud_userID" id="ud_userID" disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User Name</td>
                            <td>
                                <input name="ud_name" id="ud_name" value="Vengatesh" disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User Contect</td>
                            <td>
                                <input name="ud_cont" id="ud_cont"  disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User Level</td>
                            <td>
                                <input name="ud_Clevel" id="ud_Clevel" disabled>
                            </td>
                            <td></td>
                        </tr>
                        <tr id="db" >
                            <td></td>
                            <td>User dccb</td>
                            <td>
                                <input name="ud_dccb" id="ud_dccb"  value="dccb" disabled>
                            </td>
                            <td></td>
                        </tr>
                        <tr id="dp" >
                            <td></td>
                            <td>User pacs</td>
                            <td>
                                <input name="ud_pacs" id="ud_pacs"  value="pacs" disabled>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <input type="button" value="Delete">
                                <input type="reset" value="Reset">
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>