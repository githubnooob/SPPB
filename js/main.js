function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
  function dropHandler(ev) {

    var classFile1= "list-group-item list-group-item-action eachFile"; 
    var uploadIcon = document.getElementsByClassName('uploadIcon')[0]; 
    console.log('File(s) dropped');
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          let fileRef = document.getElementsByClassName('fileContainer')[0];
          console.log(fileRef);
          let anchorTag = document.createElement('a'); 
          anchorTag.setAttribute('href',"#");
          anchorTag.setAttribute('class',classFile1)
          fileRef.style.visibility='visible';
          uploadIcon.style.display='none';
          anchorTag.innerHTML=file.name; 
          fileRef.appendChild(anchorTag);
          console.log('... file[' + i + '].name = ' + file.name);

        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
    // Pass event to removeDragData for cleanup
    removeDragData(ev)
  }
  function removeDragData(ev) {
    console.log('Removing drag data')
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  }