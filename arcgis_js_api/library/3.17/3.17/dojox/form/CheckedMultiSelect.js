//>>built
require({cache:{"url:dojox/form/resources/_CheckedMultiSelectMenuItem.html":'\x3ctr class\x3d"dijitReset dijitMenuItem" dojoAttachPoint\x3d"focusNode" role\x3d"menuitemcheckbox" tabIndex\x3d"-1"\r\n\tdojoAttachEvent\x3d"ondijitclick:_onClick"\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemIconCell" role\x3d"presentation"\r\n\t\t\x3e\x3cdiv src\x3d"${_blankGif}" alt\x3d"" class\x3d"dijitMenuItemIcon ${_iconClass}" dojoAttachPoint\x3d"iconNode"\r\n\t\t\t\x3e\x3cinput class\x3d"dojoxCheckedMultiSelectCheckBoxInput" dojoAttachPoint\x3d"inputNode" type\x3d"${_type.type}"\r\n\t\t/\x3e\x3c/div\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemLabel" colspan\x3d"2" dojoAttachPoint\x3d"containerNode,labelNode"\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuItemAccelKey" style\x3d"display: none" dojoAttachPoint\x3d"accelKeyNode"\x3e\x3c/td\r\n\t\x3e\x3ctd class\x3d"dijitReset dijitMenuArrowCell" role\x3d"presentation"\x3e\x26nbsp;\x3c/td\r\n\x3e\x3c/tr\x3e',
"url:dojox/form/resources/_CheckedMultiSelectItem.html":'\x3cdiv class\x3d"dijitReset ${baseClass}"\r\n\t\x3e\x3cinput class\x3d"${baseClass}Box" data-dojo-type\x3d"dijit.form.CheckBox" data-dojo-attach-point\x3d"checkBox" \r\n\t\tdata-dojo-attach-event\x3d"_onClick:_changeBox" type\x3d"${_type.type}" data-dojo-props\x3d\'disabled:${disabled}, readOnly:${readOnly}\' baseClass\x3d"${_type.baseClass}"\r\n\t/\x3e\x3cdiv class\x3d"dijitInline ${baseClass}Label" data-dojo-attach-point\x3d"labelNode" data-dojo-attach-event\x3d"onclick:_onClick"\x3e\x3c/div\r\n\x3e\x3c/div\x3e\r\n',
"url:dojox/form/resources/CheckedMultiSelect.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft" id\x3d"widget_${id}"\r\n\t\x3e\x3cdiv data-dojo-attach-point\x3d"comboButtonNode"\r\n\t\x3e\x3c/div\r\n\t\x3e\x3cdiv data-dojo-attach-point\x3d"selectNode" class\x3d"dijit dijitReset dijitInline ${baseClass}Wrapper" data-dojo-attach-event\x3d"onmousedown:_onMouseDown,onclick:focus"\r\n\t\t\x3e\x3cselect class\x3d"${baseClass}Select dojoxCheckedMultiSelectHidden" multiple\x3d"true" data-dojo-attach-point\x3d"containerNode,focusNode"\x3e\x3c/select\r\n\t\t\x3e\x3cdiv data-dojo-attach-point\x3d"wrapperDiv"\x3e\x3c/div\r\n\t\x3e\x3c/div\r\n\x3e\x3c/div\x3e'}});
define("dojox/form/CheckedMultiSelect","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/event dojo/dom-geometry dojo/dom-class dojo/dom-construct dojo/i18n dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/Menu dijit/MenuItem dijit/Tooltip dijit/form/_FormSelectWidget dijit/form/ComboButton dojo/text!dojox/form/resources/_CheckedMultiSelectMenuItem.html dojo/text!dojox/form/resources/_CheckedMultiSelectItem.html dojo/text!dojox/form/resources/CheckedMultiSelect.html dojo/i18n!dojox/form/nls/CheckedMultiSelect dijit/form/CheckBox".split(" "),
function(f,h,c,k,l,d,g,m,n,p,q,r,s,t,e,u,v,w,x,y,C){var z=f("dojox.form._CheckedMultiSelectItem",[n,p,q],{templateString:x,baseClass:"dojoxMultiSelectItem",option:null,parent:null,disabled:!1,readOnly:!1,postMixInProperties:function(){this._type=this.parent.multiple?{type:"checkbox",baseClass:"dijitCheckBox"}:{type:"radio",baseClass:"dijitRadio"};this.disabled||(this.disabled=this.option.disabled=this.option.disabled||!1);this.readOnly||(this.readOnly=this.option.readOnly=this.option.readOnly||!1);
this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.labelNode.innerHTML=this.option.label},_changeBox:function(){!this.get("disabled")&&!this.get("readOnly")&&(this.parent.multiple?this.option.selected=this.checkBox.get("value")&&!0:this.parent.set("value",this.option.value),this.parent._updateSelection(),this.parent.focus())},_onClick:function(a){this.get("disabled")||this.get("readOnly")?k.stop(a):this.checkBox._onClick(a)},_updateBox:function(){this.checkBox.set("value",
this.option.selected)},_setDisabledAttr:function(a){this.disabled=a||this.option.disabled;this.checkBox.set("disabled",this.disabled);d.toggle(this.domNode,"dojoxMultiSelectDisabled",this.disabled)},_setReadOnlyAttr:function(a){this.checkBox.set("readOnly",a);this.readOnly=a}}),A=f("dojox.form._CheckedMultiSelectMenu",s,{multiple:!1,buildRendering:function(){this.inherited(arguments);var a=this.menuTableNode=this.domNode,b=this.domNode=g.create("div",{style:{overflowX:"hidden",overflowY:"scroll"}});
a.parentNode&&a.parentNode.replaceChild(b,a);d.remove(a,"dijitMenuTable");b.className=a.className+" dojoxCheckedMultiSelectMenu";a.className="dijitReset dijitMenuTable";a.setAttribute("role","listbox");b.setAttribute("role","presentation");b.appendChild(a)},resize:function(a){a&&(l.setMarginBox(this.domNode,a),"w"in a&&(this.menuTableNode.style.width="100%"))},onClose:function(){this.inherited(arguments);this.menuTableNode&&(this.menuTableNode.style.width="")},onItemClick:function(a,b){"undefined"==
typeof this.isShowingNow&&this._markActive();this.focusChild(a);if(a.disabled||a.readOnly)return!1;if(!this.multiple)this.onExecute();a.onClick(b)}}),B=f("dojox.form._CheckedMultiSelectMenuItem",t,{templateString:w,option:null,parent:null,iconClass:"",postMixInProperties:function(){this.parent.multiple?(this._iconClass="dojoxCheckedMultiSelectMenuCheckBoxItemIcon",this._type={type:"checkbox"}):(this._iconClass="",this._type={type:"hidden"});this.disabled=this.option.disabled;this.checked=this.option.selected;
this.label=this.option.label;this.readOnly=this.option.readOnly;this.inherited(arguments)},onChange:function(a){},_updateBox:function(){d.toggle(this.domNode,"dojoxCheckedMultiSelectMenuItemChecked",!!this.option.selected);this.domNode.setAttribute("aria-checked",this.option.selected);this.inputNode.checked=this.option.selected;this.parent.multiple||d.toggle(this.domNode,"dijitSelectSelectedOption",!!this.option.selected)},_onClick:function(a){!this.disabled&&!this.readOnly&&(this.parent.multiple?
(this.option.selected=!this.option.selected,this.parent.onChange(),this.onChange(this.option.selected)):this.option.selected||(c.forEach(this.parent.getChildren(),function(a){a.option.selected=!1}),this.option.selected=!0,this.parent.onChange(),this.onChange(this.option.selected)));this.inherited(arguments)}});return f("dojox.form.CheckedMultiSelect",u,{templateString:y,baseClass:"dojoxCheckedMultiSelect",required:!1,invalidMessage:"$_unset_$",_message:"",dropDown:!1,labelText:"",tooltipPosition:[],
postMixInProperties:function(){this.inherited(arguments);this._nlsResources=m.getLocalization("dojox.form","CheckedMultiSelect",this.lang);"$_unset_$"==this.invalidMessage&&(this.invalidMessage=this._nlsResources.invalidMessage)},_fillContent:function(){this.inherited(arguments);if(this.options.length&&!this.value&&this.srcNodeRef){var a=this.srcNodeRef.selectedIndex||0;this.value=this.options[0<=a?a:0].value}this.dropDown&&(d.toggle(this.selectNode,"dojoxCheckedMultiSelectHidden"),this.dropDownMenu=
new A({id:this.id+"_menu",style:"display: none;",multiple:this.multiple,onChange:h.hitch(this,"_updateSelection")}))},startup:function(){this.dropDown&&(this.dropDownButton=new v({label:this.labelText,dropDown:this.dropDownMenu,baseClass:"dojoxCheckedMultiSelectButton",maxHeight:this.maxHeight},this.comboButtonNode));this.inherited(arguments)},_onMouseDown:function(a){a.preventDefault()},validator:function(){return!this.required?!0:c.some(this.getOptions(),function(a){return a.selected&&null!=a.value&&
0!=a.value.toString().length})},validate:function(a){e.hide(this.domNode);(a=this.isValid(a))||this.displayMessage(this.invalidMessage);return a},isValid:function(a){return this.validator()},getErrorMessage:function(a){return this.invalidMessage},displayMessage:function(a){e.hide(this.domNode);a&&e.show(a,this.domNode,this.tooltipPosition)},onAfterAddOptionItem:function(a,b){},_addOptionItem:function(a){var b;this.dropDown?(b=new B({option:a,parent:this.dropDownMenu}),this.dropDownMenu.addChild(b)):
(b=new z({option:a,parent:this,disabled:this.disabled,readOnly:this.readOnly}),this.wrapperDiv.appendChild(b.domNode));this.onAfterAddOptionItem(b,a)},_refreshState:function(){this.validate(this.focused)},onChange:function(a){this._refreshState()},reset:function(){this.inherited(arguments);e.hide(this.domNode)},_updateSelection:function(){this.inherited(arguments);this._handleOnChange(this.value);c.forEach(this._getChildren(),function(a){a._updateBox()});g.empty(this.containerNode);var a=this;c.forEach(this.value,
function(b){b=g.create("option",{value:b,label:b,selected:"selected"});g.place(b,a.containerNode)});if(this.dropDown&&this.dropDownButton){var b=0,d="";c.forEach(this.options,function(a){a.selected&&(b++,d=a.label)});this.dropDownButton.set("label",this.multiple?h.replace(this._nlsResources.multiSelectLabelText,{num:b}):d)}},_getChildren:function(){return this.dropDown?this.dropDownMenu.getChildren():c.map(this.wrapperDiv.childNodes,function(a){return r.byNode(a)})},invertSelection:function(a){this.multiple&&
(c.forEach(this.options,function(a){a.selected=!a.selected}),this._updateSelection())},_setDisabledAttr:function(a){this.inherited(arguments);this.dropDown&&this.dropDownButton.set("disabled",a);c.forEach(this._getChildren(),function(b){b&&b.set&&b.set("disabled",a)})},_setReadOnlyAttr:function(a){this.inherited(arguments);"readOnly"in this.attributeMap&&this[this.attributeMap.readOnly].setAttribute("readonly",a);this.readOnly=a;c.forEach(this._getChildren(),function(b){b&&b.set&&b.set("readOnly",
a)})},uninitialize:function(){e.hide(this.domNode);c.forEach(this._getChildren(),function(a){a.destroyRecursive()});this.inherited(arguments)}})});