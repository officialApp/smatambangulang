(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-autocompleteObject"],{3846:function(e,n,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},"6b54":function(e,n,t){"use strict";t("3846");var a=t("cb7c"),s=t("0bfb"),r=t("9e1e"),i="toString",o=/./[i],c=function(e){t("2aba")(RegExp.prototype,i,e,!0)};t("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?s.call(e):void 0)})):o.name!=i&&c((function(){return o.call(this)}))},"7f7f":function(e,n,t){var a=t("86cc").f,s=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in s||t("9e1e")&&a(s,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},a2bb:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("section",[t("div",{staticClass:"block"},[t("b-switch",{model:{value:e.openOnFocus,callback:function(n){e.openOnFocus=n},expression:"openOnFocus"}},[e._v("Open dropdown on focus")]),t("b-switch",{model:{value:e.keepFirst,callback:function(n){e.keepFirst=n},expression:"keepFirst"}},[e._v("\n        Keep-first\n        "),t("small",[e._v("(will always have first option pre-selected)")])])],1),t("p",{staticClass:"content"},[t("b",[e._v("Selected:")]),e._v("\n      "+e._s(e.selected)+"\n    ")]),t("b-field",{attrs:{label:"Find a name"}},[t("b-autocomplete",{attrs:{placeholder:"e.g. Anne","keep-first":e.keepFirst,"open-on-focus":e.openOnFocus,data:e.filteredDataObj,field:"user.first_name"},on:{select:function(n){return e.selected=n}},model:{value:e.name,callback:function(n){e.name=n},expression:"name"}})],1)],1)])},s=[],r=(t("7f7f"),t("6b54"),[{id:1,user:{first_name:"Jesse",last_name:"Simmons"},date:"2016/10/15 13:43:27",gender:"Male"},{id:2,user:{first_name:"John",last_name:"Jacobs"},date:"2016/12/15 06:00:53",gender:"Male"},{id:3,user:{first_name:"Tina",last_name:"Gilbert"},date:"2016/04/26 06:26:28",gender:"Female"},{id:4,user:{first_name:"Clarence",last_name:"Flores"},date:"2016/04/10 10:28:46",gender:"Male"},{id:5,user:{first_name:"Anne",last_name:"Lee"},date:"2016/12/06 14:38:38",gender:"Female"},{id:6,user:{first_name:"Sara",last_name:"Armstrong"},date:"2016/09/23 18:50:04",gender:"Female"},{id:7,user:{first_name:"Anthony",last_name:"Webb"},date:"2016/08/30 23:49:38",gender:"Male"}]),i={data:function(){return{data:r,keepFirst:!1,openOnFocus:!1,name:"",selected:null}},computed:{filteredDataObj:function(){var e=this;return this.data.filter((function(n){return n.user.first_name.toString().toLowerCase().indexOf(e.name.toLowerCase())>=0}))}}},o=i,c=t("2877"),l=Object(c["a"])(o,a,s,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=page-testing-autocompleteObject.2f6a0500.js.map