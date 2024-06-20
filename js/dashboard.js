/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function createTickectDash(){
            var formD = new FormData(tickCreFro);
        var fd = Object.fromEntries(formD);
            const fileInput = document.getElementById('attachmentID');
//            const fileNmae = document.getElementById('fileName').value;
            const file = fileInput.files[0];
            if(fd.dccBank !='' && fd.district !='' && fd.paccs != '' && fd.title != '' && fd.category != '' && fd.subcategory != '' ){
               
                console.log("overlay");
                const formData = new FormData();
                formData.append('file', file);
                formData.append('action', "create");
                formData.append('dccbName', fd.dccBank);
                formData.append('district', fd.district);
                formData.append('pacsCode', fd.paccs);
                formData.append('title', fd.title);
                formData.append('category', fd.category);
                formData.append('subcategory', fd.subcategory);
                formData.append('ticketDescreption', fd.ticketDescreption);
                console.log(formData);
                 document.getElementById("overlay").style.display = "block";


                fetch('TicketAction', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {

                    alert("Tickect created fuk  ");
                    document.getElementById("tickCreFro").reset();
                    shyowD(data);
                    countt(data);
                    const imageUrl = data.fileUrl;
                    console.log(data);
    //                const imageDisplay = document.getElementById('imageDisplay');
    //                imageDisplay.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
    //                
    //                const fileDisplay = document.getElementById('fileDisplay');
    //                fileDisplay.innerHTML = `<p>File uploaded: <a href="${imageUrl}" target="_blank">${file.name}</a></p>`;
                });
//                off();
                document.getElementById("overlay").style.display = "none";
            }else(alert("All feild must Filled"));
}


function logg(){
    
   
    console.log("helpdesk login");
//    if(checkIssueFeilds()){
    
        

        var parms = "api_key=49q34elLhliO6ebvZXf85xIWR6yIAFGe&user_name='tn.pacs@vidyaonline.in'&Password='Intellect@123'";
        console.log(parms);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "https://helpdesk.com/faveo/public/v3/api/login",true);
//        xhttp.open("POST", "https://helpdesk.productdemourl.com/faveo/public/v3/api/login",true);
//        xhttp.setRequestHeader("Content-type", "multipart/form-data");//application/x-www-form-urlencoded
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//application/x-www-form-urlencoded
        xhttp.send(parms);
//        xhttp.send(formData);
        xhttp.onload = function() {
            if (xhttp.status === 200) {
                console.log(this.responseText);
                alert("success");

                console.log(this.responseText);
                
            }else if (xhttp.status === 500){
                alert("fail");
            }
      
     
    
    
    }
    
}

  function olala(){
      document.getElementById('blankcon').style.display = "none";
//      document.getElementById('blankcon').
  }
