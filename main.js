const {app,BrowserWindow,shell}=require('electron');
function win(){const w=new BrowserWindow({width:1240,height:900,minWidth:420,minHeight:500,title:'Sand to Silicon',backgroundColor:'#0a0c22',webPreferences:{contextIsolation:true,nodeIntegration:false}});
w.loadFile('index.html');w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:'deny'}})}
app.whenReady().then(()=>{win();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)win()})});
app.on('window-all-closed',()=>app.quit());
