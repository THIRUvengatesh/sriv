<%-- 
    Document   : reportsPage
    Created on : 07-Mar-2024, 2:40:56 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div>
                        <table>
                            <tr>
                                <td></td>
                                <td>Head</td>
                                <td>
                                    <select name="reportHead" class="box" onfocusout="loadreporttype()"  id="reportHead">
                                        <option value="0">---select---</option>
                                        <option value="1">Issues</option>
                                        <option value="2">Call Log</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Report</td>
                                <td>
                                    <select name="reporttype" class="box"  id="reporttype">
                                        <option value="1">---select---</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr id="from">
                                <td></td>
                                <td>From</td>
                                <td>
                                    <input type="date" name="from" class="box" id="fromDate"  >
                                </td>
                                <td></td>
                            </tr>
                            <tr id="to">
                                <td></td>
                                <td>To</td>
                                <td>
                                    <input type="date" name="to" class="box"   id="toDate">
                                </td>
                                <td></td>
                            </tr>
                            <tr id="to">
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="button" value="Generate" class="in-btn" onclick="getReport()">
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </div>