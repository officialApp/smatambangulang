(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sekolah-guru-raport1"],{"95d4":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"font-times"},[e("p",{staticClass:"text-center text-uppercase"},[t._v("Hasil belajar Siswa")]),"taufik"!=t.pilih.name?e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-sm-6 cursor-pointer animated fadeInDown",on:{click:function(a){return t.$router.push("/sekolah/guru/raport?id_siswa="+t.pilih.id_siswa)}}},[e("div",{staticClass:"py-2 text-center bg-red-light rounded-lg shadow-lg"},[e("p",{staticClass:"font-times font-bold text-uppercase"},[e("span",{staticClass:"typcn typcn-document-delete"}),t._v(" Hasil Belajar siswa : "+t._s(t.pilih.nama_siswa))])])])])]):t._e(),e("br"),t.ready?e("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[e("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("div",{staticClass:"w-full sm:w-1/3"}),e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 order-2"},[e("download-excel",{attrs:{data:t.td}},[e("button",{staticClass:"btn btn-sm btn-success  ",attrs:{type:"button"}},[e("span",{staticClass:"typcn typcn-chart-bar"}),t._v(" Excel")])])],1),e("div",{staticClass:"col-sm-3 order-3"},[e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),e("div",{staticClass:"col-sm-4 order-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]}}},[e("option",[t._v("10")]),e("option",[t._v("20")]),e("option",[t._v("50")]),e("option",[t._v("100")]),e("option",[t._v("1000")])])])])])]),e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[e("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[e("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[e("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[e("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,s){return e("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:s+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(e){return t.sort(a)}}},[e("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v("\n                  "+t._s(a)+"\n                  "),t.orderWith?[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-down"})])]:[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),e("tbody",t._l(t.td,(function(a,s){return e("tr",{key:s+"td"},[e("td",[t._v(t._s(s+t.temp1+1))]),e("no-ssr",t._l(t.thnya,(function(n,i){return e("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(n),expression:"!less.includes(item2)"}],key:i+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[n])},on:{tap:function(e){t.ambil(a,s),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],e("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[e("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):e("div",[e("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"typcn typcn-zoom"})])])}],i=(e("7514"),e("386d"),e("6b54"),e("a481"),e("ac6a"),e("456d"),e("eeb9")),o=e("1bdd"),c=e("28a6"),r=e("bc3a"),l=e.n(r),d=e("03a0"),p={components:{jsontoexcel:c["a"],upload:i["a"],downloadExcel:o["a"]},layout:"guru",data:function(){return{kelas:[],thbackground:"initial",thcolor:"asd",datanya:[],vdata:{},ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id_kelas"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,mdq:"xlg",kirim:{},aksi:"insert",formOn:!1,updateOn:!1}},methods:{insert:function(){var t=this,a=new FormData;a.append("data","Insert into sekolah_data_siswa (id_kelas,nama_siswa,nis,nisn,kota,t_lahir,t_masuk,kelamin,agama,status,anakke,alamat_siswa,telpon_siswa,sekolahasal,kelas,ayah,ibu,alamatortu,hportu,pekerjaanayah,pekerjaanibu,wali,alamatwali,hpwali,pekerjaanwali) VALUES ('".concat(this.vdata.id_kelas,"','").concat(this.vdata.nama_siswa,"','").concat(this.vdata.nis,"','").concat(this.vdata.nisn,"','").concat(this.vdata.kota,"','").concat(this.vdata.t_lahir,"','").concat(this.vdata.t_masuk,"','").concat(this.vdata.kelamin,"','").concat(this.vdata.agama,"','").concat(this.vdata.status,"','").concat(this.vdata.anakke,"','").concat(this.vdata.alamat_siswa,"','").concat(this.vdata.telpon_siswa,"','").concat(this.vdata.sekolahasal,"','").concat(this.vdata.kelas,"','").concat(this.vdata.ayah,"','").concat(this.vdata.ibu,"','").concat(this.vdata.alamatortu,"','").concat(this.vdata.hportu,"','").concat(this.vdata.pekerjaanayah,"','").concat(this.vdata.pekerjaanibu,"','").concat(this.vdata.wali,"','").concat(this.vdata.alamatwali,"','").concat(this.vdata.hpwali,"','").concat(this.vdata.pekerjaanwali,"')")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Simpan Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},update:function(){var t=this,a=new FormData;a.append("data","UPDATE sekolah_data_siswa SET id_kelas='".concat(this.vdata.id_kelas,"',nama_siswa='").concat(this.vdata.nama_siswa,"',nis='").concat(this.vdata.nis,"',nisn='").concat(this.vdata.nisn,"',kota='").concat(this.vdata.kota,"',t_lahir='").concat(this.vdata.t_lahir,"',t_masuk='").concat(this.vdata.t_masuk,"',kelamin='").concat(this.vdata.kelamin,"',agama='").concat(this.vdata.agama,"',status='").concat(this.vdata.status,"',anakke='").concat(this.vdata.anakke,"',alamat_siswa='").concat(this.vdata.alamat_siswa,"',telpon_siswa='").concat(this.vdata.telpon_siswa,"',sekolahasal='").concat(this.vdata.sekolahasal,"',kelas='").concat(this.vdata.kelas,"',ayah='").concat(this.vdata.ayah,"',ibu='").concat(this.vdata.ibu,"',alamatortu='").concat(this.vdata.alamatortu,"',hportu='").concat(this.vdata.hportu,"',pekerjaanayah='").concat(this.vdata.pekerjaanayah,"',pekerjaanibu='").concat(this.vdata.pekerjaanibu,"',wali='").concat(this.vdata.wali,"',alamatwali='").concat(this.vdata.alamatwali,"',hpwali='").concat(this.vdata.hpwali,"',pekerjaanwali='").concat(this.vdata.pekerjaanwali,"' Where id_siswa = '").concat(this.vdata.id_siswa,"'")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Update Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},remove:function(){var t=this,a=new FormData;a.append("data","DELETE FROM sekolah_data_siswa WHERE  id_siswa =  '".concat(this.vdata.id_siswa,"'")),a.append("database","infolay3_test"),confirm("Yakin dihapus?")&&l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Delete Data Berhasil!");var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()})).catch((function(a){var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var e=this.$_.clone(t);console.log(e),this.vdata=e,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},refreshData:function(){var t=this,a=new FormData;a.append("data","select tb1.id_siswa,tb2.nama_kelas,tb1.id_kelas,tb1.nama_siswa,tb1.nis,tb1.nisn,tb1.kota,tb1.t_lahir,tb1.t_masuk,tb1.kelamin,tb1.agama,tb1.status,tb1.anakke,tb1.alamat_siswa,tb1.telpon_siswa,tb1.sekolahasal,tb1.kelas,tb1.ayah,tb1.ibu,tb1.alamatortu,tb1.hportu,tb1.pekerjaanayah,tb1.pekerjaanibu,tb1.wali,tb1.alamatwali,tb1.hpwali,tb1.pekerjaanwali from sekolah_data_siswa tb1 left join setup_kelas tb2 on tb2.id_kelas=tb1.id_kelas"),a.append("table","sekolah_data_siswa"),a.append("database","infolay3_test"),a.append("aksi","select"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log("mysql auto",a),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(e){e.style.position="relative";var s=document.createElement("div");s.innerHTML="&nbsp;",s.style.top=0,s.style.right=0,s.style.bottom=0,s.style.width="5px",s.style.position="absolute",s.style.cursor="col-resize",s.addEventListener("mousedown",(function(s){t=e,a=e.offsetWidth-s.pageX})),e.appendChild(s)})),document.addEventListener("mousemove",(function(e){t&&(t.style.width=a+e.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})(),t.datanya=a.data;var e=Object.keys(a.data[0]);e=t.$_.difference(e,t.unless),t.thnya=e}),1e3)}))},
//!==================
//! hapus dari sini
//! =================
scramble:function(t){for(var a="",e="",s=0;s<t.length;s++)a="",a=t.charAt(s),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),e+=a;return e},checkedAll:function(){console.log(this.checkedItem)},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString())),this.$store.state.print2=this.td,alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},go:function(t){console.log("uploaded")},edits:function(){var t=this;setTimeout((function(){t.$nuxt.$emit("editTable1",obj)}),1e3)},modalKey:function(t){"Escape"==t.key&&(this.modal=!1)},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:d,includeSeconds:!0})},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:d})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:d,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith},mediaQueries:function(){this.mdq=window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl"}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},unlessForm:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{modal:function(){this.modal?document.addEventListener("keydown",this.modalKey):(document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey))},datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{pilihForm:function(){var t=this.pilih;Object.keys(t);return this.unlessForm.forEach((function(a){delete t[a]})),t},bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,e=this.datanya;//! order fungsi
if(this.orderBy.length>0){var s=this.orderWith?"asc":"desc";e=this.$_.orderBy(e,[this.orderBy],[s])}//! search fungsi
var n=this.thnya;return e=e.filter((function(a,e,s){var i=!1;if(n.filter((function(e){"string"==typeof a[e]?-1!=a[e].toLowerCase().indexOf(t.search.toLowerCase())&&(i=!0):null!=a[e]&&-1!=a[e].toString().indexOf(t.search)&&(i=!0)})),i)return a})),e=e.map((function(t){var e={},s=Object.keys(t);return s=a.$_.difference(s,a.unless),s.forEach((function(n,i){s.find((function(t){return t==a.date[i]})),e[n]=t[n]})),e})),e=e.slice(this.temp1,this.temp2),e}},mounted:function(){var t=this,a=new FormData;a.append("data","select id_kelas,nama_kelas from setup_kelas"),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.kelas=a.data,t.$forceUpdate()}));var e=this;e.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.refreshData()}},h=p,u=(e("d007"),e("2877")),m=Object(u["a"])(h,s,n,!1,null,"808638f2",null);a["default"]=m.exports},d007:function(t,a,e){"use strict";var s=e("f4a3"),n=e.n(s);n.a},f4a3:function(t,a,e){}}]);
//# sourceMappingURL=page-sekolah-guru-raport1.f5430372.js.map