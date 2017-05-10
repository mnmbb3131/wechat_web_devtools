"use strict";function init(){var e=require("../../lib/react.js"),t=require("../../cssStr/cssStr.js"),a=require("../../stores/windowStores.js"),r=require("../../actions/windowActions.js"),n=require("../../actions/webviewActions.js"),s=require("../../stores/projectStores.js"),i=require("../../stores/configStores.js"),o=require("url"),c=require("querystring"),u=e.createClass({displayName:"WebviewBackwardMask",getInitialState:function(){return{lazyLoaded:!1,show:!1,sceneData:i.getSceneConfig()}},_appEnterBackground:function(){this.setState({lazyLoaded:!0,show:!0})},_appEnterForeground:function(){this.setState({show:!1})},_onSceneConfigChange:function(e){this.setState({sceneData:e})},componentDidMount:function(){a.on("APP_ENTER_BACKGROUND",this._appEnterBackground),a.on("APP_ENTER_FOREGROUND",this._appEnterForeground),i.on("SCENE_CONFIG_CHANGE",this._onSceneConfigChange)},componentWillUnmount:function(){a.removeListener("APP_ENTER_BACKGROUND",this._appEnterBackground),a.removeListener("APP_ENTER_FOREGROUND",this._appEnterForeground),i.removeListener("SCENE_CONFIG_CHANGE",this._onSceneConfigChange)},onItemClick:function(e){var t=e.currentTarget.dataset,u=parseInt(t.scene),l=s.getCurrentProject(),d="";try{var p=a.getCurrentWebviewUrl(),m=o.parse(p);d=m.pathname.replace(/^\//,"")}catch(e){}var h=void 0,E=void 0;if(u==i.getMiniProgramScene()){if(h={},l.initPath.enable&&(l.initPath.appid&&(h.appId=l.initPath.appid),l.initPath.referData))try{h.extraData=JSON.parse(l.initPath.referData)}catch(e){}}else if(u==i.getGroupScene()&&(E={},l.initPath.enable)){var g=l.initPath.groupInfo;g&&(E.shareKey=g.shareKey,E.userName=g.shareName)}r.appEnterForeground({scene:u}),n.postMessageToAS({eventName:"onAppRunningStatusChange",data:{status:"active"}}),n.postMessageToAS({eventName:"onAppEnterForeground",data:{scene:u,path:d||"",referrerInfo:h,query:c.parse(m.query||"")},type:"ON_APPLIFECYCLE_EVENT"})},render:function(){if(!this.state.lazyLoaded)return null;var a=this.state.sceneData,r=this.state.show?t.displayBlock:t.displayNone,n=[];for(var s in a)n.push(e.createElement("div",{className:"simulator-backward-item","data-scene":s,onClick:this.onItemClick},e.createElement("p",null,s+": "+a[s])));return e.createElement("div",{style:r,className:"simulator-backward-mask"},e.createElement("div",{className:"simulator-backward-dialog"},e.createElement("div",{className:"simulator-backward-dialog-hd"},e.createElement("p",null,"已转为后台运行，可通过以下方式返回前台运行")),e.createElement("div",{className:"simulator-backward-dialog-bd"},e.createElement("div",{className:"simulator-backward-list"},n))))}});_exports=u}var _exports;init(),module.exports=_exports;