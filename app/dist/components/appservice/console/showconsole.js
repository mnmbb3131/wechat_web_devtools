"use strict";function init(){function e(e,o){var n=o,r=n.file,c=n.msg;e.executeScript({code:'console.group("'+new Date+' js 文件，编译错误")\n        console.error(`'+r+"\n"+c+"`)\n      console.groupEnd()"})}function o(e,o){var n=o.target.src,r=S.parse(n),c=r.pathname.replace(/html$/,"wxml"),s=B[o.level],t=(o.message||"").replace(h,"").replace(/\"/g,'\\"');e.executeScript({code:'console.group("'+new Date+" "+c+'")\n        console.'+s+'("'+t+'")\n      console.groupEnd()'})}function n(e,o){var n=JSON.parse(decodeURIComponent(o.replace(L,""))),r=n.file,c=n.msg.replace(/\`/g,"'");e.executeScript({code:'console.group("'+new Date+' wxml 文件，编译错误")\n        console.error(`'+r+"\n"+c+"`)\n      console.groupEnd()"})}function r(e,o){var n=o.file,r=o.msg;e.executeScript({code:'console.group("'+new Date+' 读取 app.json 错误")\n        console.error(`'+n+"\n"+r+"`)\n      console.groupEnd()"})}function c(e,o){var n=o.file,r=o.msg;e.executeScript({code:'console.group("'+new Date+' 读取入口页面错误")\n        console.error(`'+n+"\n"+r+"`)\n      console.groupEnd()"})}function s(e,o){var n=o.file,r=o.msg;e.executeScript({code:'console.group("'+new Date+' parse json 错误")\n        console.error(`'+n+"\n"+r+"`)\n      console.groupEnd()"})}function t(e,o){var n=o.file,r=o.msg;e.executeScript({code:'console.group("'+new Date+' json 内容错误")\n        console.error(`'+n+"\n"+r+"`)\n      console.groupEnd()"})}function l(e,o){var n=o.file,r=o.msg,c=n.replace(/\.js$/,"");e.executeScript({code:'console.group("'+new Date+" 未找到配置在 app.json 中的 "+c+' 页面")\n        console.error(`app.json\n'+r+"`)\n      console.groupEnd()"})}function p(e,o){e.executeScript({code:'console.group("'+new Date+' 当前页面未配置")\n        console.error(`'+o.replace(W,"")+"`)\n      console.groupEnd()"})}function u(e,o){var n=f.parseWXMLRuntimeErr(o);if(n){var r=B[o.level],c=r;"warn"===c&&(c="warning"),e.executeScript({code:'console.group("'+new Date+" WXML Runtime "+c+'")\n        console.'+r+"(`"+n.file+"`)\n        console."+r+"(`"+n.msg+"`)\n      console.groupEnd()"})}}function a(e,o){var n=o.message,r=o.level;if(2===r){B[o.level];e.executeScript({code:'console.group("'+new Date+' 渲染层错误")\n        console.error(`'+n+"`)\n      console.groupEnd()"})}}function i(e,o){e.executeScript({code:'console.group("'+new Date+' wxss 文件，编译错误")\n        console.error(`'+o.file+"\n"+o.msg+"`)\n      console.groupEnd()"})}function E(e,o){e.executeScript({code:'console.group("'+new Date+' wxss 文件，编译错误")\n        console.error(`'+o.file+"\n"+o.msg+"`)\n      console.groupEnd()"})}function g(e,o){var n=decodeURIComponent(o.message).replace(O,"");e.executeScript({code:'console.group("'+new Date+' wxml 文件，编译错误")\n        console.error(`'+n+"`)\n      console.groupEnd()"})}function R(e,o){var n=o.details,r=n.type,c=n.url,s="image"===r&&c.indexOf("do-not-use-local-path-")>-1,t="",l="",p="";if(s){var u=c.replace(/.*do-not-use-local-path-/,""),a=u.split("&"),i=a[0].replace("./",""),E=parseInt(a[1]),g=parseInt(a[2]),R=m.getCurrentProject();w.getFile(R,i,function(o,n){if(o)return void log.error("showconsole.js showWebviewNetworkError "+o.toString());n=n.toString(),l=i+" 中的本地资源图片无法通过 WXSS 获取，可以使用网络图片，或者 base64，或者使用<image/>标签。请参考文档：\n  https://mp.weixin.qq.com/debug/wxadoc/dev/qa.html#%E6%9C%AC%E5%9C%B0%E8%B5%84%E6%BA%90%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87-css-%E8%8E%B7%E5%8F%96";var r=_(n,E,g);e.executeScript({code:'console.group("'+new Date+' 渲染层网络层错误")\n            console.error(`'+l+"\n"+r+"`)\n          console.groupEnd()"})})}else t=n.error||"the server responded with a status of "+n.statusCode+" ("+n.statusLine+")",l="Failed to load "+n.type+" "+n.url+" : "+t+" ",p=n.ip?"From server "+n.ip:"",e.executeScript({code:'console.group("'+new Date+' 渲染层网络层错误")\n          console.error(`'+l+"\n"+p+"`)\n        console.groupEnd()"})}var d=require("../../../config/config.js"),f=require("../../../weapp/utils/parseErr.js"),S=require("url"),w=require("../../../weapp/utils/projectManager.js"),m=require("../../../stores/projectStores.js"),_=require("babel-code-frame");_exports={};var x=d.WEBVIEW_NETWORK_ERROR,O=d.WXML_LOSE_ERROR,v=d.WXSS_IMPORT_ERROR,D=d.WXSS_ERROR,j=d.WEBVIEW_ERROR,N=d.JSON_ENTRANCE_ERROR,W=d.PAGE_DEFINE_ERROR,I=d.PAGEJS_FILE_ERROR,h=d.COMPONENT_FOR_DEVELOPER,C=d.ES6_ERROR,L=d.WXML_ERROR,q=d.JSON_FILE_ERROR,F=d.JSON_PARSE_ERROR,M=d.WXML_RUNTIME_ERROR,A=d.JSON_CONTENT_ERROR,B={"-1":"debug",0:"info",1:"warn",2:"error"};_exports=function(d,f,S){f===h?o(d,S):f===L?n(d,S):f===C?e(d,S):f===q?r(d,S):f===F?s(d,S):f===I?l(d,S):f===W?p(d,S):f===M?u(d,S):f===N?c(d,S):f===j?a(d,S):f===D?i(d,S):f===v?E(d,S):f===O?g(d,S):f===A?t(d,S):f===x&&R(d,S)}}var _exports;init(),module.exports=_exports;