// run 'electron ./js/skin.js' to test

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

var ipcMain = require('electron').ipcMain;

var manData = '';

ipcMain.on('readyfor_css', function(event, arg) {
    console.log(arg);
    manData = 'css filename';
    //do child process or other data manipulation and name it manData
    event.sender.send('css_filename', manData);
  });


let calculator;
let skinfile;
skinfile = '';


app.on('ready', function(){
    // create new window
    calculator = new BrowserWindow({});
    // Load html file into window
    calculator.loadURL(url.format({
        pathname: path.join(__dirname, '../screens/calculator.html'),
        protocol:'file:',
        slashes: true
    }));


    // quit app when shoppinglistWindow is closed
    calculator.on('closed', function () {
        app.quit();
    });
});