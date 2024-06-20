<%-- 
    Document   : menubarpage
    Created on : 05-Mar-2024, 11:45:18 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

        <script src="js/t1_header_js.js"></script>
<!--<div class="menus">
    <div class="mn" id="menu1" style="background-color: lightblue;" onclick="showHomePage()"><a>Home</a></div>
    <div class="mn" id="menu2" onclick="showCallLogPage()"><a>Issue Log</a></div>
    <div class="mn" id="menu21" style="" onclick="showIssuePage()"><a>Issues</a></div>
    <div class="mn" id="menu3" onclick="shownoniPage()"><a>Call Log</a></div>
    <div class="mn" id="menu4" onclick="showReportsPage()"><a>Reports</a></div>
    <div class="mn" id="menu5" onclick="showDownloadsPage()"><a>Downloads</a></div>

</div>-->
<div class="menus">
    <div class="mn initialst" id="menu1" onclick="clickeMenu('menu1', 'home_menu')">
        <div class="ic_dad">
            <img src="images/icons/home_2.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Home</a>
    </div>
    <div class="mn" id="menu2" onclick="clickeMenu('menu2', 'call_log_menu')">
        <div class="ic_dad">
            <img src="images/icons/issue_add.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Ticket Log</a>
    </div>
    <div class="mn" id="menu21" onclick="clickeMenu('menu21', 'hommie')"> <!--clickeMenu('menu21', 'home_menu')-->
        <div class="ic_dad">
            <img src="images/icons/issue_1.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Tickets</a>
    </div>
<!--    <div class="mn" id="menu3" onclick="clickedMenu('menu3', 'issue_menu')">
        <div class="ic_dad">
            <img src="images/icons/call_log_2.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Call Log</a>
    </div>-->
    <div class="mn" id="menu4" onclick="clickeMenu('menu4', 'reports_menu')">
        <div class="ic_dad">
            <img src="images/icons/reports_1.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Reports</a>
    </div>
<!--    <div class="mn" id="menu5" onclick="clickedMenu('menu5', 'downloads_menu')">
        <div class="ic_dad">
            <img src="images/icons/download_1.png" alt="Trulli" width="17" height="17">
        </div>
        <a>Downloads</a>
    </div>-->
</div>
