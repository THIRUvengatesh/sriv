<%-- 
    Document   : dashboard_1
    Created on : 04-Jun-2024, 5:32:36 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

        <link rel="stylesheet" href="css/dash_1_st.css">
        
        <script src="js/dashboard.js"></script>
        <div id="to_p">
            <a id="to">Tickets Overview</a>
        </div>
        <%
                                                String closed_tick = (String) request.getSession().getAttribute("closed_tick");
                                                String open_tick = (String) request.getSession().getAttribute("open_tick");
                                                String totel_tick = (String) request.getSession().getAttribute("totel_tick");
                                                String today_tick = (String) request.getSession().getAttribute("today_tick");
                                            %>
        <div class="par_dis_b">
            <div id="bl_1" class="dash_blocks">
                <div class="db_in">
                    Total Tickets
                    <div id="totel_tick" class="coun"><%=totel_tick%></div>
                </div>
            </div>
            <div id="bl_2" class="dash_blocks">
                <div class="db_in">
                    New Tickets ( Today )
                    <div class="coun"><%=today_tick%></div>
                </div>

            </div>
            <div id="bl_3" class="dash_blocks" onclick="clickeMenu('menu21', 'hommie')">
                <div class="db_in">
                    On Going Tickets
                    <div id="open_tick" class="coun"><%=open_tick%></div>
                </div>

            </div>
            <div id="bl_4" class="dash_blocks">
                <div  class="db_in">
                    Resolved Tickets 
                    <div id="closed_tick" class="coun"><%=closed_tick%></div>
                </div>

            </div>
        </div>
        <div id="ov_board">
            <div id="ov_b_head">
                <input class="obvh" id="ov_search" type="search" placeholder="Search"/>
                <div id="ov_options" class="select-box-1">
<!--                    <select name="languages" id="lang" class="sb1">
                        <option value="0">Select Priority</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                      </select>
                     <select name="languages" id="lang" class="sb1"> 
                        <option value="latest">Latest</option>
                        <option value="today">Today</option>
                        <option value="oneweek">One Week</option>
                      </select>-->
                    <button class="button-9" onclick="logg()" role="button">New Ticket</button>
                </div>
            </div>
        </div>

                <div id="blankcon" onclick="olala()"></div>