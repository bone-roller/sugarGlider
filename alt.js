const electron = require("electron");
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

// set env
// process.env.NODE_ENV = 'production';

let POSWindow;

app.on('ready', function() {
    // create new window
    POSWindow = new BrowserWindow({width:1024, height:768, autoHideMenuBar:true, kiosk:true});
    // load html into window
    POSWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'POSWindow.html'),
        protocol:'file',
        slashes: true
    }));
    // quit app when window is closed
    POSWindow.on('closed', function() {
        app.quit();
    });
    
});