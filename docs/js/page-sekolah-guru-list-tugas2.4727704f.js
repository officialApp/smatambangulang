(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sekolah-guru-list-tugas2"],{"1d24":function(t,a,e){"use strict";var n=e("7b03"),s=e.n(n);s.a},"7b03":function(t,a,e){},dd6b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"font-times"},[e("p",{staticClass:"text-center text-uppercase pb-3"},[t._v("sekolah_tugas")]),e("div",{staticClass:"tips float-right"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"taufik"!=t.pilih.name,expression:"pilih.name!='taufik'"}],staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print1}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Satu")])]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"offset-sm-2 col-sm-8"},[e("tr",[e("td",[t._v("Nama Guru")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.nama_guru))])]),e("tr",[e("td",[t._v("Nama Pelajaran")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.nama_pelajaran))])]),e("tr",[e("td",[t._v("Kelas")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.nama_kelas))])]),e("tr",[e("td",[t._v("Jurusan")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.nama_jurusan))])]),e("tr",[e("td",[t._v("Keterangan")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.ket))])]),e("tr",[e("td",[t._v("File")]),e("td",[t._v(" : ")]),e("td",[e("a",{attrs:{href:"https://infolayanans.space/"+t.pilih.file}},[t._v("/"+t._s(t.pilih.file))])])]),e("tr",[e("td",[t._v("tanggal_akhir")]),e("td",[t._v(" : ")]),e("td",[t._v(t._s(t.pilih.tanggal_akhir?t.format(t.pilih.tanggal_akhir):"")+" | "+t._s(t.pilih.tanggal_akhir?t.distanceToNow(t.pilih.tanggal_akhir):"")+" \n            "),t.pilih.tanggal_akhir&&t.isFuture(t.pilih.tanggal_akhir)?e("span",{staticClass:"text-green"},[t._v(" Akan Datang")]):e("span",{staticClass:"text-red"},[t._v("Yang Lalu")])])])])]),e("hr",{staticClass:"style16"}),t.ready?e("div",{staticStyle:{"overflow-x":"auto",width:"100%"}},[e("div",{staticClass:"container flex flex-wrap mx-auto px-4 d-print-none"},[e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0",attrs:{type:"text",id:"searchTable",placeholder:"Cari Data ... "},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("div",{staticClass:"w-full sm:w-1/3"}),e("div",{staticClass:"w-full sm:w-1/3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 order-2"},[e("download-excel",{attrs:{data:t.td}},[e("button",{staticClass:"btn btn-sm btn-success  ",attrs:{type:"button"}},[e("span",{staticClass:"typcn typcn-chart-bar"}),t._v("Excel")])])],1),e("div",{staticClass:"col-sm-3 order-3"},[e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:t.print2}},[e("span",{staticClass:"typcn typcn-document-text"})]),e("span",{staticClass:"tipstextB"},[t._v("Print Laporan")])])]),e("div",{staticClass:"col-sm-4 order-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",staticStyle:{width:"80px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected=a.target.multiple?e:e[0]}}},[e("option",[t._v("10")]),e("option",[t._v("20")]),e("option",[t._v("50")]),e("option",[t._v("100")]),e("option",[t._v("1000")])])])])])]),e("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"table-responsive-sm font-times p-3",staticStyle:{"box-shadow":"1px 4px 6px black",overflow:"scroll"}},[[e("table",{staticClass:"table-print table-sm table-bordered table-striped table-hover table-print border-black",staticStyle:{"overflow-x":"scroll","overflow-y":"hidden",height:"80px","white-space":"nowrap"}},[e("thead",{staticClass:"mdb-color",style:{background:t.thbackground}},[e("tr",{staticClass:"text-white",staticStyle:{overflow:"scroll",color:"white"}},[e("th",{style:{color:t.thcolor}},[t._v("#")]),t._l(t.thnya,(function(a,n){return e("th",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(a),expression:"!less.includes(item)"}],key:n+"th",staticClass:"th-print cursor-pointer uppercase",staticStyle:{"font-size":"21px"},attrs:{scope:"col"},on:{click:function(e){return t.sort(a)}}},[e("span",{staticStyle:{"font-size":"13px"},style:{color:t.thcolor}},[t._v("\n                  "+t._s(a)+"\n                  "),t.orderWith?[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-down"})])]:[e("span",{directives:[{name:"show",rawName:"v-show",value:t.orderBy==a,expression:"orderBy==item"}]},[e("span",{staticClass:"typcn typcn-arrow-up"})])]],2)])}))],2)]),e("tbody",t._l(t.td,(function(a,n){return e("tr",{key:n+"td"},[e("td",[t._v(t._s(n+t.temp1+1))]),e("no-ssr",t._l(t.thnya,(function(s,i){return e("v-touch",{directives:[{name:"show",rawName:"v-show",value:!t.less.includes(s),expression:"!less.includes(item2)"}],key:i+"th2",staticClass:"cursor-pointer",attrs:{tag:"td"},domProps:{innerHTML:t._s(a[s])},on:{tap:function(e){t.ambil(a,n),t.modal=!0,t.aksi="update"}}})})),1)],1)})),0)])],e("div",{staticClass:"float-right"},[t.datanya.length>=t.selected?[e("button",{staticClass:"btn btn-sm btn-outline-info roundec-circle",attrs:{type:"button"},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-info roundec-circle",attrs:{type:"button"},on:{click:t.pagNext}},[t._v("Next")])]:[e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagPrev}},[t._v("Prev")]),t._v("\n           \n          "),e("button",{staticClass:"btn btn-sm btn-black roundec-circle",attrs:{type:"button",disabled:""},on:{click:t.pagNext}},[t._v("Next")])]],2)],2)]):e("div",[e("p",{staticClass:"text-center"},[t._v("Loading Table ...")])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"typcn typcn-zoom"})])])}],i=(e("7514"),e("386d"),e("6b54"),e("a481"),e("ac6a"),e("456d"),e("7f7f"),e("1bdd")),o=e("eeb9"),r=e("bc3a"),l=e.n(r),c=e("03a0"),d={components:{upload:o["a"],downloadExcel:i["a"]},layout:"siswa",data:function(){return{thbackground:"initial",thcolor:"asd",datanya:[],sekolah_tugas:"",sekolah_data_guru:"",setup_pelajaran:"",setup_kelas:"",vdata:{},file:"",imgs:[],ready:!1,search:"",pilih:{name:"taufik",hobby:"coding"},thnya:{},err:!1,checkedItem:[],less:[,"_id","id_guru","id_kelas","id_pelajaran","file","tanggal_awal"],modal:!1,modalAction:"preview",selected:10,pagination:1,temp1:0,temp2:10,orderBy:"",orderWith:!0,mdq:"xlg",kirim:{},aksi:"insert",formOn:!1,updateOn:!1}},methods:{getFile:function(t){this.file=t.target.files[0]},compress:function(t){var a,e,n=this;t.target.files[0].size>1e7?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var s,i=[],o=[],r="null",l=0;l<t.target.files.length;l++)n.imgs.push(t.target.files[l]),a=t.target.files[l],e=new FileReader,e.onload=function(t){},e.readAsDataURL(a),s=t.target.files[l],r=s.size<1e6?30:s.size<2e6?25:s.size<3e6?20:s.size<4e6?15:10,n.$daycaca.compress(s,r,(function(t){n.gambar=t,i.push(t),n.$urltofile(t,s.name,s.type).then((function(t){o.push(t)}))}));console.log("base64",i),setTimeout((function(){console.log("file",o[0]),n.file=o[0],n.ready=!0}),1e3)}()},inputfile:function(){var t=this,a=new FormData;a.append("file",this.file),a.append("id",this.$store.state.users.id_guru),l.a.post("https://infolayanans.space/api/mysql/upload.php",a,{headers:{"content-type":"multipart/form-data"}}).then((function(a){console.log(a),t.vdata.file=a.data,t.$forceUpdate()}))},insert:function(){var t=this,a=new FormData;a.append("data","Insert into sekolah_tugas (id_guru,id_pelajaran,id_kelas,ket,file,tanggal_awal,tanggal_akhir) VALUES ('".concat(this.vdata.id_guru,"','").concat(this.vdata.id_pelajaran,"','").concat(this.vdata.id_kelas,"','").concat(this.vdata.ket,"','").concat(this.vdata.file,"','").concat(this.vdata.tanggal_awal,"','").concat(this.vdata.tanggal_akhir,"')")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Simpan Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},update:function(){var t=this,a=new FormData;a.append("data","UPDATE sekolah_tugas SET id_guru='".concat(this.vdata.id_guru,"',id_pelajaran='").concat(this.vdata.id_pelajaran,"',id_kelas='").concat(this.vdata.id_kelas,"',ket='").concat(this.vdata.ket,"',file='").concat(this.vdata.file,"',tanggal_awal='").concat(this.vdata.tanggal_awal,"',tanggal_akhir='").concat(this.vdata.tanggal_akhir,"' Where id_tugas = '").concat(this.vdata.id_tugas,"'")),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Update Data Berhasil!"),t.refreshData()})).catch((function(a){t.refreshData()}))},remove:function(){var t=this,a=new FormData;a.append("data","DELETE FROM sekolah_tugas WHERE  id_tugas =  '".concat(this.vdata.id_tugas,"'")),a.append("database","infolay3_test"),confirm("Yakin dihapus?")&&l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),alert("Delete Data Berhasil!");var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()})).catch((function(a){var e=Object.keys(t.vdata);e.forEach((function(a){t.vdata[a]=""})),t.refreshData()}))},ambil:function(t,a){window.scrollTo(0,0);this.updateOn=!0,this.formOn=!0;var e=this.$_.clone(t);console.log(e),this.vdata=e,this.pilih=t},clearInput:function(){var t=this;this.formOn=!0;var a=Object.keys(this.vdata);a.forEach((function(a){t.vdata[a]=""}))},refreshData:function(){var t=this,a=new FormData;a.append("data","select tb1.id_tugas,tb2.nama_guru,tb1.id_guru,tb3.nama_pelajaran,tb1.id_pelajaran,tb4.nama_kelas,tb5.nama_jurusan,tb1.id_kelas,tb1.ket,tb1.file,tb1.tanggal_awal,tb1.tanggal_akhir from sekolah_tugas tb1 left join sekolah_data_guru tb2 on tb2.id_guru=tb1.id_guru left join setup_pelajaran tb3 on tb3.id_pelajaran=tb1.id_pelajaran left join setup_kelas tb4 on tb4.id_kelas=tb1.id_kelas left join setup_jurusan tb5 on tb5.id_jurusan=tb1.id_jurusan  order by tb1.tanggal_akhir desc"),a.append("table","sekolah_tugas"),a.append("database","infolay3_test"),a.append("aksi","select"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log("mysql auto",a),setTimeout((function(){(function(){var t,a;Array.prototype.forEach.call(document.querySelectorAll("table th"),(function(e){e.style.position="relative";var n=document.createElement("div");n.innerHTML="&nbsp;",n.style.top=0,n.style.right=0,n.style.bottom=0,n.style.width="5px",n.style.position="absolute",n.style.cursor="col-resize",n.addEventListener("mousedown",(function(n){t=e,a=e.offsetWidth-n.pageX})),e.appendChild(n)})),document.addEventListener("mousemove",(function(e){t&&(t.style.width=a+e.pageX+"px")})),document.addEventListener("mouseup",(function(){t=void 0}))})(),t.datanya=a.data;var e=Object.keys(a.data[0]);e=t.$_.difference(e,t.unless),t.thnya=e}),1e3)}))},
//!==================
//! hapus dari sini
//! =================
scramble:function(t){for(var a="",e="",n=0;n<t.length;n++)a="",a=t.charAt(n),"a"==a?a=a.replace("a","x"):"b"==a?a=a.replace("b","v"):"c"==a?a=a.replace("c","u"):"d"==a?a=a.replace("d","w"):"e"==a?a=a.replace("e","y"):"f"==a?a=a.replace("f","z"):"g"==a?a=a.replace("g","t"):"h"==a?a=a.replace("h","s"):"i"==a?a=a.replace("i","r"):"j"==a?a=a.replace("j","q"):"k"==a?a=a.replace("k","p"):"l"==a?a=a.replace("l","o"):"m"==a?a=a.replace("m","n"):"z"==a?a=a.replace("z","f"):"y"==a?a=a.replace("y","e"):"x"==a?a=a.replace("x","a"):"w"==a?a=a.replace("w","d"):"v"==a?a=a.replace("v","b"):"u"==a?a=a.replace("u","c"):"t"==a?a=a.replace("t","g"):"s"==a?a=a.replace("s","h"):"r"==a?a=a.replace("r","i"):"q"==a?a=a.replace("q","j"):"p"==a?a=a.replace("p","k"):"o"==a?a=a.replace("o","l"):"n"==a?a=a.replace("n","m"):"1"==a?a=a.replace("1","0"):"2"==a?a=a.replace("2","8"):"3"==a?a=a.replace("3","9"):"4"==a?a=a.replace("4","7"):"5"==a?a=a.replace("5","6"):"0"==a?a=a.replace("0","1"):"8"==a?a=a.replace("8","2"):"9"==a?a=a.replace("9","3"):"7"==a?a=a.replace("7","4"):"6"==a?a=a.replace("6","5"):" "==a?a=a.replace(" ","_"):"_"==a?a=a.replace("_"," "):"*"==a?a=a.replace("*","/"):"/"==a?a=a.replace("/","*"):","==a?a=a.replace(",","^"):"^"==a&&(a=a.replace("^",",")),e+=a;return e},checkedAll:function(){console.log(this.checkedItem)},print1:function(){this.$router.push("/laporan/perdata?less=".concat(this.less.toString())),this.$store.state.print2=[],this.$store.state.print2.push(this.pilih),alert("print satu")},print2:function(){this.$router.push("/laporan/print?less=".concat(this.less.toString())),this.$store.state.print2=this.td,alert("print banyak")},linknya:function(t){console.log("link",t),this.vdata.Gambars=t,this.$forceUpdate()},go:function(t){console.log("uploaded")},edits:function(){var t=this;setTimeout((function(){t.$nuxt.$emit("editTable1",obj)}),1e3)},modalKey:function(t){"Escape"==t.key&&(this.modal=!1)},isDate:function(t){var a;return"[object Date]"===toString.call(t)||("function"===typeof t.replace&&t.replace(/^s+|s+$/gm,""),a=/(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/,a.test(t))},distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:c,includeSeconds:!0})},format:function(t){return this.$datefns.format(t,"DD MMMM YYYY",{locale:c})},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:c,includeSeconds:!0})},isFuture:function(t){return this.$datefns.isFuture(new Date(t),{locale:c,includeSeconds:!0})},pagPrev:function(){this.pagination=this.pagination-1,0==this.pagination&&(this.pagination=1),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},pagNext:function(){this.pagination=this.pagination+1,this.pagination>this.bagi+1&&(this.pagination=Math.round(this.bagi)),this.temp2=this.pagination*this.selected,this.temp1=Math.ceil(this.temp2)-this.selected},sort:function(t){this.orderBy=t,this.orderWith=!this.orderWith},mediaQueries:function(){this.mdq=window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl"}//!==================
//! hapus sampai sini
//! =================
},props:{unless:{type:Array,required:!1,default:function(){return["gone"]}},unlessForm:{type:Array,required:!1,default:function(){return["gone"]}},date:{type:Array,required:!1,default:function(){return["ditanyakan"]}}},watch:{modal:function(){this.modal?document.addEventListener("keydown",this.modalKey):(document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey),document.removeEventListener("keydown",this.modalKey))},datanya:function(){this.datanya.length>0&&(this.ready=!0)},selected:function(){this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected},search:function(){this.pagination=1,this.temp2=this.pagination*this.selected,this.temp1=this.temp2-this.selected}},computed:{pilihForm:function(){var t=this.pilih;Object.keys(t);return this.unlessForm.forEach((function(a){delete t[a]})),t},bagi:function(){var t=this.datanya;return t=t.length/10,console.log(t),t},th:function(){var t=this.datanya,a=Object.keys(t[0]);return a=this.$_.difference(a,this.unless),a},td:function(){var t=this,a=this,e=this.datanya;//! order fungsi
if(this.orderBy.length>0){var n=this.orderWith?"asc":"desc";e=this.$_.orderBy(e,[this.orderBy],[n])}//! search fungsi
var s=this.thnya;return e=e.filter((function(a,e,n){var i=!1;if(s.filter((function(e){"string"==typeof a[e]?-1!=a[e].toLowerCase().indexOf(t.search.toLowerCase())&&(i=!0):null!=a[e]&&-1!=a[e].toString().indexOf(t.search)&&(i=!0)})),i)return a})),e=e.map((function(t){var e={},n=Object.keys(t);return n=a.$_.difference(n,a.unless),n.forEach((function(s,i){n.find((function(t){return t==a.date[i]})),e[s]=t[s]})),e})),e=e.slice(this.temp1,this.temp2),e}},mounted:function(){var t=this;this.vdata.tanggal_awal=new Date;var a=new FormData;a.append("data","select id_guru,nama_guru from sekolah_data_guru"),a.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.sekolah_data_guru=a.data,t.$forceUpdate()}));var e=new FormData;e.append("data","select id_pelajaran,nama_pelajaran from setup_pelajaran"),e.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.setup_pelajaran=a.data,t.$forceUpdate()}));var n=new FormData;n.append("data","select id_kelas,nama_kelas from setup_kelas"),n.append("database","infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",n,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(a){console.log(a),t.setup_kelas=a.data,t.$forceUpdate()}));var s=this;s.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){s.mediaQueries()}))})),this.refreshData()}},p=d,u=(e("1d24"),e("2877")),h=Object(u["a"])(p,n,s,!1,null,"107cc83e",null);a["default"]=h.exports}}]);
//# sourceMappingURL=page-sekolah-guru-list-tugas2.4727704f.js.map