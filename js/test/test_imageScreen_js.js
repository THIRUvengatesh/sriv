function upL(){
     console.log("entry");
       var formData = new FormData();
        var fileInput = document.getElementById('fileId');
        var file = fileInput.files[0];
        formData.append('image', file);
        formData.append('filename', document.getElementById('filename').value);
        
        console.log(formData);
        var formData2 = new FormData(imagrform);
        var files =  document.getElementById('fileId');
        if (files.files.length === 0) {
                alert('Please select a file.');
                return;
            }
        formData2.append("parameterName", "parameterValue");
        // output as an object
        var fd = Object.fromEntries(formData2);
        var params = "filename="+document.getElementById('fileId').value+"&action=act";
        console.log(params);
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "TestImageAction",true);
        xhttp.setRequestHeader("Content-type", "multipart/form-data");
        xhttp.setRequestHeader("Content-type", "multipart/form-data");
//        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);
        xhttp.onload = function() {
          console.log(this.responceText);  
        };
    
}

    function uploadImage2() {
            const fileInput = document.getElementById('fileInput');
            const fileNmae = document.getElementById('fileName').value;
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append('image', file);
            formData.append('name', fileNmae);

            fetch('ImageUploadServlet', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.imageUrl;
                const fileUrl = data.fileUrl;
                const fileDisplay = document.getElementById('fileDisplay');
//                imageDisplay.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
//                
//                const fileDisplay = document.getElementById('fileDisplay');
                fileDisplay.innerHTML = `<p>File uploaded: <a href="${fileUrl}" target="_blank">${file.name}</a></p>`;
//                imageDisplay.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
           
            });
//            .catch(error => console.error('Error:', error));
        }


        function uploadFile() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append('file', file);

            fetch('ImageUploadServlet', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const fileUrl = data.fileUrl;
                console.log(fileUrl);
                const fileDisplay = document.getElementById('fileDisplay');
                console.log(fileDisplay);
                
                fileDisplay.innerHTML = `<p>File uploaded: <a href="${fileUrl}" target="_blank">${file.name}</a></p>`;
            });
//            .catch(error => console.error('Error:', error));
        }