!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){const{app:t,globalShortcut:r,ipcMain:i,BrowserWindow:s,clipboard:o,Notification:a}=n(1),l=n(2),u=n(3),c=`tell application "QQ" to activate --QQ\ntell application "System Events"\n  tell process "QQ"\n    ${`do shell script "${e}/bin/cliclick c:."`}\n    keystroke "a" using command down\n    keystroke "c" using command down\n    delay 0.1\n  end tell\nend tell\n`;function d(e="",t="木易跟打器"){new a({title:t,body:e}).show()}const f=()=>{const n=new s({width:940,height:820,webPreferences:{preload:l.join(e,"preload.js"),devTools:!t.isPackaged}});return"darwin"===process.platform&&t.dock.setIcon(l.join(e,"../public/img/icons/logo-large.png")),i.on("set-grade",(e,n)=>{console.log(n),u.execString('\ntell application "QQ" to activate\ntell application "System Events" to tell application process "QQ"\n    keystroke tab\n    keystroke "a" using command down\n    click menu item "粘贴" of menu "编辑" of menu bar item "编辑" of menu bar 1\n    delay 0.1\n    key code 36\nend tell\n',e=>{e&&(console.error("sendingScript err",e),d(e.message||"Fail","发送成绩失败")),t.focus({steal:!0})})}),n.loadURL("https://typer.owenyang.top"),n.webContents.setWindowOpenHandler(({url:t})=>{if(t)return{action:"allow",overrideBrowserWindowOptions:{width:900,height:800,webPreferences:{preload:l.join(e,"preload.js")}}}}),n};t.whenReady().then(()=>{const e=f();t.on("activate",()=>{0===s.getAllWindows().length&&f()});r.register("F4",()=>{console.log("F4 is pressed"),u.execString(c,n=>{if(t.focus({steal:!0}),n){const t="暂时无法获取QQ赛文！！！请参考『帮助-关于-快速开始』完成初始设置：在『系统偏好设置-安全性与隐私-辅助功能』中，允许『木易跟打器』控制电脑；2.按下F4快捷键直接载文，即刻开始你的跟打之旅~";return d(n.message,"获取文本失败"),void e.webContents.send("update-paste",t)}e.webContents.send("update-paste",o.readText())})})||console.log("registration failed"),console.log("is F4 registered: "+r.isRegistered("F4"))}),t.on("window-all-closed",()=>{"darwin"!==process.platform&&t.quit()}),t.on("will-quit",()=>{r.unregister("F1"),r.unregisterAll()})}).call(this,"/")},function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("path")},function(e,t,n){var r=n(4).spawn;t.Parsers=n(5);var i=t.Parsers.parse;function s(e,n,s){var a=!1;Array.isArray(n)||(s=n,n=[],a=!0),n.push("-ss"),a||n.push(e);var l=r(t.osascript,n);o(l.stdout),o(l.stderr),l.on("exit",(function(t){var n,r=i(l.stdout.body);t&&((n=new Error(l.stderr.body)).appleScript=e,n.exitCode=t),s&&s(n,r,l.stderr.body)})),a&&(l.stdin.write(e),l.stdin.end())}function o(e){e.body="",e.setEncoding("utf8"),e.on("data",(function(t){e.body+=t}))}t.osascript="osascript",t.execFile=function(e,t,n){return Array.isArray(t)||(n=t,t=[]),s(e,t,n)},t.execString=function(e,t){return s(e,t)}},function(e,t){e.exports=require("child_process")},function(e,t){function n(){var e=this.value[this.index];switch(e){case"{":return t.ArrayParser.call(this);case'"':return t.StringParser.call(this);case"a":if("alias"==this.value.substring(this.index,this.index+5))return t.AliasParser.call(this);break;case"«":if("«data"==this.value.substring(this.index,this.index+5))return t.DataParser.call(this)}return isNaN(e)?t.UndefinedParser.call(this):t.NumberParser.call(this)}t.parse=function(e){if(0!=e.length)return n.call({value:e,index:0})},t.AliasParser=function(){return this.index+=6,"/Volumes/"+t.StringParser.call(this).replace(/:/g,"/")},t.ArrayParser=function(){for(var e=[],t=this.value[++this.index];"}"!=t;)e.push(n.call(this)),","==this.value[this.index]&&(this.index+=2),t=this.value[this.index];return this.index++,e},t.DataParser=function(){var e=t.UndefinedParser.call(this),n=(e=e.substring(6,e.length-1)).substring(0,4);e=e.substring(4,e.length);for(var r=new Buffer(e.length/2),i=0,s=0,o=e.length;s<o;s+=2)r[i++]=parseInt(e[s]+e[s+1],16);return r.type=n,r},t.NumberParser=function(){return Number(t.UndefinedParser.call(this))},t.StringParser=function(e){for(var t="",n=++this.index,r=this.value[n++];'"'!=r;)"\\"==r&&(t+=this.value.substring(this.index,n-1),this.index=n++),r=this.value[n++];return t+=this.value.substring(this.index,n-1),this.index=n,t};var r=/}|,|\n/;t.UndefinedParser=function(){for(var e=this.index,t=this.value[e++];!r.test(t);)t=this.value[e++];var n=this.value.substring(this.index,e-1);return this.index=e-1,n}}]);