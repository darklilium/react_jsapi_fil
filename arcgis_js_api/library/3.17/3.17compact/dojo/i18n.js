/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/i18n","./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "),function(h,l,p,q,C,n,z,D,E){p.add("dojo-preload-i18n-Api",1);var r=h.i18n={},F=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,G=function(a,b,d,c){var e=[d+c];b=b.split("-");for(var m="",f=0;f<b.length;f++)if(m+=(m?"-":"")+b[f],!a||a[m])e.push(d+m+"/"+c),e.specificity=m;return e},k={},A=function(a,b,d){d=d?d.toLowerCase():h.locale;a=a.replace(/\./g,"/");b=b.replace(/\./g,"/");
return/root/i.test(d)?a+"/nls/"+b:a+"/nls/"+d+"/"+b},H=h.getL10nName=function(a,b,d){return E.id+"!"+A(a,b,d)},I=function(a,b,d,c,e,m){a([b],function(f){var g=n.clone(f.root||f.ROOT),t=G(!f._v1x&&f,e,d,c);a(t,function(){for(var a=1;a<t.length;a++)g=n.mixin(n.clone(g),arguments[a]);k[b+"/"+e]=g;g.$locale=t.specificity;m()})})},J=function(a){var b=C.extraLocale||[],b=n.isArray(b)?b:[b];b.push(a);return b},x=function(a,b,d){if(p("dojo-preload-i18n-Api")){var c=a.split("*"),e="preload"==c[1];e&&(k[a]||
(k[a]=1,K(c[2],D.parse(c[3]),1,b)),d(1));if(!(c=e))s&&w.push([a,b,d]),c=s;if(c)return}a=F.exec(a);var m=a[1]+"/",f=a[5]||a[4],g=m+f,c=(a=a[5]&&a[4])||h.locale||"",t=g+"/"+c;a=a?[c]:J(c);var u=a.length,l=function(){--u||d(n.delegate(k[t]))};q.forEach(a,function(a){var c=g+"/"+a;p("dojo-preload-i18n-Api")&&v(c);k[c]?l():I(b,g,m,f,a,l)})};p("dojo-preload-i18n-Api");var L=r.normalizeLocale=function(a){a=a?a.toLowerCase():h.locale;return"root"==a?"ROOT":a},s=0,w=[],K=r._preloadLocalizations=function(a,
b,d,c){function e(a,b){c.isXdUrl(l.toUrl(a+".js"))||d?c([a],b):B([a],b,c)}function m(a,b){for(var c=a.split("-");c.length;){if(b(c.join("-")))return;c.pop()}b("ROOT")}function f(){for(--s;!s&&w.length;)x.apply(null,w.shift())}function g(d){d=L(d);m(d,function(g){if(0<=q.indexOf(b,g)){var h=a.replace(/\./g,"/")+"_"+g;s++;e(h,function(a){for(var b in a){var e=a[b],h=b.match(/(.+)\/([^\/]+)$/),p;if(h&&(p=h[2],h=h[1]+"/",e._localized)){var q;if("ROOT"===g){var r=q=e._localized;delete e._localized;r.root=
e;k[l.toAbsMid(b)]=r}else q=e._localized,k[l.toAbsMid(h+p+"/"+g)]=e;g!==d&&function(a,b,e,g){var h=[],u=[];m(d,function(c){g[c]&&(h.push(l.toAbsMid(a+c+"/"+b)),u.push(l.toAbsMid(a+b+"/"+c)))});h.length?(s++,c(h,function(){for(var c=h.length-1;0<=c;c--)e=n.mixin(n.clone(e),arguments[c]),k[u[c]]=e;k[l.toAbsMid(a+b+"/"+d)]=n.clone(e);f()})):k[l.toAbsMid(a+b+"/"+d)]=e}(h,p,e,q)}}f()});return!0}return!1})}c=c||l;g();q.forEach(h.config.extraLocale,g)},v=function(){},y={},M=new Function("__bundle","__checkForLegacyModules",
"__mid","__amdValue","var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),B=function(a,b,d){var c=[];q.forEach(a,function(a){function b(d){d=M(d,v,a,y);
d===y?c.push(k[f]=y.result):(d instanceof Error&&(console.error("failed to evaluate i18n bundle; url\x3d"+f,d),d={}),c.push(k[f]=/nls\/[^\/]+\/[^\/]+$/.test(f)?d:{root:d,_v1x:1}))}var f=d.toUrl(a+".js");if(k[f])c.push(k[f]);else{var g=d.syncLoadNls(a);g||(g=v(a.replace(/nls\/([^\/]*)\/([^\/]*)$/,"nls/$2/$1")));if(g)c.push(g);else if(z)z.get({url:f,sync:!0,load:b,error:function(){c.push(k[f]={})}});else try{d.getText(f,!0,b)}catch(h){c.push(k[f]={})}}});b&&b.apply(null,c)},v=function(a){for(var b,
d=a.split("/"),c=h.global[d[0]],e=1;c&&e<d.length-1;c=c[d[e++]]);c&&((b=c[d[e]])||(b=c[d[e].replace(/-/g,"_")]),b&&(k[a]=b));return b};r.getLocalization=function(a,b,d){var c;a=A(a,b,d);x(a,!l.isXdUrl(l.toUrl(a+".js"))?function(a,b){B(a,b,l)}:l,function(a){c=a});return c};return n.mixin(r,{dynamic:!0,normalize:function(a,b){return/^\./.test(a)?b(a):a},load:x,cache:k,getL10nName:H})});