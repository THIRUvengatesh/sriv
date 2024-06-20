/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function ckml(){
    var ml = document.getElementById('cre_UserEmail_id').value;
    var parms = "action=checkemail&email="+ml;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          var res = this.responseText;
          if(res == "exist"){
            alert("This E-Mail Id alresdy Exist");
            document.getElementById('cre_UserEmail_id').value = '';
          }
//          var jsonData = this.responseText;
//          issues = (JSON.parse(jsonData)).issues;
//          document.getElementById("callLogFro").reset();
//          alert("issue created succesfully");
        };
}
function ckph(){
    var ml = document.getElementById('cre_UserMobile_id').value;
    var parms = "action=checkph&ph="+ml;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          console.log(this.responseText);
          var res = this.responseText;
          if(res == "exist"){
            alert("This Mobile No alresdy Exist");
            document.getElementById('cre_UserMobile_id').value = '';
          }
//          var jsonData = this.responseText;
//          issues = (JSON.parse(jsonData)).issues;
//          document.getElementById("callLogFro").reset();
//          alert("issue created succesfully");
        };
}
function didis(){
    var dc = document.getElementById('user_dccb_id').value;
    var dt = document.getElementById('user_dccb_id').value;
    var parms = "action=formload&loadmod=district"+"&dccb="+dc;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
          const responseArray = JSON.parse(this.responseText);
          console.log("responseArray  "+responseArray);
          var list = document.getElementById('user_district_List');
            list.innerHTML = '';
            responseArray.forEach(function(item){
                console.log("item   ")+item;
                
                    var option = document.createElement('option');
                    option.value=item;
                    console.log(item);
                    list.appendChild(option);
                
            }); 
          
        };
}
function loadp(){
    
    
    

}

function dipacs(){
    var dc = document.getElementById('user_dccb_id').value;
    var dt = document.getElementById('user_district_id').value;
    var parms = "action=formload&loadmod=pacs"+"&dccb="+dc+"&dist="+dt;
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "AdminAction",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parms);
        xhttp.onload = function() {
            console.log(this.responseText);
          const responseArray = JSON.parse(this.responseText);
          console.log("responseArray  "+responseArray);
          var list = document.getElementById('user_pacs_List');
            list.innerHTML = '';
            responseArray.forEach(function(item){
                console.log("item   ")+item;
                
                    var option = document.createElement('option');
                    option.value=item;
                    option.innerHTML=item;
                    console.log(item);
                    list.appendChild(option);
                
            }); 
          
        };
}
function creTic(){
    
}
function checkuserFeilds(){
    var valid = true;
    
    
        var formData = new FormData(userCreFro);
        // output as an object
        var fd = Object.fromEntries(formData);
        if((fd.user_role == "admin" || fd.user_role == "l1" || fd.user_role == "l2") && checkMailData()){valid = false;}
        else if((fd.user_role == "pacs" && checkMailData()) &&(fd.user_dccb == null || fd.user_district == null || fd.user_pacs == null)){valid = false;}
        else if((fd.user_role == "dccb" && checkMailData()) &&(fd.user_dccb == null || fd.user_district == null)){valid = false;}
        
        
        
    return valid;
}
function checkMailData(){
    var valid = true;
    
    
        var formData = new FormData(userCreFro);
        // output as an object
        var fd = Object.fromEntries(formData);
        if(fd.cre_UserName == null || fd.cre_UserEmail == null  || fd.cre_UserMobile == null ){valid = false;}
        
        
        return valid;
}

function creTick(){
    
    var formData = new FormData(userCreFro);
    var fd = Object.fromEntries(formData)
    console.log("user_role_id     "+fd.user_role);
    //console.log(checkticketFeilds());
    if(!checkuserFeilds()){
        if(formData.user_role_id == "admin"){
            console.log("its admin");
        }
        var dc = document.getElementById('user_dccb_id').value;
        var dt = document.getElementById('user_district_id').value;
        var parms = "action=createU&user_role="+fd.user_role+"&user_name="+fd.cre_UserName+"&user_mail="+fd.cre_UserEmail
                +"&user_mobile="+fd.cre_UserMobile+"&user_dccb="+fd.user_dccb+"&user_district="+fd.user_district
                +"&user_pacs="+fd.user_pacs;
            console.log(parms);
            const xhttp = new XMLHttpRequest();

            xhttp.open("POST", "AdminAction",true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(parms);
            xhttp.onload = function() {
                console.log(this.responseText);
              const responseArray = JSON.parse(this.responseText);
              console.log("responseArray  "+responseArray);
              var list = document.getElementById('user_pacs_List');
                list.innerHTML = '';
                responseArray.forEach(function(item){
                    console.log("item   ")+item;

                        var option = document.createElement('option');
                        option.value=item;
                        option.innerHTML=item;
                        console.log(item);
                        list.appendChild(option);

                }); 

            };
    }else{alert("Fill Required Data");}
}

function is_valid_datalist_valueAD(idDataList, inputValue) {
  var option = document.querySelector("#" + idDataList + " option[value='" + inputValue + "']");
    
  if (option != null) {
      
    return option.value.length > 0;
  }
  return false;
}

function doValidateRoleAD() {
  if (is_valid_datalist_valueAD('user_role_List', document.getElementById('user_role_id').value)) {
      roleInputSlection();
  } else {
    alert("Invalid Role Name");
    document.getElementById('user_role_id').value='';
  }
} 
function roleInputSlection(){
    var rol = document.getElementById('user_role_id').value;
    if(rol == "admin"){
        document.getElementById("user_dccb_id").disabled = true;
        document.getElementById("user_district_id").disabled = true;
        document.getElementById("user_pacs_id").disabled = true;
        document.getElementById("user_dccb_id").value = "Disabled";
        document.getElementById("user_district_id").value = "Disabled";
        document.getElementById("user_pacs_id").value = "Disabled";
//        document.getElementById(el1).disabled = true;
    }else if(rol == "pacs"){
        document.getElementById("user_dccb_id").disabled = false;
        document.getElementById("user_district_id").disabled = false;
        document.getElementById("user_pacs_id").disabled = false;
        document.getElementById("user_dccb_id").value = "";
        document.getElementById("user_district_id").value = "";
        document.getElementById("user_pacs_id").value = "";
        
    }else if(rol == "dccb"){
        document.getElementById("user_dccb_id").disabled = false;
        document.getElementById("user_district_id").disabled = false;
        document.getElementById("user_pacs_id").disabled = true;
        document.getElementById("user_dccb_id").value = "";
        document.getElementById("user_district_id").value = "";
        document.getElementById("user_pacs_id").value = "disabled";
        
    }else if(rol == "l1"){
        document.getElementById("user_dccb_id").disabled = true;
        document.getElementById("user_district_id").disabled = true;
        document.getElementById("user_pacs_id").disabled = true;
        document.getElementById("user_dccb_id").value = "Disabled";
        document.getElementById("user_district_id").value = "Disabled";
        document.getElementById("user_pacs_id").value = "Disabled";
        
    }else if(rol == "l2"){
        document.getElementById("user_dccb_id").disabled = true;
        document.getElementById("user_district_id").disabled = true;
        document.getElementById("user_pacs_id").disabled = true;
        document.getElementById("user_dccb_id").value = "Disabled";
        document.getElementById("user_district_id").value = "Disabled";
        document.getElementById("user_pacs_id").value = "Disabled";
        
    }
}
function doValidateDCCBAD() {
  if (is_valid_datalist_valueAD('user_dccb_List', document.getElementById('user_dccb_id').value)) {
        console.log("doValidateDCCBAD");
      didis();
  } else {
    alert("Invalid DCCB Name");
    document.getElementById('user_dccb_id').value='';
  }
  document.getElementById('user_district_id').value='';
} 
function doValidateDis() {
  if (is_valid_datalist_valueAD('user_district_List', document.getElementById('user_district_id').value)) {
      var role = document.getElementById('user_role_id').value;
      if(role == 'pacs'){
        dipacs();
      }
  } else {
    alert("Invalid District Name");
    document.getElementById('user_district_id').value='';
  }
} 
function doValidatePacs() {
  if (is_valid_datalist_valueAD('user_pacs_List', document.getElementById('user_pacs_id').value)) {
      
  } else {
    alert("Invalid District Name");
    document.getElementById('user_pacs_id').value='';
  }
} 