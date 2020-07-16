(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-backup"],{1545:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bg-white rounded-lg mb-4 p-4",staticStyle:{"font-family":"times new roman"}},[e("JsonToExcel",{staticClass:"cursor-pointer",staticStyle:{display:"none"},attrs:{data:t.listData,name:t.vdata.table,id:"backExcel"}}),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("h2",{staticClass:"text-center"},[t._v("BACKUP")]),e("hr",{staticClass:"style13"}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table,expression:"vdata.table"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.vdata,"table",a.target.multiple?e:e[0])}}},t._l(t.tables,(function(a,n){return e("option",{key:n+"tables"},[t._v(t._s(a))])})),0),e("div",{staticClass:"tips"},[e("button",{staticClass:"btn btn-sm btn-outline-dark",attrs:{type:"button"},on:{click:function(a){return t.backup()}}},[t._v("Backup")]),e("span",{staticClass:"tipstextB"},[t._v("Klik untuk backup")])])]),e("div",{staticClass:"col-sm-6"},[e("h2",{staticClass:"text-center"},[t._v("RESTORE")]),e("p",{staticStyle:{"font-size":"12px"}},[t._v("Masukkan nama Tabel sesuai file !")]),e("hr",{staticClass:"style13"}),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"nama_table"}},[t._v("nama table :")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama_table,expression:"vdata.nama_table"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nama_table",name:"nama_table",placeholder:"nama_table"},domProps:{value:t.vdata.nama_table},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama_table",a.target.value)}}})]),t.finis?e("p",{staticClass:"text-center"},[t._v("BERHASIL UPLOAD !")]):e("p",[t._v("Silahkan Upload!")]),e("input",{attrs:{type:"file",multiple:"false",id:"sheets",accept:"application/x-iwork-keynote-sffnumbers, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:t.onchange}},[t._v("Restore")])])])]),e("hr",{staticClass:"style13"})],1)])},s=[],o=(e("456d"),e("ac6a"),e("28a6")),l=e("ceb1"),i=e("bc3a"),c=e.n(i),r={data:function(){return{datanya:[],vdata:{},tables:[],namaTable:"",listData:[],restores:[],finis:!1}},components:{JsonToExcel:o["a"],ExcelToJson:l["a"]},methods:{onchange:function(t){var a=this,e=new FileReader;this.$nuxt.$emit("busy",!1),e.onload=function(t){var e=t.target.result,n=XLSX.read(e,{type:"binary"});n.SheetNames.forEach((function(t){var e=XLSX.utils.sheet_to_row_object_array(n.Sheets[t]),s=e;console.log(s);var o=Object.keys(s[0]);s.forEach((function(t){var e=new FormData;e.append("data[table]",a.vdata.nama_table?a.vdata.nama_table:"kosong"),e.append("data[database]","infolay2_test"),e.append("data[aksi]","insert"),o.forEach((function(a){console.log(a,t[a]),e.append("data[".concat(a,"]"),t[a])})),a.vdata.nama_table.length>0&&c.a.post("https://infolayanans.space/api/mysql/auto_withoutkey.php",e).then((function(t){console.log(t.data),a.$nuxt.$emit("busy",!1),a.refreshData(),a.finis=!0})).catch((function(t){a.$nuxt.$emit("busy",!1),a.finis=!0,console.log(t)}))}))}))},e.onerror=function(t){console.error("file gagal proses"+t.target.error.code)},e.readAsBinaryString(t.target.files[0])},getData:function(t){var a=this;c.a.get("https://infolayanans.space/api/mysql/getTable.php").then((function(t){console.log(t.data);var e=[];t.data.forEach((function(t){e.push(t.table_name)})),a.tables=e}))},backup:function(){var t=this,a=this,e=new FormData;e.append("data","select * from ".concat(this.vdata.table)),c.a.post(this.$store.state.database+"/api/mysql/auto",e,{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){console.log(e),t.listData=e.data,setTimeout((function(){a.$nuxt.$emit("backExcel",!0)}),1e3)}))},setData:function(t){this.vdata=t}},mounted:function(){var t=this,a=this;this.getData(),this.$nuxt.$on("ExcelToJson",(function(e){console.log(e);var n=Object.keys(e);console.log(n),a.namaTable=n[0],a.restores=e[n[0]];var s=Object.keys(a.restores[0]);console.log(s),console.log(a.namaTable),alert("y"),a.restores.forEach((function(e){var o=new FormData;o.append("data[table]",a.vdata.nama_table?a.vdata.nama_table:n[0]),o.append("data[database]","infolay2_test"),o.append("data[aksi]","insert"),s.forEach((function(t){console.log(t,e[t]),o.append("data[".concat(t,"]"),e[t])})),t.$nuxt.$emit("busy",!0),setTimeout((function(){c.a.post("https://infolayanans.space/api/mysql/auto_withoutkey.php",o).then((function(a){console.log(a.data),t.$nuxt.$emit("busy",!1),t.refreshData()})).catch((function(a){t.$nuxt.$emit("busy",!1),console.log(a)}))}),5e3)}))}))},head:function(){return{title:"Lightcode Login ",script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"}]}}},u=r,p=e("2877"),d=Object(p["a"])(u,n,s,!1,null,null,null);a["default"]=d.exports},ceb1:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("input",{attrs:{type:"file",multiple:"false",id:"sheets",accept:"application/x-iwork-keynote-sffnumbers,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},on:{change:t.onchange}})])},s=[],o=e("f9ef"),l={methods:{onchange:function(t){var a=this;Object(o["excel2json"])(t.target.files,(function(t){a.$nuxt.$emit("ExcelToJson",t),console.log("json",t)}),"excel2json")}}},i=l,c=e("2877"),r=Object(c["a"])(i,n,s,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=page-testing-backup.c0b2f2e2.js.map