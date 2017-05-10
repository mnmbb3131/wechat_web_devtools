"use strict";function init(){function e(e,r,t){r({errMsg:t?"getNetworkTypeSync:ok":"getNetworkType:ok",networkType:l.getNetworkType()})}function r(){var e=d.getCurrentProject(),r=h.getWebviewInfo(),t=void 0,o=void 0;"iOS"===r.os?(t=k,o=b):(t=w,o=m);var s=r.height-o;s-="iOS"===r.os?20:l.getStatusBarHeight();var i=!1;try{var n=h.getCurrentWebviewUrl(),a=f.parse(n);a=a.pathname.replace(/^\//,"").replace(/\.html$/,""),i=p.isTabBar(e,a)}catch(e){S.error("deviceSdk.js _getSystemInfo check isTabBar error:"+e+", route:"+url)}return i&&(s-=t),{model:r.model,pixelRatio:r.dpr,screenWidth:r.width,screenHeight:r.height,windowWidth:r.width,windowHeight:s,system:"iOS"===r.os?"iOS 10.0.1":"Android 5.0",language:"zh_CN",version:"6.5.6"}}function t(e,t,o){var s=r();s.errMsg="getSystemInfo:ok",t(s)}function o(e,t,o){var s=r();s.errMsg="getSystemInfoSync:ok",t(s)}function s(r,t){e(r,t,!0)}function i(e,r){var t=e.args.phoneNumber;y("拨打 "+t+"?【仅为模拟】",function(e){r(e?{errMsg:"makePhoneCall:ok"}:{errMsg:"makePhoneCall:cancel"})})}function n(e,r){var t=e.args,o=h.getSensorStatus();o.accelerometer=t.enable,h.setSensorStatus(o),r({errMsg:"enableAccelerometer:ok"})}function a(e,r){r({errMsg:"enableCompass:ok"})}function g(e,r){var t=h.getDeviceBrightness();r({errMsg:"getScreenBrightness:ok",value:t})}function c(e,r){var t=parseFloat(e.args.value);return isNaN(t)?void r({errMsg:"setScreenBrightness:fail error parameter"}):(h.setDeviceBrightness(t),void r({errMsg:"setScreenBrightness:ok"}))}var u=(require("../../actions/webviewActions.js"),require("../../actions/windowActions.js")),l=require("../../stores/webviewStores.js"),h=require("../../stores/windowStores.js"),d=require("../../stores/projectStores.js"),p=require("../../weapp/utils/projectManager.js"),S=require("../log/log.js"),f=require("url"),v=(require("path"),require("../../config/weappConfig.js")),w=v.default_android_tabbar_height,m=v.default_android_titlebar_height,k=v.default_ios_tabbar_height,b=v.default_ios_titlebar_height,y=function(e,r){u.showSimulatorConfirm({content:e,callback:r})};_exports={getSystemInfoSync:o,getSystemInfo:t,getNetworkType:e,getNetworkTypeSync:s,makePhoneCall:i,enableAccelerometer:n,enableCompass:a,getScreenBrightness:g,setScreenBrightness:c}}var _exports;init(),module.exports=_exports;