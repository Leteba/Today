function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("DigitalCLOCK").innerText = time;
  document.getElementById("DigitalCLOCK").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

function signup()
{
    document.querySelector(".signin-form").style.cssText = "display: none;";
    document.querySelector(".signup-form").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, #65dfc5,#6cdbeb);";
    document.querySelector(".btn-signup").style.cssText = "display: none";
    document.querySelector(".btn-signin").style.cssText = "display: block";

};

function signin()
{
    document.querySelector(".signup-form").style.cssText = "display: none;";
    document.querySelector(".signin-form").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, #65dfc5,#6cdbeb);";
    document.querySelector(".btn-signin").style.cssText = "display: none";
    document.querySelector(".btn-signup").style.cssText = "display: block";

};

//uploading file js

function ekUpload(){
    function Init() {
  
      console.log("Upload Initialised");
  
      var fileSelect    = document.getElementById('file-upload'),
          fileDrag      = document.getElementById('file-drag'),
          submitButton  = document.getElementById('submit-button');
  
      fileSelect.addEventListener('change', fileSelectHandler, false);
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // File Drop
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }
    function fileSelectHandler(e) {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
    
        // Cancel event and hover styling
        fileDragHover(e);
    
        // Process all File objects
        for (var i = 0, f; f = files[i]; i++) {
          parseFile(f);
          uploadFile(f);
        }
      }
      function output(msg) {
        // Response
        var m = document.getElementById('messages');
        m.innerHTML = msg;
      }
    
      function parseFile(file) {
    
        console.log(file.name);
        output(
          '<strong>' + encodeURI(file.name) + '</strong>'
        );
        }
        function fileDragHover(e) {
            var fileDrag = document.getElementById('file-drag');
        
            e.stopPropagation();
            e.preventDefault();
        
            fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
          }
        
          function fileSelectHandler(e) {
            // Fetch FileList object
            var files = e.target.files || e.dataTransfer.files;
        
            // Cancel event and hover styling
            fileDragHover(e);
        
            // Process all File objects
            for (var i = 0, f; f = files[i]; i++) {
              parseFile(f);
              uploadFile(f);
            }
          }
          var pdfName = file.name;

    var isGood = (/\.(?=pdf)/pdf).test(imageName);
    if (isGood) {
      document.getElementById('start').classList.add("hidden");
      document.getElementById('response').classList.remove("hidden");
      document.getElementById('ntfile').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image').classList.remove("hidden");
      document.getElementById('file-image').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image').classList.add("hidden");
      document.getElementById('ntfile').classList.remove("hidden");
      document.getElementById('start').classList.remove("hidden");
      document.getElementById('response').classList.add("hidden");
      document.getElementById("file-upload-form").reset();
    }
    
}

//article

function saveEdits() {
    var editElem = document.getElementById("edit");
    var userVersion = editElem.innerHTML;
    localStorage.userEdits = userVersion;
    document.getElementById("update").innerHTML="Edits saved!";
    
}

    function checkEdits() {
        if(localStorage.userEdits!=null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}