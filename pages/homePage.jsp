<%-- 
    Document   : homePage
    Created on : 02-Mar-2024, 4:53:59 am
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div> 

<script src="https://www.gstatic.com/charts/loader.js"></script>
<div style="display: flex">
    <div
        id="myChart" style="width:100%; max-width:600px; height:500px;">
    </div>
    <div
        id="myChart2" style="width:100%; max-width:600px; height:500px;">
    </div>
</div>
<script>
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['opened',chr.op],
  ['closed',chr.cl],
  ['reopened',chr.ro]
]);
const data2 = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['High',chr.hi],
  ['Medium ',chr.mi],
  ['Low',chr.lo]
]);

// Set Options
const options = {
  title:''
};
const options2 = {
  title:''
};

// Draw
const chart = new google.visualization.PieChart(document.getElementById('myChart'));
chart.draw(data, options);
const chart2 = new google.visualization.PieChart(document.getElementById('myChart2'));
chart2.draw(data2, options2);

}
</script>

</div>
