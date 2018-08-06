// run 'electron ./js/skintest.js' to test

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


let calculatorscreen;
let salesscreen;
let skinfile;
skinfile = '';


app.on('ready', function(){
    // create new window
    calculatorscreen = new BrowserWindow({});
    salesscreen = new BrowserWindow({width:1024, height:768, autoHideMenuBar:true, kiosk:true});
    // Load html file into window
    calculatorscreen.loadURL(url.format({
        pathname: path.join(__dirname, '../screens/calc.html'),
        protocol:'file:',
        slashes: true
    }))
    salesscreen.loadURL(url.format({
        pathname: path.join(__dirname, '../screens/sale.html'),
        protocol:'file',
        slashes:true
    }))
    ;


    // quit app when shoppinglistWindow is closed
    calculatorscreen.on('closed', function () {
        app.quit();
    });
});