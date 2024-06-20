/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


const menus = ['menu1', 'menu2', 'menu21', 'menu3'];
const menu_name = ['home_menu', 'cre_resu', 'manage_resu', 'reports_menu'];


function clickedMenu3(menu, menuName) {
  for (i=0; i<menus.length; i++) {
    document.getElementById(menus[i]).style.color  = "#172B4D";
    document.getElementById(menus[i]).style.background  = "#ffffff";
    document.getElementById(menus[i]).style.fontWeight = "normal";
    document.getElementById(menu_name[i]).style.display = "none";
  }
  document.getElementById(menu).style.color  = "#172B4D";
  document.getElementById(menu).style.background  = "#b8d1fb";
  // document.getElementById(menu).style.background  = "#172B4D";
  document.getElementById(menu).style.fontWeight = "bold";
  document.getElementById(menuName).style.display = "block";

}