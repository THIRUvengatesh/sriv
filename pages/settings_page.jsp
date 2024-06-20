<%-- 
    Document   : settings_page
    Created on : 24-Apr-2024, 11:12:33 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<link rel="stylesheet" href="css/settings_page_style.css"/>
<script src="js/settings_page_js.js"></script>
<!--<div>
    <div id="ch_ps">
        Change Password
    </div>
</div>-->
<div id="ch_ps">
    <div class="container">
        <h2>Change Password</h2>
        <form id="changePasswordForm">
            <div class="form-group">
                <label for="currentPassword">Current Password</label>
                <input type="password" id="currentPassword" name="currentPassword" required>
            </div>
            <div class="form-group">
                <label for="newPassword">New Password</label>
                <input type="password" id="newPassword" name="newPassword" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm New Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
            </div>
            <button type="submit">Update Password</button>
        </form>
        <div id="message"></div>
    </div>
</div>