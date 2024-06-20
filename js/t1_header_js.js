/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */



const menus_id = ['menu1', 'menu2', 'menu4', 'menu21'];
const menu_names = ['home_menu', 'call_log_menu', 'hommie', 'reports_menu']

function clickeMenu(menu, menuName) {
    if(menu === "menu21"){
        gettcs();
    }
    
  for (i=0; i<menus_id.length; i++) {
    document.getElementById(menus_id[i]).style.color  = "#172B4D";
    document.getElementById(menus_id[i]).style.background  = "#ffffff";
    document.getElementById(menus_id[i]).style.fontWeight = "normal";
    document.getElementById(menu_names[i]).style.display = "none";
    document.getElementById("settings_menu").style.display = "none";
  }
  document.getElementById(menu).style.color  = "#172B4D";
  document.getElementById(menu).style.background  = "#b8d1fb";
  // document.getElementById(menu).style.background  = "#172B4D";
  document.getElementById(menu).style.fontWeight = "bold";
  document.getElementById(menuName).style.display = "block";

//  menu === 'menu21' ? showLogs() : '';
//  menu === 'menu2' ? loadCallLogParameters() : '';
}
