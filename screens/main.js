var ipcRenderer = require('electron').ipcRenderer;
const data = 'ready';
ipcRenderer.send('readyfor_css', data);
ipcRenderer.on('css_filename', function(event, arg) { 
    console.log(arg); 
    //Display data
  });
