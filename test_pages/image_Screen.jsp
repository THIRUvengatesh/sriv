<%-- 
    Document   : image_Screen
    Created on : 04-Apr-2024, 11:18:18 pm
    Author     : VENKI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<script src="js/test/test_imageScreen_js.js"></script>

<div>
<!--    <form id="imagrform" >
    <form id="imagrform" action="TestImageAction" method="post"  enctype="multipart/form-data">
        <input id="fileId" type="file" name="file">
        <input id="filename" name="filename">
        <input type="button" 
               onclick="upL()"
               value="Upload"
               >
    </form>-->
    


<form enctype="multipart/form-data">
        <input type="file" id="fileInput">
        <button type="button" onclick="uploadFile()">Upload</button>
    </form>
    <div id="fileDisplay"></div>










    <!--<input type="button" value="download" onclick="downloadFileFromServlet()">-->
    
</div>
<!--
<h2>Upload Image with Parameters</h2>

<form id="uploadForm">
    <div>
        <label for="imageFile">Select Image File:</label>
        <input type="file" id="imageFile" name="image">
    </div>
    <div>
        <label for="param1">Parameter 1:</label>
        <input type="text" id="param1" name="param1">
    </div>
    <div>
        <label for="param2">Parameter 2:</label>
        <input type="text" id="param2" name="param2">
    </div>
    <button type="submit">Upload</button>
</form>

<script>
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData();
    var fileInput = document.getElementById('imageFile');
    var file = fileInput.files[0];
//    formData.append('image', file);
    formData.append('param1', document.getElementById('param1').value);
    formData.append('param2', document.getElementById('param2').value);
    console.log(formData);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'Teat1', true);
    xhr.onload = function() {
            console.log('Upload successful!');
            console.log(xhr.responseText); // Response from server
        }   

    xhr.send(formData);
});
</script>-->