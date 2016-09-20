// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/ReconstructTracks.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"reconstructIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.reconstructTracks}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputFeatures}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.trackField}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"trackFields"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;margin-top:10px;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_trackFieldSelect"\x3e\x3c/select\x3e\r\n              \x3c!--\x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_trackFieldSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleTrackFieldChange"\x3e\x3c/select\x3e--\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.methodLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"method"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_methodSelect"\x3e\r\n                \x3coption value\x3d"GEODESIC"\x3e${i18n.geodesicLabel}\x3c/option\x3e\r\n                \x3coption value\x3d"PLANAR"\x3e${i18n.planarLabel}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.bufField}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"bufferField"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3ctable style\x3d"width:90%"\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd colspan\x3d"2"\x3e\r\n                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_bufFieldOutput" value\x3d""\x3e\x3c/input\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd class\x3d"shortTextInput"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.add}\',iconClass:\'esriAnalysisExpIcon\',showLabel: false" data-dojo-attach-point\x3d"_expBtn" data-dojo-attach-event\x3d"onClick:_handleExpBtnClick"\x3e\x3c/div\x3e\r\n                  \x3c/td\x3e\r\n               \x3c/tr\x3e\r\n              \x3c/table\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.durSplit}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeSplit"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"onChange:_handleDurSplitValue" data-dojo-props\x3d"intermediateChanges:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_durSplitValue" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"/\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_durSplitUnitsSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n  \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.addStatsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"summaryFields"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_datastoreLabelRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_datastoreLabel"\x3e${i18n.sevenLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.datastoreLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectDataStore"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_datastoreSelect"\x3e\r\n                \x3coption value\x3d"relational"\x3e${i18n.relationalDS}\x3c/option\x3e\r\n                \x3coption value\x3d"spatialtemporal" selected\x3d"true"\x3e${i18n.spatialDS}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.eightLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"_exprDialog"\x3e\r\n      \x3cdiv style\x3d"width:30em;height:15em;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_expressionCtr"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/ReconstructTracks","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dojox/form/CheckedMultiSelect ../../kernel ../../lang ./AnalysisBase ./utils ./CreditEstimator ./_AnalysisOptions ../CalculateField dojo/i18n!../../nls/jsapi dojo/text!./templates/ReconstructTracks.html".split(" "),
function(u,v,l,d,f,m,k,w,J,q,h,K,e,x,y,z,A,B,C,D,r,L,M,N,s,O,P,Q,R,S,T,E,n,F,g,U,G,H,t,I){l=l([z,A,B,C,D,G,F],{declaredClass:"esri.dijit.analysis.ReconstructTracks",templateString:I,widgetsInTemplate:!0,inputLayer:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"ReconstructTracks",helpFileName:"ReconstructTracks",resultParameter:"output",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);
f.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,t.aggregatePointsTool);d.mixin(this.i18n,t.reconstructTracksTool)},postCreate:function(){this.inherited(arguments);y.add(this._form.domNode,"esriSimpleForm");h.set(this._trackFieldSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){this._aspectHandle&&
(this._aspectHandle.remove(),this._aspectHandle=null);a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c=g.constructAnalysisInputLyrObj(this.inputLayer,!0);a.inputLayer=c;a.trackFields=this._trackFieldSelect.get("value").toString();a.method=this._methodSelect.get("value");a.bufferField=this._bufFieldOutput.get("value");a.summaryFields=k.toJson(this.get("summaryFields"));
this._durSplitValue.get("value")&&(a.timeSplit=this._durSplitValue.get("value")+" "+this._durSplitUnitsSelect.get("value"));this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));b.jobParams=a;b.itemParams={description:q.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:q.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=
this.get("folderId"));this.showGeoAnalyticsParams&&this._datastoreSelect&&(b.isSpatioTemporalDataStore="spatialtemporal"===this._datastoreSelect.get("value"));console.log(b);this.execute(b)}},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=k.toJson(g.constructAnalysisInputLyrObj(this.inputLayer)),a.SummaryFields=k.toJson(this.get("summaryFields")),this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),
a.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(a.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.Context=k.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,
layers:this._isAnalysisSelect?this.inputLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:a.dialog||this._browsedlg,widget:this}).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_handleAttrSelectChange:function(a){var b;"0"!==a&&(a=this.get("statisticSelect"),"0"!==a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),h.set(b,"display","block"),b=a.get("referenceWidget"),d.hitch(b,b._createStatsRow()),a.set("isnewRowAdded",
!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),h.set(c,"display","block"),c=this.get("referenceWidget"),d.hitch(c,c._createStatsRow()),this.set("isnewRowAdded",!0)))},_handleDistUnitsChange:function(a){},_handleDurSplitValue:function(a){},_save:function(){},_buildUI:function(){var a=!0;g.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&
(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers"));g.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._durSplitUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},{value:"Weeks",
label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]);f.forEach(this.summaryFields,function(a){this._currentAttrSelect.set("value",a.onStatisticField);d.hitch(this._currentAttrSelect,this._handleAttrSelectChange,a.onStatisticField)();this._currentStatsSelect.set("value",a.statisticType);d.hitch(this._currentStatsSelect,this._handleStatsValueUpdate,"value","",a.statisticType)()},this);h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?
"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.set("groupBySelect",this.groupByField);h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":
"none");this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._updateAnalysisLayerUI(a);this._loadConnections()},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1))},_createStatsRow:function(){var a,b,c,f,p;a=e.create("tr",null,this._afterStatsRow,"before");c=e.create("td",{style:{width:"45%",maxWidth:"100px"}},a);b=e.create("td",{style:{width:"55%",maxWidth:"104px"}},a);c=
new s({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},e.create("select",null,c));this.set("attributes",{selectWidget:c,inputLayer:this.inputLayer});b=new s({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},e.create("select",null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);m.connect(c,"onChange",this._handleAttrSelectChange);p=e.create("td",{"class":"shortTextInput removeTd",
style:{display:"none",maxWidth:"12px"}},a);f=e.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+u.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},p);m.connect(f,"onclick",d.hitch(this,this._removeStatsRow,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",p);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},
_removeStatsRow:function(a){f.forEach(r.findWidgets(a),function(a){a.destroyRecursive()});e.destroy(a)},_removeStatsRows:function(){f.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"  AND tags:"polygon"'),this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===
a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint"],this._isAnalysisSelect=this._browseLyrsdlg.browseItems.plugIn.checkTimeFilter=!0,this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(this.set("attributes",
{selectWidget:this._trackFieldSelect,inputLayer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),this._removeStatsRows(),this._createStatsRow(),this._calcField||(a=f.filter(this.inputLayer.fields,function(a){return-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)}),console.log(a),this._calcField=new H({layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",css:{base:"esriBufFieldExp",addButton:"btn calcite primary tiny",
closeButton:"btn calcite cancel tiny"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add},this._expressionCtr),this._calcField.startup(),h.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=v.around(this._calcField,"_handleAddButtonClick",d.hitch(this,function(a){return d.hitch(this,function(a,b){var d=this._calcField.get("expression")[0];this._bufFieldOutput.set("value","\x3d "+
d.sqlExpression);this._exprDialog.hide()})})),this._calcField.on("close",d.hitch(this,function(){this._exprDialog.hide()}))))},_handleExpBtnClick:function(){this._calcField.reset();this._exprDialog.show()},_handleCalculateSuccess:function(a){this._dialog.hide()},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){if(n.isDefined(a)&&("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===
a.geometryType))this.inputLayer=a},_setAttributesAttr:function(a){if(a.inputLayer){n.isDefined(a.allowSelectLabel)||(a.allowSelectLabel=!0);var b,c,d,e=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];b=a.inputLayer;c=a.selectWidget;d=b.fields;a.allowSelectLabel&&c.addOption({value:"",label:this.i18n.attribute});a.allowStringType&&e.push("esriFieldTypeString");f.forEach(d,function(a){-1!==f.indexOf(e,a.type)&&a.name!==b.objectIdField&&c.addOption({value:a.name,
label:n.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"COUNT",label:this.i18n.count});a.addOption({value:"SUM",label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"RANGE",label:this.i18n.range});a.addOption({value:"STDDEV",label:this.i18n.standardDev});
a.addOption({value:"VARIANCE",label:this.i18n.variance})},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a=[],b,c;x(".statsSelect",this.domNode).forEach(function(d,f){b=r.byNode(d);c=b.get("attributeSelect");if("0"!==c.get("value")&&"0"!==b.get("value")){var e={};e.statisticType=b.get("value");e.onStatisticField=c.get("value");a.push(e)}});return a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return g.validateServiceName(a,
{textInput:this._outputLayerInput})},_setInputLayersAttr:function(a){n.isDefined(a)&&(this.inputLayers=a=f.filter(a,function(a,c){return-1!==f.indexOf(["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolygon"],a.geometryType)}))},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});w("extend-esri")&&d.setObject("dijit.analysis.ReconstructTracks",l,E);return l});