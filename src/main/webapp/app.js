/*NOTE: this will likely have to be updated*/
;/* Version 5cc1faa1114c16fffd13a94b0f2ef016 v:4.1.0.0, c:9ad6c294867f81a369ef1ffb881312585befbfca, b:9444 n:32-4.1.next-build */(function(){(function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var f=window.ADRUM={};window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();(function(a){(function(a){a.Lb=function(){for(var a=[],b=0;b<arguments.length;b++)a[b-0]=arguments[b];for(b=0;b<a.length;b++){var d=a[b];d&&d.w()}}})(a.monitor||(a.monitor={}))})(f||(f={}));(function(a){a=a.conf||(a.conf={});a.beaconUrlHttp="http://pm-demo.appdynamics.com:9001";a.beaconUrlHttps="https://pm-demo.appdynamics.com:9001";a.corsEndpointPath="/eumcollector/beacons/browser/v1";
	a.imageEndpointPath="/eumcollector/adrum.gif?";a.appKey=window["adrum-app-key"]||"AD-AAB-AUM";var c="https:"===document.location.protocol;a.adrumExtUrl=(c?"https://pm2.appdynamics.com":"http://pm2.appdynamics.com")+"/adrum-ext.5cc1faa1114c16fffd13a94b0f2ef016.js";a.agentVer="4.1.0.0";a.sendImageBeacon="false";if(window["adrum-geo-resolver-url"]){var e=window["adrum-geo-resolver-url"],b=e.indexOf("://");-1!=b&&(e=e.substring(b+3));e=(c?"https://":"http://")+e}else e=c?"":
	"";a.geoResolverUrl=e;a.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"];a.userConf=window["adrum-config"];a.xc=10})(f||(f={}));(function(a){(function(c){c.Kb=function(a){setTimeout(a,0)};c.addEventListener=function(e,b,d){function g(){try{return d.apply(this,Array.prototype.slice.call(arguments))}catch(m){a.exception(m,"M1",b,e,m)}}a.isDebug&&a.log("M0",b,e);e.addEventListener?e.addEventListener(b,g,!1):e.attachEvent&&e.attachEvent("on"+b,g)};c.loadScriptAsync=
	function(e){var b=document.createElement("script");b.async=!0;b.src=e;var d=document.getElementsByTagName("script")[0];d?(d.parentNode.insertBefore(b,d),a.log("M2",e)):a.log("M3",e)};c.de=function(a,b){for(var d in b){var g=b[d];b.hasOwnProperty(d)&&g&&(a[d]=g)}};c.generateGUID="undefined"!==typeof window.crypto&&"undefined"!==typeof window.crypto.getRandomValues?function(){function a(b){for(b=b.toString(16);4>b.length;)b="0"+b;return b}var b=new Uint16Array(8);window.crypto.getRandomValues(b);return a(b[0])+
		a(b[1])+"_"+a(b[2])+"_"+a(b[3])+"_"+a(b[4])+"_"+a(b[5])+a(b[6])+a(b[7])}:function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};c.parseURI=function(a){return(a=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/))?{href:a[0]||"",protocol:a[1]||"",C:a[2]||"",host:a[3]||"",hostname:a[4]||"",port:a[5]||"",pathname:a[6]||
			"",search:a[7]||"",hash:a[8]||""}:null};c.absolutizeURI=function(a,b){function d(a){var b=[];a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?b.pop():b.push(a)});return b.join("").replace(/^\//,"/"===a.charAt(0)?"/":"")}b=c.parseURI(b||"");a=c.parseURI(a||"");return b&&a?(b.protocol||a.protocol)+(b.protocol||b.C?b.C:a.C)+d(b.protocol||b.C||"/"===b.pathname.charAt(0)?b.pathname:b.pathname?(a.C&&!a.pathname?"/":"")+a.pathname.slice(0,
				a.pathname.lastIndexOf("/")+1)+b.pathname:a.pathname)+(b.protocol||b.C||b.pathname?b.search:b.search||a.search)+b.hash:null};c.getFullyQualifiedUrl=function(e){try{return c.absolutizeURI(document.location.href,e)}catch(b){return a.exception(b,"M4",e,document.location.href),e}};c.tryExtractingErrorStack=function(a){return a?(a=a.stack)&&"string"===typeof a?a:null:null}})(a.utils||(a.utils={}))})(f||(f={}));(function(a){function c(b,d,g,e){b=a.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+
		g+"&msg="+encodeURIComponent(b.substring(0,500));e&&(b+="&stack=",b+=encodeURIComponent(e.substring(0,1500-b.length)));return b}function e(b,d){2<=g||((new Image).src=c(b,0,a.conf.appKey,d),g++)}function b(a){return 0<=a.location.search.indexOf("ADRUM_debug=true")||0<=a.cookie.search(/(^|;)\s*ADRUM_debug=true/)}a.iDR=b;a.isDebug=b(document);var d=[];a.log=function(b){for(var g=1;g<arguments.length;g++);a.isDebug&&d.push(Array.prototype.slice.call(arguments).join(" | "))};a.error=function(b){for(var d=
			1;d<arguments.length;d++);d=Array.prototype.slice.call(arguments).join(" | ");a.log(d);e(d,null)};a.exception=function(){for(var b=[],d=0;d<arguments.length;d++)b[d-0]=arguments[d];1>arguments.length||(b=Array.prototype.slice.call(arguments),d=a.utils.tryExtractingErrorStack(b[0]),b=b.slice(1).join(" | "),a.log(b),e(b,d))};a.assert=function(b,d){b||a.error("Assert fail: "+d)};a.dumpLog=a.isDebug?function(){for(var a="",b=0;b<d.length;b++)a+=d[b].replace(RegExp("<br/>","g"),"\n\t")+"\n";return a}:
			function(){};a.cIEBU=c;var g=0;a.log("M5")})(f||(f={}));(function(a){var c=function(){function a(b){this.max=b;this.oa=0}a.prototype.Md=function(){this.T()||this.oa++};a.prototype.T=function(){return this.oa>=this.max};a.prototype.reset=function(){this.oa=0};return a}(),e=function(){function b(){this.O=[];this.Da=new c(b.Lc);this.ya=new c(b.Ac)}b.prototype.submit=function(b){this.push(b)&&a.initEXTDone&&this.processQ()};b.prototype.processQ=function(){for(var b=this.qd(),g=0;g<b.length;g++){var m=
					b[g];"function"===typeof a.commands[m[0]]?(a.isDebug&&a.log("M6",m[0],m.slice(1).join(", ")),a.commands[m[0]].apply(a,m.slice(1))):a.error("M7",m[0])}};b.prototype.Wd=function(a){return"reportXhr"===a||"reportPageError"===a};b.prototype.push=function(b){var g=b[0],m=this.Wd(g),q=m?this.Da:this.ya;if(q.T())return a.log("M8",m?"spontaneous":"non spontaneous",g),!1;this.O.push(b);q.Md();return!0};b.prototype.qd=function(){var a=this.O;this.reset();return a};b.prototype.size=function(){return this.O.length};
					b.prototype.reset=function(){this.O=[];this.Da.reset();this.ya.reset()};b.prototype.isSpontaneousQueueDead=function(){return this.Da.T()};b.prototype.isNonSpontaneousQueueDead=function(){return this.ya.T()};b.Lc=100;b.Ac=100;return b}();a.$b=e})(f||(f={}));(function(a){a.q=new a.$b;a.command=function(c){for(var e=1;e<arguments.length;e++);a.isDebug&&a.log("M9",c,Array.prototype.slice.call(arguments).slice(1).join(", "));a.q.submit(Array.prototype.slice.call(arguments))}})(f||(f={}));(function(a){(function(c){window.ADRUM.aop=
				c;c.support=function(a){return!a||"apply"in a};c.around=function(e,b,d,g){a.assert(c.support(e),"aop.around called on a function which does not support interception");e=e||function(){};return function(){a.isDebug&&a.log("M10",g,Array.prototype.slice.call(arguments).join(", "));var m=Array.prototype.slice.call(arguments),q;try{b&&(q=b.apply(this,m))}catch(c){a.exception(c,"M11",g,c)}a.assert(!q||"[object Array]"===Object.prototype.toString.call(q));var n=void 0;try{n=e.apply(this,q||m)}finally{try{d&&
					d.apply(this,m)}catch(f){a.exception(f,"M12",g,f)}}return n}};c.before=function(a,b){return c.around(a,b)};c.after=function(a,b){return c.around(a,null,b)}})(a.aop||(a.aop={}))})(f||(f={}));(function(a){(function(c){var e=function(){function b(){}b.prototype.w=function(){a.aop.support(window.onerror)?(window.onerror=a.aop.around(window.onerror,function(d,g,m,q,e){b.va||(b.errorsSent>=a.conf.xc?a.log("M13"):(q=a.utils.tryExtractingErrorStack(e),a.command("reportPageError",d,g,m,q),b.errorsSent++,b.va=
									!0))},function(){b.va=!1},"onerror"),a.log("M14")):a.log("M15")};b.va=!1;b.errorsSent=0;return b}();c.ErrorMonitor=e;c.ud=new c.ErrorMonitor})(a.monitor||(a.monitor={}))})(f||(f={}));(function(a){var c=function(){function e(){this.Ea=[];this.V(e.ka,0)}e.prototype.ie=function(a){this.V(e.Wa,a)};e.prototype.ke=function(a){this.V(e.Za,a)};e.prototype.je=function(a){this.V(e.Xa,a)};e.prototype.V=function(a,d){this.Ea.push({he:(new Date).getTime(),ge:d,l:a});this.md=a};e.prototype.getPhaseName=function(){return this.md};
						e.prototype.getPhaseID=function(a){for(var d=0;d<e.Ya.length;d++)if(e.Ya[d]===a)return d;return null};e.prototype.getPhaseCallbackTime=function(a){for(var d=this.Ea,g=0;g<d.length;g++)if(d[g].l===a)return d[g].he;return null};e.prototype.findPhaseAtNominalTime=function(b){a.assert(0<=b);for(var d=this.Ea,g=d.length-1;0<=g;g--)if(b>=d[g].ge)return d[g].l;a.error("M16",b,a.utils.rd(d));return e.ka};e.ka="AFTER_FIRST_BYTE";e.Wa="AFTER_DOM_INTERACTIVE";e.Za="AT_ONLOAD";e.Xa="AFTER_ONLOAD";e.Ya=[e.ka,
									e.Wa,e.Za,e.Xa];return e}();a.Xe=c;a.lifecycle=new c;a.lifecycle=a.lifecycle})(f||(f={}));(function(a){(function(c){var e=function(){function b(){}b.prototype.w=function(){b.Ce();b.Be()};b.Be=function(){a.utils.addEventListener(window,"load",b.W);a.utils.addEventListener(window,"load",b.ne)};b.ne=function(b){a.lifecycle.ke(b&&b.timeStamp);a.utils.Kb(function(){var b=(new Date).getTime();a.lifecycle.je(b);a.command("mark","onload",b);c.Ua.b&&(c.perfMonitor.kd(),c.perfMonitor.ab());a.command("reportOnload");
										a.utils.loadScriptAsync(a.conf.adrumExtUrl)});a.log("M17")};b.Ce=function(){if(document.addEventListener)document.addEventListener("DOMContentLoaded",b.K,!1);else{document.attachEvent("onreadystatechange",b.K);var d=null;try{d=null===window.frameElement?document.documentElement:null}catch(g){}null!=d&&d.doScroll&&function q(){if(!b.isReady){try{d.doScroll("left")}catch(a){setTimeout(q,10);return}b.W()}}()}a.log("M18")};b.W=function(d){b.zb||(a.lifecycle.ie(d&&d.timeStamp),a.command("mark","onready",
											(new Date).getTime()),b.zb=!0)};b.K=function(a){document.addEventListener?(document.removeEventListener("DOMContentLoaded",b.K,!1),b.W(a)):"complete"===document.readyState&&(document.detachEvent("onreadystatechange",b.K),b.W(a))};b.isReady=!1;b.zb=!1;return b}();c.ac=e;c.pd=new c.ac})(a.monitor||(a.monitor={}))})(f||(f={}));(function(a){(function(c){var e=function(){function b(){this.navTiming=this.resTiming=null}b.prototype.w=function(){b.b=window.performance||window.mozPerformance||window.msPerformance||
										window.webkitPerformance};b.prototype.kd=function(){var d=b.b.timing;if(d)if(d.navigationStart&&d.navigationStart<=d.loadEventEnd){var g={},m;for(m in d){var q=d[m];"number"===typeof q&&(g[m]=q)}this.navTiming=g}else a.log("M20");else a.log("M19")};b.prototype.ab=function(){var d=b.b;d.getEntriesByType&&(d=d.getEntriesByType("resource"))&&d.length&&0<d.length&&d.unshift&&(this.resTiming=d);this.resTiming||a.log("M21")};b.b=null;return b}();c.Ua=e;c.perfMonitor=new c.Ua})(a.monitor||(a.monitor={}))})(f||
									(f={}));(function(a){(function(c){var e=function(){function b(){this.conf=null;this.status={};if(!0===window["adrum-xhr-disable"])a.log("M22");else if(window.XMLHttpRequest){this.conf={exclude:{urls:[{pattern:a.conf.beaconUrlHttp+a.conf.corsEndpointPath,type:"regex"},{pattern:a.conf.beaconUrlHttps+a.conf.corsEndpointPath,type:"regex"}]}};this.bb(this.conf.exclude.urls);this.conf.include=a.conf.userConf&&a.conf.userConf.xhr&&a.conf.userConf.xhr.include;var b=this.conf.include&&this.conf.include.urls;
											b&&this.bb(b);(this.d=window.XMLHttpRequest.prototype)?(this.He="open"in this.d&&"send"in this.d)?(this.Pb=a.aop.support(this.d.open)&&a.aop.support(this.d.send))||a.log("M26"):a.log("M25"):a.log("M24")}else a.log("M23")}b.prototype.bb=function(b){for(var g=0;g<b.length;g++){var m=b[g];if("regex"!==m.type||"string"!==typeof m.pattern)a.exception("only regex pattern type is supported in the xhr filter, pattern should be a string");else try{m.regex=new RegExp(m.pattern)}catch(q){a.exception(q,"Parse regex pattern failed.")}}};
											b.prototype.set=function(a,b){this.status[a]=b};b.prototype.w=function(){if(this.Pb){a.log("M27");a.xhrOpen=this.xhrOpen=this.d.open;a.xhrSend=this.xhrSend=this.d.send;var d=this;this.d.open=a.aop.around(this.d.open,function(){var g=1<=arguments.length?String(arguments[0]):"",m=2<=arguments.length?String(arguments[1]):"",q=d.conf.exclude.urls;b.wb(m,d.conf&&d.conf.include&&d.conf.include.urls)&&!b.wb(m,q)&&(this._adrumXhrData={method:g,url:m,sendTime:null,firstByteTime:null,respAvailTime:null,respProcTime:null,
												parentPhase:null},a.utils.de(this._adrumXhrData,d.status))},null,"XHR.open");this.d.send=a.aop.around(this.d.send,function(){var g=this,m=g._adrumXhrData;if(m){var q=(new Date).getTime();a.assert(null===m.sendTime,"M28");m.sendTime=m.sendTime||q;m.parentPhase=a.lifecycle.getPhaseName();b.Ud(m.url)?g.setRequestHeader("ADRUM","isAjax:true"):a.log("M29",document.location.href,m.url);var e=0,c=function(){if(4==g.readyState)a.log("M30"),d.ea(g);else{var b=null;try{b=g.onreadystatechange}catch(m){a.log("M31",
												m);d.ea(g);return}e++;b?a.aop.support(b)?(g.onreadystatechange=d.cb(b,g,"XHR.onReadyStateChange"),a.log("M32",e)):(a.log("M33"),d.ea(g)):5>e?a.utils.Kb(c):(a.log("M34"),d.ea(g))}};c()}},null,"XHR.send");"addEventListener"in this.d&&"removeEventListener"in this.d&&a.aop.support(this.d.addEventListener)&&a.aop.support(this.d.removeEventListener)?(this.d.addEventListener=a.aop.around(this.d.addEventListener,this.ld(),null,"XHR.addEventListener"),this.d.removeEventListener=a.aop.around(this.d.removeEventListener,
													function(b,d){if(this._adrumXhrData){var q=Array.prototype.slice.call(arguments);d.__adrumInterceptor?(q[1]=d.__adrumInterceptor,a.log("M35")):a.log("M36");return q}},null,"XHR.removeEventListener")):a.log("M37");a.log("M38")}};b.ce=function(a,b){for(var m=!1,q=0;q<b.length;q++){var e=b[q];if(e.regex&&e.regex.test(a)){m=!0;break}}return m};b.wb=function(a,g){var m=!0;a&&g&&(m=b.ce(a,g));return m};b.Ud=function(a){var b=document.createElement("a");b.href=a;a=document.location;return":"===b.protocol&&
													""===b.hostname&&""===b.port||b.protocol===a.protocol&&b.hostname===a.hostname&&b.port===a.port};b.ob=function(b){var g=b._adrumXhrData;if(g){var m=(new Date).getTime();2==b.readyState?g.firstByteTime=g.firstByteTime||m:4==b.readyState&&(a.assert(null===g.respAvailTime,"M39"),g.respAvailTime=g.respAvailTime||m,g.firstByteTime=g.firstByteTime||m)}};b.prototype.cb=function(d,g,m){return b.Ue(d,function(){b.ob(this)},function(){var b=g._adrumXhrData;if(b&&4==g.readyState){var d=(new Date).getTime();
														a.assert(null===b.respProcTime,"M40");b.respProcTime=b.respProcTime||d;a.command("reportXhr",g,b);delete g._adrumXhrData}},m)};b.prototype.ea=function(d){if(d._adrumXhrData){var g=(new Date).getTime()+3E4,m=function(){b.ob(d);var q=d._adrumXhrData;if(q){var e=(new Date).getTime();4==d.readyState?(a.assert(null===q.respProcTime,"M41"),q.respProcTime=q.respProcTime||e,a.log("M42"),a.command("reportXhr",d,q),delete d._adrumXhrData):e<g?setTimeout(m,50):(delete d._adrumXhrData,a.log("M43"))}};m()}};b.Ue=
													function(b,g,m,q){var e=b;b&&"object"===typeof b&&"toString"in b&&"[xpconnect wrapped nsIDOMEventListener]"===b.toString()&&"handleEvent"in b&&(e=function(){b.handleEvent.apply(this,Array.prototype.slice.call(arguments))});return a.aop.around(e,g,m,q)};b.prototype.ld=function(){for(var b=0;b<arguments.length;b++);var g=this;return function(b,d){if(("load"===b||"error"===b)&&d&&this._adrumXhrData){var e;e=d;if(e.__adrumInterceptor)e=e.__adrumInterceptor;else if(a.aop.support(e)){var c=g.cb(e,this,
														"XHR.invokeEventListener");e=e.__adrumInterceptor=c}else e=null;if(e)return c=Array.prototype.slice.call(arguments),c[1]=e,a.log("M44"),c;a.log("M45",b,d)}}};return b}();c.ad=e;c.A=new c.ad})(a.monitor||(a.monitor={}))})(f||(f={}));(function(a){(function(c){function e(a,b){var d=[],e=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);if(e){var c=e[1],e=e[2].replace(/^"|"$/g,""),e=decodeURIComponent(e).split("|"),f=e[0].split(":");if("R"===f[0]&&Number(f[1])===b)for(g(c),c=1;c<e.length;c++)d.push(e[c])}return d}
										function b(a,b){var d=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);if(d){var e=d[1],c=d[4],f=d[5];if(Number(d[3])===b)return g(e),{index:Number(c),value:f}}return null}function d(b){var d=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);if(d){a.log("M48",b);if(3===d.length)return g("ADRUM"),{startTime:Number(d[1]),startPage:d[2]};a.error("M49",b);return null}}function g(b){a.log("M47",b);var d=new Date;d.setTime(d.getTime()-1E3);document.cookie=b+"=;Expires="+d.toUTCString()}c.startTimeCookie=null;c.cookieMetadataChunks=
															null;c.eb=function(g,q){a.log("M46");for(var f=q?q.length:0,n=[],h=g.split(";"),k=0;k<h.length;k++){var p=h[k],u=b(p,f);u?n.push(u):(p=d(p),null!=p&&(c.startTimeCookie=p))}Array.prototype.sort.call(n,function(b,a){return b.index-a.index});p=[];for(k=0;k<n.length;k++)p.push(n[k].value);for(k=0;k<h.length;k++)(n=e(h[k],f))&&0<n.length&&(p=p.concat(n));c.cookieMetadataChunks=p};a.correlation.eck=c.eb})(a.correlation||(a.correlation={}))})(f||(f={}));(function(a){"APP_KEY_NOT_SET"===a.conf.appKey&&"undefined"!==
															typeof console&&"undefined"!==typeof console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");a.correlation.eb(document.cookie,document.referrer);a.command("mark","firstbyte",window["adrum-start-time"]);a.monitor.Lb(a.monitor.ud,a.monitor.pd,a.monitor.perfMonitor,a.monitor.A)})(f||(f={}));(function(a){var c=function(){function b(){this.k={}}b.prototype.now=function(){return e.now()};b.prototype.mark=function(b){e.mark.call(this,b)};b.prototype.measure=
																function(b,a,m){e.measure.apply(this,arguments)};b.prototype.getEntryByName=function(b){return e.getEntryByName.call(this,b)};return b}();a.Qc=c;var e;(function(b){b.now;b.mark;b.measure;b.getEntryByName;var d=g&&g.timing&&g.timing.navigationStart?g.timing.navigationStart:window["adrum-start-time"],g=window.performance;b.now=g&&g.now?function(){return g.now()}:g&&g.timing&&g.timing.navigationStart?function(){return(new Date).getTime()-g.timing.navigationStart}:function(){return(new Date).getTime()-
																	d};b.mark=function(a){this.k[a]={name:a,entryType:"mark",startTime:b.now(),duration:0}};b.measure=function(g,e,c){this.k.hasOwnProperty(e)&&this.k.hasOwnProperty(c)?this.k[g]={name:g,entryType:"measure",startTime:e?this.k[e].startTime:d,duration:(c?this.k[c].startTime:b.now())-(e?this.k[e].startTime:0)}:a.error("M50"+(this.k.hasOwnProperty(e)?c:e)+" does not exist. ")};b.getEntryByName=function(b){return this.k[b]}})(e||(e={}))})(f||(f={}));(function(a){(function(c){var e=function(){function b(b,
																		g){this.$=this.wa=null;this.pa=0;this.G={};this.l="";this.b=new a.Qc;this.vb=!1;this.$=b;this.name=g;this.Ld=a.utils.generateGUID()}b.prototype.nd=function(){this.pa++};b.prototype.Yd=function(){this.b.mark("locationChangeStart");this.ma("locationChanging");this.pa=0};b.prototype.Zd=function(){this.b.mark("locationChangeSuccess");this.na();this.wa=location.href};b.prototype.Fe=function(){this.b.mark("stateChangeStart");this.ma("stateChanging")};b.prototype.Ge=function(){this.b.mark("stateChangeSuccess");
																		this.na()};b.prototype.ue=function(){this.b.mark("routeChangeStart");this.ma("routeChanging")};b.prototype.ve=function(){this.b.mark("routeChangeSuccess");this.na()};b.prototype.Se=function(){this.b.mark("viewContentLoaded");this.G=this.hd();this.wa=location.href};b.prototype.Db=function(){this.b.mark("outstandingRequestsComplete")};b.prototype.ma=function(b){this.l=b};b.prototype.na=function(){this.l=null};b.prototype.hd=function(){var a={ca:0},g=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");
																			if(g&&0<g.length){var e=0,c;for(c in b.Y)for(var f=0;f<g.length;f++){var n=angular.element(g[f]).find(c);if(0<n.length){a[c]=[];for(var h=0;h<n.length;h++){var k=n[h];k[b.Y[c].da]&&a[c].push(k)}e+=a[c].length}}}a.ca=e;return a};b.prototype.jd=function(b){var a=null;if(0<this.G.ca){var e=this.buildResourceTimingInfo();if(e.length===this.G.ca){for(var c=[],f=0;f<e.length;f++)c.push(e[f].responseEnd);e=Math.max.apply(Math,c);b=this.b.getEntryByName(b);c=this.b.getEntryByName("DOM");b&&b.startTime&&c&&
																				c.duration&&(a=Math.max(e-b.startTime,c.duration))}}else a=(c=this.b.getEntryByName("DOM"))&&c.duration||null;return a};b.prototype.P=function(b){for(var a={},e=0;e<b.length;e++){var c=b[e];if(this.b.getEntryByName(c[1])&&this.b.getEntryByName(c[2])){this.b.measure(c[0],c[1],c[2]);var f=this.b.getEntryByName(c[0]);a[c[0]]=f&&0<=f.duration&&f.duration||null}}a.PLT=this.jd(b[0][1]);a.PLC=1;a.VDC=this.pa;for(var n in a)a[n]=Math.round(a[n]);return a};b.prototype.getGUID=function(){return this.Ld};b.prototype.buildMetrics=
																		function(){return c.Wb.Ha?this.P(b.Pe):this.P(b.we)};b.prototype.getRouteUrl=function(){return this.$};b.prototype.getName=function(){return this.name?this.name:this.$.substring(this.$.lastIndexOf("/")+1)};b.prototype.getLocationUrl=function(){return this.wa};b.prototype.buildResourceTimingInfo=function(){a.monitor.perfMonitor.ab();var b=this,e=[];0<this.G.ca&&(e=a.monitor.perfMonitor.resTiming.filter(function(a){return b.gd(a)}));return e};b.prototype.gd=function(a){if(a.initiatorType in b.Y){var e=
																			b.Y[a.initiatorType].da,c=this.G[a.initiatorType];if(c)for(var f=0;f<c.length;f++){var l=c[f];if(l.tagName.toUpperCase()===a.initiatorType.toUpperCase()&&decodeURIComponent(l[e])===decodeURIComponent(a.name))return!0}}return!1};b.Y={img:{da:"src"},script:{da:"src"},link:{da:"href"}};b.we=[["DOM","locationChangeStart","outstandingRequestsComplete"],["DDT","routeChangeStart","routeChangeSuccess"],["DRT","routeChangeStart","outstandingRequestsComplete"],["DPT","routeChangeSuccess","outstandingRequestsComplete"]];
																	b.Pe=[["DDT","stateChangeStart","stateChangeSuccess"],["DRT","stateChangeStart","stateChangeSuccess"],["DOM","stateChangeStart","viewContentLoaded"],["DPT","stateChangeSuccess","viewContentLoaded"]];return b}();c.NgRouteTracker=e})(a.ng||(a.ng={}))})(f||(f={}));(function(a){(function(c){var e=function(){function b(){this.ready=!1;this.channel=null}b.prototype.Ca=function(a){if(this.ready=a)this.onReady();else this.Mb()};b.prototype.isReady=function(){return this.ready};b.prototype.Mb=function(){var a=
																		this;setTimeout(function(){a.Ca(!0)},1E4)};b.prototype.onReady=function(){var b=this;a.command("call",function(){b.channel.onResolverReady()})};b.prototype.init=function(a){this.channel=a};return b}();c.ja=e;a.ng.ja.prototype.init=a.ng.ja.prototype.init})(a.ng||(a.ng={}))})(f||(f={}));(function(a){(function(c){var e=function(){function b(){this.c=new c.NgRouteTracker(document.URL);this.Z=new c.ja}b.prototype.w=function(){var b=this;a.utils.addEventListener(document,"DOMContentLoaded",function(){b.init()})};
																		b.prototype.init=function(){if("undefined"!=typeof angular){b.Ha=b.Sd();a.command("addResolver",this.Z);this.Z.Mb();var e=this,c=angular.module("ng");c.config(["$provide",function(a){e.Pd(a);e.Od(a)}]);c.run(["$browser",function(a){b.fe=a}])}};b.Sd=function(){try{angular.module("ui.router")}catch(a){return!1}return!0};b.prototype.Od=function(b){var e=a.aop,c=this;b.decorator("$httpBackend",["$delegate",function(b){return b=e.around(b,function(){if("routeChanging"===c.c.l||"stateChanging"===c.c.l)a.monitor.A.set("parentGUID",
																					c.c.getGUID()),a.monitor.A.set("parentType",3),a.monitor.A.set("parentUrl",c.c.getLocationUrl())},function(){if("routeChanging"===c.c.l||"stateChanging"===c.c.l)a.monitor.A.set("parentGUID",null),a.monitor.A.set("parentType",null),a.monitor.A.set("parentUrl",null)})}])};b.prototype.Pd=function(e){var c=a.aop,m=this;e.decorator("$rootScope",["$delegate",function(e){e.$digest=c.after(e.$digest,function(){m.c.nd()});e.$on("$locationChangeStart",function(e,c){a.log("M51");b.Ha||m.Nb(c);m.c.Yd()});e.$on("$locationChangeSuccess",
																				function(){a.log("M52");m.c.Zd()});e.$on("$routeChangeStart",function(){a.log("M53");m.c.ue()});e.$on("$routeChangeSuccess",function(){a.log("M54");m.c.ve();m.Cb(function(){m.c.Db()})});e.$on("$stateChangeStart",function(b,e){a.log("M55");m.Nb(e.url,e.name);m.c.Fe()});e.$on("$stateChangeSuccess",function(){a.log("M56");m.c.Ge();m.Cb(function(){m.c.Db()})});e.$on("$viewContentLoaded",function(){a.log("M57");m.c.Se();if(!m.c.vb){var e=m.c;setTimeout(function(){m.td(e)},b.Vc);e.vb=!0}});return e}])};
																		b.prototype.Nb=function(a,b){this.Z.Ca(!1);this.c=new c.NgRouteTracker(a,b)};b.prototype.td=function(a){b.re(a);this.Z.Ca(!0)};b.prototype.Cb=function(a){var e=b.fe;e&&e.notifyWhenNoOutstandingRequests&&e.notifyWhenNoOutstandingRequests(a)};b.re=function(b){a.command("reportEvent","VPLoad",b)};b.Vc=5E3;b.Ha=!1;return b}();c.Wb=e;c.ngMonitor=new e})(a.ng||(a.ng={}))})(f||(f={}));(function(a){var c=a.ng||(a.ng={});a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&a.conf.userConf.spa.angular.disable||
																			a.monitor.Lb(c.ngMonitor)})(f||(f={}))}})();})();



window['adrum-start-time'] = new Date().getTime();

(function() {
	'use strict';
	// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
	// the route provides parses the URL and injects the appropriate partial page
	angular.module('app', [ 'ngRoute', 'ngCookies' ]).config(config).run(run).service('sharedProperties',sharedProperties).factory('superCache',superCache);
	config.$inject = [ '$routeProvider', '$locationProvider' ];
	function config($routeProvider, $locationProvider) {
		$routeProvider.when('/login', {
			controller : 'LoginController',
			templateUrl : 'login/login.view.html',
			controllerAs : 'lc'
		})

		.when('/', {
			controller : 'ProductsController',
			templateUrl : 'products/products.view.html',
			controllerAs : 'pc'
		})

		.when('/cart', {
			controller : 'ShoppingCartController',
			templateUrl : 'shoppingcart/shoppingcart.view.html',
			controllerAs : 'sc'
		})
		
		.when('/checkout', {
			controller : 'CheckoutController',
			templateUrl : 'checkout/checkout.view.html',
			controllerAs : 'cc'
		})

		.otherwise({
			redirectTo : '/login'
		});
	}

	run.$inject = [ '$rootScope', '$location', '$cookieStore', '$http','superCache' ];
	function run($rootScope, $location, $cookieStore, $http,superCache) {

		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic '
					+ $rootScope.globals.currentUser.authdata;
		}

		$rootScope.$on('$locationChangeStart',
				function(event, next, current) {
					// redirect to login page if not logged in and trying to access a restricted page
					var restrictedPage = $.inArray($location.path(), [ '/login' ]) === -1;
					var loggedIn = $rootScope.globals.currentUser;
					if (restrictedPage && !loggedIn) {
						$location.path('/login');
					}
				});
		$rootScope.navigatetocart = function(path) {
			if($("#cartCount").text() != '' && $("#cartCount").text != '0'){
				$location.path(path);
			} else {
				$rootScope.flash = {
		                message: 'Your shopping cart is empty. Please add items to your cart',
		                type: false,
		                keepAfterLocationChange: true
		         };
			}
		};
		
		$rootScope.logout = function(path){
			superCache.removeAll();
			$location.path(path);
		}
	}
	
	function sharedProperties() {
		var hashtable = {};

		 return {
		        setValue: function (key, value) {
		            hashtable[key] = value;
		        },
		        getValue: function (key) {
		            return hashtable[key];
		        }
		    };
	}
	
	superCache.$inject = [ '$cacheFactory' ];
	function superCache($cacheFactory){
		 return $cacheFactory('super-cache');
	}
})();
