// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/editor/util/DownloadXmlDialog","dojo/_base/declare dojo/_base/lang dojo/aspect dojo/dom-class dojo/dom-construct dojo/has dijit/_WidgetBase dojo/i18n!../../nls/i18nBase dijit/Dialog ./OkCancelBar ../../base/etc/docUtil ../../../../kernel".split(" "),function(a,b,n,p,c,f,g,m,q,r,s,h){a=a([g],{dialog:null,dialogTitle:m.editor.download.dialogTitle,postCreate:function(){this.inherited(arguments)},show:function(a,f){var g=f+".xml",h=new Blob([a],{type:"text/xml"}),k=c.create("div",
{}),d=c.create("div",{"class":"gxePrimaryPane gxeDownloadPane"},k),l=c.create("a",{"class":"gxeClickableText gxeBold gxeLine",onclick:b.hitch(this,function(){this.dialog&&this.dialog.hide()})},d);s.setNodeText(l,m.editor.download.prompt);d=new FileReader;this.own(n.after(d,"onload",b.hitch(this,function(a){var b=null;a&&(a.target&&a.target.result)&&(b=a.target.result,l.href=b,l.download=g)}),!0));d.readAsDataURL(h);var t=new r({showOk:!1,onCancelClick:b.hitch(this,function(){this.dialog&&this.dialog.hide()})},
c.create("div",{},k)),e=this.dialog=new q({"class":"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:k});this.isLeftToRight()||p.add(e.domNode,"gxeRtl");this.own(e.on("hide",b.hitch(this,function(){setTimeout(b.hitch(this,function(){t.destroyRecursive(!1);e.destroyRecursive(!1);this.destroyRecursive(!1)}),300)})));e.show()}});f("extend-esri")&&b.setObject("dijit.metadata.editor.util.DownloadXmlDialog",a,h);return a});