(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sekolah-guru-ekstrakulikuler"],{"4b97":function(t,e,a){"use strict";a("ac6a"),a("456d"),a("96cf");var n=a("3b8d"),s=a("d225"),i=a("b0b4"),r=a("bc3a"),o=a.n(r),c=!1,l="",u="",d=localStorage.getItem("auth._token.local"),p=c?"https://infolayanans.space/auto/api2.php":"https://infolayanans.space/auto/api.php",h=function(){function t(){Object(s["a"])(this,t)}return Object(i["a"])(t,[{key:"collection",value:function(t){return l=t,this}},{key:"doc",value:function(t){return t&&(u=t),this}},{key:"set",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){return Object.keys(t)},a=new FormData,""!=u&&(e.id=u),c&&a.append("header",d),a.append("table",l),a.append("data",JSON.stringify(e)),a.append("type","set"),a.append("key",n(e)),t.next=10,o.a.post(p,a).then((function(t){return console.log(t),t.data}));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("table",l),c&&a.append("header",d),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","get"),t.next=8,o.a.post(p,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,c&&a.append("header",d),a.append("table",l),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","delete"),t.next=8,o.a.post(p,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"select",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,c&&a.append("header",d),a.append("table",l),a.append("select",e),""!=u.length&&a.append("id","".concat(u)),a.append("type","select"),t.next=8,o.a.post(p,a).then((function(t){return console.log(t),t.data}));case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=h},"65f0":function(t,e,a){"use strict";var n=a("ca1e"),s=a.n(n);s.a},b0b4:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("85f2"),s=a.n(n);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),s()(t,n.key,n)}}function r(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}},ca1e:function(t,e,a){},d225:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))},d75e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-times"},[a("p",{staticClass:"text-center text-uppercase pb-3"},[t._v("sekolah_ekstrakulikuler")]),a("div",{staticClass:"tips float-right"},[a("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[a("span",{staticClass:"typcn typcn-document-text"})]),a("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-sm-2 col-sm-8"},[a("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[a("tr",[a("td",{staticClass:"text-uppercase text-sm"},[t._v("id_ekstrakulikuler")]),a("td",[t._v(" : ")]),a("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[a("div",{staticClass:"sm-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id_ekstrakulikuler,expression:"vdata.id_ekstrakulikuler"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id_ekstrakulikuler_",id:"id_ekstrakulikuler",name:"id_ekstrakulikuler",disabled:""},domProps:{value:t.vdata.id_ekstrakulikuler},on:{input:function(e){e.target.composing||t.$set(t.vdata,"id_ekstrakulikuler",e.target.value)}}})])])]),a("tr",[a("td",{staticClass:"text-uppercase text-sm"},[t._v("judul")]),a("td",[t._v(" : ")]),a("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[a("div",{staticClass:"sm-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.judul,expression:"vdata.judul"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"judul_",id:"judul",name:"judul",required:""},domProps:{value:t.vdata.judul},on:{input:function(e){e.target.composing||t.$set(t.vdata,"judul",e.target.value)}}})])])]),a("tr",[a("td",{staticClass:"text-uppercase text-sm"},[t._v("ket")]),a("td",[t._v(" : ")]),a("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[a("div",{staticClass:"sm-form"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.ket,expression:"vdata.ket"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"ket",name:"ket",rows:"2",placeholder:"ket..."},domProps:{value:t.vdata.ket},on:{input:function(e){e.target.composing||t.$set(t.vdata,"ket",e.target.value)}}})])])]),a("tr",[a("td",{staticClass:"text-uppercase text-sm"},[t._v("tanggal")]),a("td",[t._v(" : ")]),a("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[a("div",{staticClass:"sm-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",placeholder:"tanggal_",id:"tanggal",name:"tanggal",required:""},domProps:{value:t.vdata.tanggal},on:{input:function(e){e.target.composing||t.$set(t.vdata,"tanggal",e.target.value)}}})])])]),a("br"),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-outline-primary ml-2 font-times text-uppercase",attrs:{type:"submit"}},[a("span",{staticClass:"typcn typcn-edit"}),t._v("\n            "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove")+"\n          ")])])]),a("hr",{staticClass:"style13"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(e){t.aksi="insert",t.clearInput()}}},[a("span",{staticClass:"typcn typcn-plus"}),t._v("Insert\n          ")]),t._v("  \n          "),a("button",{staticClass:"text-uppercase font-times btn btn-sm btn-warning",attrs:{type:"button"},on:{click:function(e){t.aksi="update"}}},[a("span",{staticClass:"typcn typcn-edit"}),t._v("Update\n          ")]),t._v(" \n          "),a("button",{staticClass:"text-uppercase font-times btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){t.aksi="remove"}}},[a("span",{staticClass:"typcn typcn-delete"}),t._v("Delete\n          ")]),t._v(" \n        ")]),a("div",{staticClass:"col-2 text-center"}),a("div",{staticClass:"col-4 text-center"})])])]),a("hr",{staticClass:"style16"}),t.ready?a("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[a("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[a("div",{staticClass:"w-full sm:w-1/3"},[a("div",{staticClass:"input-group mb-2"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),a("div",{staticClass:"w-full sm:w-1/3"}),a("div",{staticClass:"w-full sm:w-1/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3 order-2"},[a("a",{staticClass:"btn-lg btn-success",attrs:{href:"https://infolayanans.space/api/mysql/excel.php?data=select id_ekstrakulikuler,judul,ket,tanggal from sekolah_ekstrakulikuler&database=infolay3_test"}},[a("span",{staticClass:"typcn typcn-chart-bar"})]),a("download-excel",{attrs:{data:t.td}},[a("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"}},[a("span",{staticClass:"typcn typcn-chart-bar"}),t._v("Excel\n              ")])])],1),a("div",{staticClass:"col-sm-3 order-3"},[a("div",{staticClass:"tips"},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[a("span",{staticClass:"typcn typcn-document-text"})]),a("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),a("div",{staticClass:"col-sm-4 order-1"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},[a("option",[t._v("10")]),a("option",[t._v("20")]),a("option",[t._v("50")]),a("option",[t._v("100")]),a("option",[t._v("1000")])])])])])]),a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[a("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[a("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[a("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[a("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(e,n){return a("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(e),expression:"!less.includes(item)"}],key:n+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(a){return t.sort(e)}}},[a("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v("\n                  "+t._s(e)+"\n                  "),t.orderWith?[a("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[a("span",{staticClass:"typcn typcn-arrow-down"})])]:[a("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==e,expression:"orderBy==item"}]},[a("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),a("tbody",t._l(t.td,(function(e,n){return a("tr",{key:n+"td"},[a("td",[t._v(t._s(n+t.temp1+1))]),a("no-ssr",t._l(t.thnya,(function(s,i){return a("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(s),expression:"!less.includes(item2)"}],key:i+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(e[s])},on:{tap:function(a){t.ambil(e,n),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],a("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[a("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),a("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[a("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),a("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):a("div",[a("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[a("span",{staticClass:"typcn typcn-zoom"})])])}],i=(a("7514"),a("386d"),a("6b54"),a("a481"),a("ac6a"),a("456d"),a("1bdd")),r=a("eeb9"),o=(a("bc3a"),a("4b97")),c=a("03a0"),l=new o["a"],u={components:{upload:r["a"],downloadExcel:i["a"]},layout:"guru",data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],vdata:{},ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,mdq:"xlg",kirim:{},aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){var t=this;l.collection("sekolah_ekstrakulikuler").doc().set(this.vdata).then((function(e){t.refreshData(),alert("simpan berhasil")}))},update:function(){var t=this;l.collection("sekolah_ekstrakulikuler").doc().set(this.vdata).then((function(e){t.refreshData(),alert("update berhasil")}))},remove:function(){if(confirm("Yakin dihapus?")){var t=this;l.collection("sekolah_ekstrakulikuler").doc(this.vdata.id_ekstrakulikuler).delete().then((function(e){t.refreshData(),alert("delete berhasil")}))}},ambil:function(t,e){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var a=this.$_.clone(t);console.log(a),this.vdata=a,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var e=Object.keys(this.vdata);e.forEach((function(e){t.vdata[e]=""}))},refreshData:function(){var t=this;l.collection("sekolah_ekstrakulikuler").doc().select("select id_ekstrakulikuler,judul,ket,tanggal from sekolah_ekstrakulikuler").then((function(e){console.log("hasil1",e),setTimeout((function(){t.datanya=e;var a=Object.keys(e[0]);a=t.$_.difference(a,t.unless),t.thnya=a,function(){var t,e;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(a){a.style.position="relative";var n=document.createElement("div");n.innerHTML="&nbsp;",n.style.top=0,n.style.right=0,n.style.bottom=0,n.style.width="5px",n.style.position="absolute",n.style.cursor="col-resize",n.addEventListener("mousedown",(function(n){t=a,e=a.offsetWidth-n.pageX})),a.appendChild(n)})),document.addEventListener("mousemove",(function(a){t&&(t.style.width=e+a.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))}()}),1e3)}))},
//!==================
//! hapus dari sini
//! =================
scramble:function(t){for(var e="",a="",n=0;n<t.length;n++)e="",e=t.charAt(n),"a"==e?e=e.replace("a","x"):"b"==e?e=e.replace("b","v"):"c"==e?e=e.replace("c","u"):"d"==e?e=e.replace("d","w"):"e"==e?e=e.replace("e","y"):"f"==e?e=e.replace("f","z"):"g"==e?e=e.replace("g","t"):"h"==e?e=e.replace("h","s"):"i"==e?e=e.replace("i","r"):"j"==e?e=e.replace("j","q"):"k"==e?e=e.replace("k","p"):"l"==e?e=e.replace("l","o"):"m"==e?e=e.replace("m","n"):"z"==e?e=e.replace("z","f"):"y"==e?e=e.replace("y","e"):"x"==e?e=e.replace("x","a"):"w"==e?e=e.replace("w","d"):"v"==e?e=e.replace("v","b"):"u"==e?e=e.replace("u","c"):"t"==e?e=e.replace("t","g"):"s"==e?e=e.replace("s","h"):"r"==e?e=e.replace("r","i"):"q"==e?e=e.replace("q","j"):"p"==e?e=e.replace("p","k"):"o"==e?e=e.replace("o","l"):"n"==e?e=e.replace("n","m"):"1"==e?e=e.replace("1","0"):"2"==e?e=e.replace("2","8"):"3"==e?e=e.replace("3","9"):"4"==e?e=e.replace("4","7"):"5"==e?e=e.replace("5","6"):"0"==e?e=e.replace("0","1"):"8"==e?e=e.replace("8","2"):"9"==e?e=e.replace("9","3"):"7"==e?e=e.replace("7","4"):"6"==e?e=e.replace("6","5"):" "==e?e=e.replace(" ","_"):"_"==e?e=e.replace("_"," "):"*"==e?e=e.replace("*","/"):"/"==e?e=e.replace("/","*"):","==e?e=e.replace(",","^"):"^"==e&&(e=e.replace("^",",")),a+=e;return a},checkedAll:function(){console.log(this.checkedItem)},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString())),this.$store.state.print2=this.td,alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},go:function(t){console.log("uploaded")},edits:function(){var t=this;setTimeout((function(){t.$nuxt.$emit("editTable1",obj)}),1e3)},modalKey:function(t){"Escape"==t.key&&(this.modal=!1)},isDate:function(t){var e;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),e=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,e.test(t))},distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:c,includeSeconds:!0})},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:c})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:c,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith},mediaQueries:function(){this.mdq=window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl"}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},unlessForm:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{modal:function(){this.modal?document.addEventListener("keydown",this.modalKey):(document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey))},datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{pilihForm:function(){var t=this.pilih;Object.keys(t);return this.unlessForm.forEach((function(e){delete t[e]})),t},bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,e=Object.keys(t[0]);return e=this.$_.difference(e,this.unless),e},td:function(){var t=this,e=this,a=this.datanya;//! order fungsi
if(this.orderBy.length>0){var n=this.orderWith?"asc":"desc";a=this.$_.orderBy(a,[this.orderBy],[n])}//! search fungsi
var s=this.thnya;return a=a.filter((function(e,a,n){var i=!1;if(s.filter((function(a){"string"==typeof e[a]?-1!=e[a].toLowerCase().indexOf(t.search.toLowerCase())&&(i=!0):null!=e[a]&&-1!=e[a].toString().indexOf(t.search)&&(i=!0)})),i)return e})),a=a.map((function(t){var a={},n=Object.keys(t);return n=e.$_.difference(n,e.unless),n.forEach((function(s,i){n.find((function(t){return t==e.date[i]})),a[s]=t[s]})),a})),a=a.slice(this.temp1,this.temp2),a}},mounted:function(){var t=this;t.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.mediaQueries()}))})),this.refreshData()}},d=u,p=(a("65f0"),a("2877")),h=Object(p["a"])(d,n,s,!1,null,"2753f03c",null);e["default"]=h.exports}}]);
//# sourceMappingURL=page-sekolah-guru-ekstrakulikuler.a004c5dc.js.map