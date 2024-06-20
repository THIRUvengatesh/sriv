<%-- 
    Document   : ad_modify_users_screeen
    Created on : 10-Apr-2024, 6:50:13 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

        <script src="js/nimda_sj/nimda_du.js"></script>
        <link rel="stylesheet" href="css/manage_resu_style.css">
        <div class="manage_user_parent">
            <div class="mup_head">
                <div id="mfu" class="mup_h_c">Modify Users</div>
                <!--<div id="plus" class="mup_h_c">+</div>-->   
            </div>
            <div class="mup_body">
                <form>
                    <table>
                        <tr>
                            <td></td>
                            <td>User Mail</td>
                            <td>
                                <input name="uu_mail" id="uu_mail" onfocusout="loadUser()" >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User ID</td>
                            <td>
                                <input name="uu_userID" id="uu_userID" disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User Name</td>
                            <td>
                                <input name="uu_name" id="uu_name" value="Vengatesh" disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>User Contect</td>
                            <td>
                                <input name="uu_cont" id="uu_cont"  disabled >
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Current Level</td>
                            <td>
                                <input name="uu_Clevel" id="uu_Clevel" disabled>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Change To</td>
                            <td>
                                <select name="uu_Ulevel" id="uu_Ulevel" list="u_l_list" ></select>
                                <datalist id="u_l_list"></datalist>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <input type="button" value="Update">
                                <input type="reset" value="Reset">
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        
