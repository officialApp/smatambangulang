(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sekolah-guru-absensi-guru"],{"09b1":function(t,a,e){},"1c06":function(t,a,e){"use strict";var s=e("09b1"),n=e.n(s);n.a},c083:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"font-times"},[e("p",{staticClass:"text-center text-uppercase pb-3"},[t._v("sekolah_absensi_guru")]),e("div",{staticClass:"tips float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),e("br"),e("div",{directives:[{name:"show",rawName:"v-show",value:"admin"==this.$store.state.users.pilih,expression:"this.$store.state.users.pilih=='admin'"}],staticClass:"row"},[e("div",{staticClass:"offset-sm-2 col-sm-8"},[e("form",{attrs:{action:""},on:{submit:function(a){a.preventDefault(),"insert"==t.aksi?t.insert():"update"==t.aksi?t.update():t.remove()}}},[e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"id",id:"id",name:"id",disabled:""},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id_kelas")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id_kelas,expression:"vdata.id_kelas"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"id_kelas",a.target.multiple?e:e[0])}}},t._l(t.kelas,(function(a,s){return e("option",{key:s+"gurus",domProps:{value:a.id_kelas}},[t._v(t._s(a.nama_kelas))])})),0)])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id_guru")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id_guru,expression:"vdata.id_guru"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"id_guru",a.target.multiple?e:e[0])}}},t._l(t.gurus,(function(a,s){return e("option",{key:s+"gurus",domProps:{value:a.id_guru}},[t._v(t._s(a.nama_guru))])})),0)])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("id_pelajaran")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id_pelajaran,expression:"vdata.id_pelajaran"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"id_pelajaran",a.target.multiple?e:e[0])}}},t._l(t.pelajarans,(function(a,s){return e("option",{key:s+"gurus",domProps:{value:a.id_pelajaran}},[t._v(t._s(a.nama_pelajaran))])})),0)])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("tanggal")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("div",{staticClass:"sm-form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.tanggal,expression:"vdata.tanggal"}],staticClass:"form-control form-control-sm",attrs:{type:"date",placeholder:"tanggal",id:"tanggal",name:"tanggal",required:""},domProps:{value:t.vdata.tanggal},on:{input:function(a){a.target.composing||t.$set(t.vdata,"tanggal",a.target.value)}}})])])]),e("tr",[e("td",{staticClass:"text-uppercase text-sm"},[t._v("hadir")]),e("td",[t._v(" : ")]),e("td",{staticStyle:{width:"90%","padding-bottom":"5px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.hadir,expression:"vdata.hadir"}],attrs:{type:"radio",id:"one",value:"hadir",required:""},domProps:{checked:t._q(t.vdata.hadir,"hadir")},on:{change:function(a){return t.$set(t.vdata,"hadir","hadir")}}}),e("label",{attrs:{for:"one"}},[t._v("Hadir")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.hadir,expression:"vdata.hadir"}],attrs:{type:"radio",id:"two",value:"tidak hadir",required:""},domProps:{checked:t._q(t.vdata.hadir,"tidak hadir")},on:{change:function(a){return t.$set(t.vdata,"hadir","tidak hadir")}}}),e("label",{attrs:{for:"two"}},[t._v("Tidak Hadir")])])]),e("br"),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-outline-primary ml-2  font-times text-uppercase",attrs:{type:"submit"}},[e("span",{staticClass:"typcn typcn-edit"}),t._v(" "+t._s("insert"==t.aksi?"insert":"update"==t.aksi?"update":"remove"))])])]),e("hr",{staticClass:"style13"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(a){t.aksi="insert",t.clearInput()}}},[e("span",{staticClass:"typcn typcn-plus"}),t._v("Insert")]),t._v("  \n      "),e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-warning",attrs:{type:"button"},on:{click:function(a){t.aksi="update"}}},[e("span",{staticClass:"typcn typcn-edit"}),t._v("Update")]),t._v(" \n      "),e("button",{staticClass:"text-uppercase font-times btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){t.aksi="remove"}}},[e("span",{staticClass:"typcn typcn-delete"}),t._v("Delete")]),t._v(" \n     ")]),e("div",{staticClass:"col-2 text-center"}),e("div",{staticClass:"col-4 text-center"})])])]),e("br"),e("hr",{staticClass:"style2"}),e("br"),t.ready?e("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[e("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("div",{staticClass:"w-full sm:w-1/3"}),e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 order-2"},[e("download-excel",{attrs:{data:t.td}},[e("button",{staticClass:"btn btn-sm btn-success  ",attrs:{type:"button"}},[e("span",{staticClass:"typcn typcn-chart-bar"}),t._v("Excel")])])],1),e("div",{staticClass:"col-sm-3 order-3"},[e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),e("div",{staticClass:"col-sm-4 order-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]}}},[e("option",[t._v("10")]),e("option",[t._v("20")]),e("option",[t._v("50")]),e("option",[t._v("100")]),e("option",[t._v("1000")])])])])])]),e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[e("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[e("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[e("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[e("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,s){return e("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:s+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(e){return t.sort(a)}}},[e("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v("\n                  "+t._s(a)+"\n                  "),t.orderWith?[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-down"})])]:[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),e("tbody",t._l(t.td,(function(a,s){return e("tr",{key:s+"td"},[e("td",[t._v(t._s(s+t.temp1+1))]),e("no-ssr",t._l(t.thnya,(function(n,i){return e("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(n),expression:"!less.includes(item2)"}],key:i+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[n])},on:{tap:function(e){t.ambil(a,s),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],e("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[e("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):e("div",[e("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"typcn typcn-zoom"})])])}],i=(e("7514"),e("386d"),e("6b54"),e("a481"),e("ac6a"),e("456d"),e("1bdd")),r=e("eeb9"),o=e("bc3a"),l=e.n(o),c=e("03a0"),d={components:{upload:r["a"],downloadExcel:i["a"]},layout:"guru",data:function(){return{gurus:[],kelas:[],pelajarans:[],thbackground:"initial",thcolor:"asd",datanya:[],vdata:{},ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id_guru","id_kelas","id_pelajaran"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,mdq:"xlg",kirim:{},aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){var t=this,a=new FormData;a.append("data","Insert into sekolah_absensi_guru (id_guru,id_pelajaran,id_kelas,tanggal,hadir) VALUES ('".concat(this.vdata.id_guru,"','").concat(this.vdata.id_pelajaran,"','").concat(this.vdata.id_kelas,"','").concat(this.vdata.tanggal,"','").concat(this.vdata.hadir,"')")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Simpan Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},update:function(){var t=this,a=new FormData;a.append("data","UPDATE sekolah_absensi_guru SET id_guru='".concat(this.vdata.id_guru,"',id_pelajaran='").concat(this.vdata.id_pelajaran,"',id_kelas='").concat(this.vdata.id_kelas,"',tanggal='").concat(this.vdata.tanggal,"',hadir='").concat(this.vdata.hadir,"' Where id = '").concat(this.vdata.id,"'")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Update Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},remove:function(){var t=this,a=new FormData;a.append("data","DELETE FROM sekolah_absensi_guru WHERE  id =  '".concat(this.vdata.id,"'")),a.append("database","infolay3_test"),confirm("Yakin dihapus?")&&l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Delete Data Berhasil!");var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()})).catch((function(a){var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var e=this.$_.clone(t);console.log(e),this.vdata=e,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},refreshData:function(){var t=this,a=new FormData;a.append("data","select tb1.id,tb1.id_guru,tb2.nama_guru,tb1.id_pelajaran,tb3.nama_pelajaran,tb1.id_kelas,tb4.nama_kelas,tb1.tanggal,tb1.hadir from sekolah_absensi_guru tb1 left join sekolah_data_guru tb2 on tb2.id_guru=tb1.id_guru left join setup_pelajaran tb3 on tb3.id_pelajaran=tb1.id_pelajaran left join setup_kelas tb4 on tb4.id_kelas=tb1.id_kelas"),a.append("table","sekolah_absensi_guru"),a.append("database","infolay3_test"),a.append("aksi","select"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log("mysql auto",a),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(e){e.style.position="relative";var s=document.createElement("div");s.innerHTML="&nbsp;",s.style.top=0,s.style.right=0,s.style.bottom=0,s.style.width="5px",s.style.position="absolute",s.style.cursor="col-resize",s.addEventListener("mousedown",(function(s){t=e,a=e.offsetWidth-s.pageX})),e.appendChild(s)})),document.addEventListener("mousemove",(function(e){t&&(t.style.width=a+e.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})(),t.datanya=a.data;var e=Object.keys(a.data[0]);e=t.$_.difference(e,t.unless),t.thnya=e}),1e3)}))},
//!==================
//! hapus dari sini
//! =================
scramble:function(t){for(var a="",e="",s=0;s<t.length;s++)a="",a=t.charAt(s),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),e+=a;return e},checkedAll:function(){console.log(this.checkedItem)},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString())),this.$store.state.print2=this.td,alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},go:function(t){console.log("uploaded")},edits:function(){var t=this;setTimeout((function(){t.$nuxt.$emit("editTable1",obj)}),1e3)},modalKey:function(t){"Escape"==t.key&&(this.modal=!1)},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:c,includeSeconds:!0})},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:c})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:c,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith},mediaQueries:function(){this.mdq=window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl"}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},unlessForm:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{modal:function(){this.modal?document.addEventListener("keydown",this.modalKey):(document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey))},datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{pilihForm:function(){var t=this.pilih;Object.keys(t);return this.unlessForm.forEach((function(a){delete t[a]})),t},bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,e=this.datanya;//! order fungsi
if(this.orderBy.length>0){var s=this.orderWith?"asc":"desc";e=this.$_.orderBy(e,[this.orderBy],[s])}//! search fungsi
var n=this.thnya;return e=e.filter((function(a,e,s){var i=!1;if(n.filter((function(e){"string"==typeof a[e]?-1!=a[e].toLowerCase().indexOf(t.search.toLowerCase())&&(i=!0):null!=a[e]&&-1!=a[e].toString().indexOf(t.search)&&(i=!0)})),i)return a})),e=e.map((function(t){var e={},s=Object.keys(t);return s=a.$_.difference(s,a.unless),s.forEach((function(n,i){s.find((function(t){return t==a.date[i]})),e[n]=t[n]})),e})),e=e.slice(this.temp1,this.temp2),e}},mounted:function(){var t=this,a=new FormData;a.append("data","select id_guru,nama_guru from sekolah_data_guru"),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.gurus=a.data,t.$forceUpdate()}));var e=new FormData;e.append("data","select id_kelas,nama_kelas from setup_kelas"),e.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.kelas=a.data,t.$forceUpdate()}));var s=new FormData;s.append("data","select id_pelajaran,nama_pelajaran from setup_pelajaran"),s.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",s,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.pelajarans=a.data,t.$forceUpdate()}));var n=this;n.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){n.mediaQueries()}))})),this.refreshData()}},p=d,u=(e("1c06"),e("2877")),h=Object(u["a"])(p,s,n,!1,null,"30d94728",null);a["default"]=h.exports}}]);
//# sourceMappingURL=page-sekolah-guru-absensi-guru.0597f7de.js.map