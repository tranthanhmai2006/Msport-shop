/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */(function($,document2,undefined2){var pluses=/\+/g;function raw(s){return s}function decoded(s){return decodeURIComponent(s.replace(pluses," "))}var config=$.cookie=function(key,value,options){if(value!==undefined2){if(options=$.extend({},config.defaults,options),value===null&&(options.expires=-1),typeof options.expires=="number"){var days=options.expires,t=options.expires=new Date;t.setDate(t.getDate()+days)}return value=config.json?JSON.stringify(value):String(value),document2.cookie=[encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}for(var decode=config.raw?raw:decoded,cookies=document2.cookie.split("; "),i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");if(decode(parts.shift())===key){var cookie=decode(parts.join("="));return config.json?JSON.parse(cookie):cookie}}return null};config.defaults={},$.removeCookie=function(key,options){return $.cookie(key)!==null?($.cookie(key,null,options),!0):!1}})(jQuery,document);/*!
Countdown
*/jQuery(document).ready(function($){$.fn.ENGO_CountDown=function(options){return this.each(function(){new $.ENGO_CountDown(this,options)})},$.ENGO_CountDown=function(obj,options){if(this.options=$.extend({autoStart:!0,LeadingZero:!0,DisplayFormat:"<div><span>%%D%%</span> Days</div><div><span>%%H%%</span> Hours</div><div><span>%%M%%</span> Mins</div><div><span>%%S%%</span> Secs</div>",FinishMessage:"Expired",CountActive:!0,TargetDate:null},options||{}),!(this.options.TargetDate==null||this.options.TargetDate=="")){this.timer=null,this.element=obj,this.CountStepper=-1,this.CountStepper=Math.ceil(this.CountStepper),this.SetTimeOutPeriod=(Math.abs(this.CountStepper)-1)*1e3+990;var dthen=new Date(this.options.TargetDate),dnow=new Date;this.CountStepper>0?ddiff=new Date(dnow-dthen):ddiff=new Date(dthen-dnow),gsecs=Math.floor(ddiff.valueOf()/1e3),this.CountBack(gsecs,this)}},$.ENGO_CountDown.fn=$.ENGO_CountDown.prototype,$.ENGO_CountDown.fn.extend=$.ENGO_CountDown.extend=$.extend,$.ENGO_CountDown.fn.extend({calculateDate:function(secs,num1,num2){var s=(Math.floor(secs/num1)%num2).toString();return this.options.LeadingZero&&s.length<2&&(s="0"+s),"<b>"+s+"</b>"},CountBack:function(secs,self){if(secs<0){self.element.innerHTML='<div class="labelexpired"> '+self.options.FinishMessage+"</div>";return}clearInterval(self.timer),DisplayStr=self.options.DisplayFormat.replace(/%%D%%/g,self.calculateDate(secs,86400,1e5)),DisplayStr=DisplayStr.replace(/%%H%%/g,self.calculateDate(secs,3600,24)),DisplayStr=DisplayStr.replace(/%%M%%/g,self.calculateDate(secs,60,60)),DisplayStr=DisplayStr.replace(/%%S%%/g,self.calculateDate(secs,1,60)),self.element.innerHTML=DisplayStr,self.options.CountActive&&(self.timer=null,self.timer=setTimeout(function(){self.CountBack(secs+self.CountStepper,self)},self.SetTimeOutPeriod))}}),$(document).ready(function(){$('[data-countdown="section-countdown"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:'<li class="list-inline-item mr-0"> <p class="mb-0">%%D%%</p> <span>day</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%H%%</p> <span>hours</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%M%%</p> <span>mins</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%S%%</p> <span>secs</span> </li>',FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="section-countdown-v2"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:'<li class="list-inline-item mr-0"> <p class="mb-0">%%D%%</p> <span>day</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%H%%</p> <span>hours</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%M%%</p> <span>mins</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%S%%</p> <span>secs</span> </li>',FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="countdown"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<div class=\"countdown-times\"><div class=\"day distance\"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class=\"hours distance\"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class=\"minutes distance\"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class=\"seconds distance\"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>",FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="countdown-hd-1"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<div class=\"countdown-times\"><div class=\"day distance\"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class=\"hours distance\"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class=\"minutes distance\"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class=\"seconds distance\"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>",FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="countdown-hd-2"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<div class=\"countdown-times\"><div class=\"day distance\"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class=\"hours distance\"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class=\"minutes distance\"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class=\"seconds distance\"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>",FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="countdown-hd-3"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<div class=\"countdown-times\"><div class=\"day distance\"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class=\"hours distance\"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class=\"minutes distance\"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class=\"seconds distance\"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>",FinishMessage:"Expired"})})}),$(document).ready(function(){$('[data-countdown="countdown-v1"]').each(function(index,el){var $this=$(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:'<li><span id="days">%%D%%</span>Days</li><li><span id="hours">%%H%%</span>Hours</li><li><span id="minutes">%%M%%</span>Mins</li><li><span id="seconds">%%S%%</span>Sec</li>',FinishMessage:"Expired"})})})});/*!
History  
*/typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e2){var t=meta[e2];return typeof t=="string"?t:"\\u"+("0000"+e2.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];switch(a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";if(gap+=indent,u=[],Object.prototype.toString.apply(a)==="[object Array]"){for(s=a.length,n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object")for(s=rep.length,n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;if(gap="",indent="",typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);if(rep=t,!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==void 0?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e2,t2,n2){r(e2).bind(t2,n2)},trigger:function(e2,t2,n2){r(e2).trigger(t2,n2)},extractEventData:function(e2,n2,r2){var i=n2&&n2.originalEvent&&n2.originalEvent[e2]||r2&&r2[e2]||t;return i},onDomLoad:function(e2){r(e2)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e2){var t2=o.getHashByIndex(),n2;return n2=e2===t2,n2},o.isHashEqual=function(e2,t2){return e2=encodeURIComponent(e2).replace(/%25/g,"%"),t2=encodeURIComponent(t2).replace(/%25/g,"%"),e2===t2},o.saveHash=function(e2){return o.isLastHash(e2)?!1:(o.savedHashes.push(e2),!0)},o.getHashByIndex=function(e2){var t2=null;return typeof e2=="undefined"?t2=o.savedHashes[o.savedHashes.length-1]:e2<0?t2=o.savedHashes[o.savedHashes.length+e2]:t2=o.savedHashes[e2],t2},o.discardedHashes={},o.discardedStates={},o.discardState=function(e2,t2,n2){var r2=o.getHashByState(e2),i2;return i2={discardedState:e2,backState:n2,forwardState:t2},o.discardedStates[r2]=i2,!0},o.discardHash=function(e2,t2,n2){var r2={discardedHash:e2,backState:n2,forwardState:t2};return o.discardedHashes[e2]=r2,!0},o.discardedState=function(e2){var t2=o.getHashByState(e2),n2;return n2=o.discardedStates[t2]||!1,n2},o.discardedHash=function(e2){var t2=o.discardedHashes[e2]||!1;return t2},o.recycleState=function(e2){var t2=o.getHashByState(e2);return o.discardedState(e2)&&delete o.discardedStates[t2],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t2="",r2,i2,u,a,f2=!!o.getHash();return o.isInternetExplorer()?(r2="historyjs-iframe",i2=n.createElement("iframe"),i2.setAttribute("id",r2),i2.setAttribute("src","#"),i2.style.display="none",n.body.appendChild(i2),i2.contentWindow.document.open(),i2.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n2=o.getHash(),r3=o.getHash(i2.contentWindow.document);return n2!==t2?(t2=n2,r3!==n2&&(u=r3=n2,i2.contentWindow.document.open(),i2.contentWindow.document.close(),i2.contentWindow.document.location.hash=o.escapeHash(n2)),o.Adapter.trigger(e,"hashchange")):r3!==u&&(u=r3,f2&&r3===""?o.back():o.setHash(r3,!1)),a=!1,!0}):o.checkerFunction=function(){var n2=o.getHash()||"";return n2!==t2&&(t2=n2,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t2){var n2=t2&&t2.newURL||o.getLocationHref(),r2=o.getHashByUrl(n2),i2=null,s2=null,u=null,a;return o.isLastHash(r2)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r2),r2&&o.isTraditionalAnchor(r2)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i2=o.extractState(o.getFullUrl(r2||o.getLocationHref()),!0),o.isLastSavedState(i2)?(o.busy(!1),!1):(s2=o.getHashByState(i2),a=o.discardedState(i2),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i2.data,i2.title,encodeURI(i2.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t2,n2,r2,i2){if(r2=encodeURI(r2).replace(/%25/g,"%"),o.getHashByUrl(r2))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i2!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i2}),!1;o.busy(!0);var s2=o.createStateObject(t2,n2,r2),u=o.getHashByState(s2),a=o.getState(!1),f2=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s2.id;return o.storeState(s2),o.expectedStateId=s2.id,o.recycleState(s2),o.setTitle(s2),u===f2?(o.busy(!1),!1):(o.saveState(s2),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t2,n2,r2,i2){if(r2=encodeURI(r2).replace(/%25/g,"%"),o.getHashByUrl(r2))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i2!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i2}),!1;o.busy(!0);var s2=o.createStateObject(t2,n2,r2),u=o.getHashByState(s2),a=o.getState(!1),f2=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s2,l),u===f2?(o.storeState(s2),o.expectedStateId=s2.id,o.recycleState(s2),o.setTitle(s2),o.saveState(s2),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s2.data,s2.title,s2.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f2=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}if(l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode,typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e2){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;if(h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e2,t2=h.intervalList;if(typeof t2!="undefined"&&t2!==null){for(e2=0;e2<t2.length;e2++)f2(t2[e2]);h.intervalList=null}},h.debug=function(){h.options.debug&&h.log.apply(h,arguments)},h.log=function(){var e2=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t2=r.getElementById("log"),i2,s2,o2,u2,a2;for(e2?(u2=Array.prototype.slice.call(arguments),i2=u2.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i2,u2]):n.log.apply(n,[i2,u2])):i2="\n"+arguments[0]+"\n",s2=1,o2=arguments.length;s2<o2;++s2){if(a2=arguments[s2],typeof a2=="object"&&typeof l!="undefined")try{a2=l.stringify(a2)}catch(f3){}i2+="\n"+a2+"\n"}return t2?(t2.value+=i2+"\n-----\n",t2.scrollTop=t2.scrollHeight-t2.clientHeight):e2||c(i2),!0},h.getInternetExplorerMajorVersion=function(){var e2=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){for(var e3=3,t2=r.createElement("div"),n2=t2.getElementsByTagName("i");(t2.innerHTML="<!--[if gt IE "+ ++e3+"]><i></i><![endif]-->")&&n2[0];);return e3>4?e3:!1}();return e2},h.isInternetExplorer=function(){var e2=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:!!h.getInternetExplorerMajorVersion();return e2},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:!!(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:!!(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:!!(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:!!(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:!!(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e2){for(var t2 in e2)if(e2.hasOwnProperty(t2))return!1;return!0},h.cloneObject=function(e2){var t2,n2;return e2?(t2=l.stringify(e2),n2=l.parse(t2)):n2={},n2},h.getRootUrl=function(){var e2=r.location.protocol+"//"+(r.location.hostname||r.location.host);return r.location.port&&(e2+=":"+r.location.port),e2+="/",e2},h.getBaseHref=function(){var e2=r.getElementsByTagName("base"),t2=null,n2="";return e2.length===1&&(t2=e2[0],n2=t2.href.replace(/[^\/]+$/,"")),n2=n2.replace(/\/+$/,""),n2&&(n2+="/"),n2},h.getBaseUrl=function(){var e2=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e2},h.getPageUrl=function(){var e2=h.getState(!1,!1),t2=(e2||{}).url||h.getLocationHref(),n2;return n2=t2.replace(/\/+$/,"").replace(/[^\/]+$/,function(e3,t3,n3){return/\./.test(e3)?e3:e3+"/"}),n2},h.getBasePageUrl=function(){var e2=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e3,t2,n2){return/[^\/]$/.test(e3)?"":e3}).replace(/\/+$/,"")+"/";return e2},h.getFullUrl=function(e2,t2){var n2=e2,r2=e2.substring(0,1);return t2=typeof t2=="undefined"?!0:t2,/[a-z]+\:\/\//.test(e2)||(r2==="/"?n2=h.getRootUrl()+e2.replace(/^\/+/,""):r2==="#"?n2=h.getPageUrl().replace(/#.*/,"")+e2:r2==="?"?n2=h.getPageUrl().replace(/[\?#].*/,"")+e2:t2?n2=h.getBaseUrl()+e2.replace(/^(\.\/)+/,""):n2=h.getBasePageUrl()+e2.replace(/^(\.\/)+/,"")),n2.replace(/\#$/,"")},h.getShortUrl=function(e2){var t2=e2,n2=h.getBaseUrl(),r2=h.getRootUrl();return h.emulated.pushState&&(t2=t2.replace(n2,"")),t2=t2.replace(r2,"/"),h.isTraditionalAnchor(t2)&&(t2="./"+t2),t2=t2.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t2},h.getLocationHref=function(e2){return e2=e2||r,e2.URL===e2.location.href?e2.location.href:e2.location.href===decodeURIComponent(e2.URL)?e2.URL:e2.location.hash&&decodeURIComponent(e2.location.href.replace(/^[^#]+/,""))===e2.location.hash||e2.URL.indexOf("#")==-1&&e2.location.href.indexOf("#")!=-1?e2.location.href:e2.URL||e2.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e2,t2){typeof e2=="undefined"&&(e2=!0),typeof t2=="undefined"&&(t2=!0);var n2=h.getLastSavedState();return!n2&&t2&&(n2=h.createStateObject()),e2&&(n2=h.cloneObject(n2),n2.url=n2.cleanUrl||n2.url),n2},h.getIdByState=function(e2){var t2=h.extractId(e2.url),n2;if(!t2)if(n2=h.getStateString(e2),typeof h.stateToId[n2]!="undefined")t2=h.stateToId[n2];else if(typeof h.store.stateToId[n2]!="undefined")t2=h.store.stateToId[n2];else{for(;t2=new Date().getTime()+String(Math.random()).replace(/\D/g,""),!(typeof h.idToState[t2]=="undefined"&&typeof h.store.idToState[t2]=="undefined"););h.stateToId[n2]=t2,h.idToState[t2]=e2}return t2},h.normalizeState=function(e2){var t2,n2;return(!e2||typeof e2!="object")&&(e2={}),typeof e2.normalized!="undefined"?e2:((!e2.data||typeof e2.data!="object")&&(e2.data={}),t2={},t2.normalized=!0,t2.title=e2.title||"",t2.url=h.getFullUrl(e2.url?e2.url:h.getLocationHref()),t2.hash=h.getShortUrl(t2.url),t2.data=h.cloneObject(e2.data),t2.id=h.getIdByState(t2),t2.cleanUrl=t2.url.replace(/\??\&_suid.*/,""),t2.url=t2.cleanUrl,n2=!h.isEmptyObject(t2.data),(t2.title||n2)&&h.options.disableSuid!==!0&&(t2.hash=h.getShortUrl(t2.url).replace(/\??\&_suid.*/,""),/\?/.test(t2.hash)||(t2.hash+="?"),t2.hash+="&_suid="+t2.id),t2.hashedUrl=h.getFullUrl(t2.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t2)&&(t2.url=t2.hashedUrl),t2)},h.createStateObject=function(e2,t2,n2){var r2={data:e2,title:t2,url:n2};return r2=h.normalizeState(r2),r2},h.getStateById=function(e2){e2=String(e2);var n2=h.idToState[e2]||h.store.idToState[e2]||t;return n2},h.getStateString=function(e2){var t2,n2,r2;return t2=h.normalizeState(e2),n2={data:t2.data,title:e2.title,url:e2.url},r2=l.stringify(n2),r2},h.getStateId=function(e2){var t2,n2;return t2=h.normalizeState(e2),n2=t2.id,n2},h.getHashByState=function(e2){var t2,n2;return t2=h.normalizeState(e2),n2=t2.hash,n2},h.extractId=function(e2){var t2,n2,r2,i2;return e2.indexOf("#")!=-1?i2=e2.split("#")[0]:i2=e2,n2=/(.*)\&_suid=([0-9]+)$/.exec(i2),r2=n2&&n2[1]||e2,t2=n2?String(n2[2]||""):"",t2||!1},h.isTraditionalAnchor=function(e2){var t2=!/[\/\?\.]/.test(e2);return t2},h.extractState=function(e2,t2){var n2=null,r2,i2;return t2=t2||!1,r2=h.extractId(e2),r2&&(n2=h.getStateById(r2)),n2||(i2=h.getFullUrl(e2),r2=h.getIdByUrl(i2)||!1,r2&&(n2=h.getStateById(r2)),!n2&&t2&&!h.isTraditionalAnchor(e2)&&(n2=h.createStateObject(null,null,i2))),n2},h.getIdByUrl=function(e2){var n2=h.urlToId[e2]||h.store.urlToId[e2]||t;return n2},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e2){var t2=!1,n2;return n2=h.extractState(e2.url),t2=n2&&n2.id!==e2.id,t2},h.storeState=function(e2){return h.urlToId[e2.url]=e2.id,h.storedStates.push(h.cloneObject(e2)),e2},h.isLastSavedState=function(e2){var t2=!1,n2,r2,i2;return h.savedStates.length&&(n2=e2.id,r2=h.getLastSavedState(),i2=r2.id,t2=n2===i2),t2},h.saveState=function(e2){return h.isLastSavedState(e2)?!1:(h.savedStates.push(h.cloneObject(e2)),!0)},h.getStateByIndex=function(e2){var t2=null;return typeof e2=="undefined"?t2=h.savedStates[h.savedStates.length-1]:e2<0?t2=h.savedStates[h.savedStates.length+e2]:t2=h.savedStates[e2],t2},h.getCurrentIndex=function(){var e2=null;return h.savedStates.length<1?e2=0:e2=h.savedStates.length-1,e2},h.getHash=function(e2){var t2=h.getLocationHref(e2),n2;return n2=h.getHashByUrl(t2),n2},h.unescapeHash=function(e2){var t2=h.normalizeHash(e2);return t2=decodeURIComponent(t2),t2},h.normalizeHash=function(e2){var t2=e2.replace(/[^#]*#/,"").replace(/#.*/,"");return t2},h.setHash=function(e2,t2){var n2,i2;return t2!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t2}),!1):(h.busy(!0),n2=h.extractState(e2,!0),n2&&!h.emulated.pushState?h.pushState(n2.data,n2.title,n2.url,!1):h.getHash()!==e2&&(h.bugs.setHash?(i2=h.getPageUrl(),h.pushState(null,null,i2+"#"+e2,!1)):r.location.hash=e2),h)},h.escapeHash=function(t2){var n2=h.normalizeHash(t2);return n2=e.encodeURIComponent(n2),h.bugs.hashEscape||(n2=n2.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n2},h.getHashByUrl=function(e2){var t2=String(e2).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t2=h.unescapeHash(t2),t2},h.setTitle=function(e2){var t2=e2.title,n2;t2||(n2=h.getStateByIndex(0),n2&&n2.url===e2.url&&(t2=n2.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t2.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i2){}return r.title=t2,h},h.queues=[],h.busy=function(e2){if(typeof e2!="undefined"?h.busy.flag=e2:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1),!h.busy.flag){u(h.busy.timeout);var t2=function(){var e3,n2,r2;if(!h.busy.flag)for(e3=h.queues.length-1;e3>=0;--e3)n2=h.queues[e3],n2.length!==0&&(r2=n2.shift(),h.fireQueueItem(r2),h.busy.timeout=o(t2,h.options.busyDelay))};h.busy.timeout=o(t2,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e2){return e2.callback.apply(e2.scope||h,e2.args||[])},h.pushQueue=function(e2){return h.queues[e2.queue||0]=h.queues[e2.queue||0]||[],h.queues[e2.queue||0].push(e2),h},h.queue=function(e2,t2){return typeof e2=="function"&&(e2={callback:e2}),typeof t2!="undefined"&&(e2.queue=t2),h.busy()?h.pushQueue(e2):h.fireQueueItem(e2),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e2){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e2(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t2=h.extractState(h.getLocationHref()),n2;if(!h.isLastSavedState(t2))return n2=t2,n2||(n2=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h},h.back=function(e2){return e2!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e2}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e2){return e2!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e2}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e2,t2){var n2;if(e2>0)for(n2=1;n2<=e2;++n2)h.forward(t2);else{if(!(e2<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n2=-1;n2>=e2;--n2)h.back(t2)}return h},h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t2,n2){var r2=!1,i2=!1,s2,o2;return h.doubleCheckComplete(),s2=h.getHash(),s2?(o2=h.extractState(s2||h.getLocationHref(),!0),o2?h.replaceState(o2.data,o2.title,o2.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r2=h.Adapter.extractEventData("state",t2,n2)||!1,r2?i2=h.getStateById(r2):h.expectedStateId?i2=h.getStateById(h.expectedStateId):i2=h.extractState(h.getLocationHref()),i2||(i2=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i2)?(h.busy(!1),!1):(h.storeState(i2),h.saveState(i2),h.setTitle(i2),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t2,n2,r2,i2){if(h.getHashByUrl(r2)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i2!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i2}),!1;h.busy(!0);var s2=h.createStateObject(t2,n2,r2);return h.isLastSavedState(s2)?h.busy(!1):(h.storeState(s2),h.expectedStateId=s2.id,p.pushState(s2.id,s2.title,s2.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t2,n2,r2,i2){if(h.getHashByUrl(r2)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i2!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i2}),!1;h.busy(!0);var s2=h.createStateObject(t2,n2,r2);return h.isLastSavedState(s2)?h.busy(!1):(h.storeState(s2),h.expectedStateId=s2.id,p.replaceState(s2.id,s2.title,s2.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e2,t2,n2;try{e2=l.parse(s.getItem("History.store"))||{}}catch(r2){e2={}}e2.idToState=e2.idToState||{},e2.urlToId=e2.urlToId||{},e2.stateToId=e2.stateToId||{};for(t2 in h.idToState)h.idToState.hasOwnProperty(t2)&&(e2.idToState[t2]=h.idToState[t2]);for(t2 in h.urlToId)h.urlToId.hasOwnProperty(t2)&&(e2.urlToId[t2]=h.urlToId[t2]);for(t2 in h.stateToId)h.stateToId.hasOwnProperty(t2)&&(e2.stateToId[t2]=h.stateToId[t2]);h.store=e2,h.normalizeStore(),n2=l.stringify(e2);try{s.setItem("History.store",n2)}catch(i2){if(i2.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i2;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n2))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload)),h.emulated.pushState||(h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval)),(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")&&(h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})))},(!h.options||!h.options.delayInit)&&h.init()}(window);
//# sourceMappingURL=/s/files/1/0570/0947/1558/t/2/assets/engo-plugins.js.map?v=118117394084947258351656899309
