(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-auto2"],{"4ee7":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mt-3"}),e("h2",{staticClass:"text-center font-bold"},[t._v("JOIN TABLE")]),e("br"),e("h2",{staticClass:"font-bold font-times uppercase"},[t._v("One To Many")]),t._m(0),e("p",{staticClass:"text-center font-times font-bold",staticStyle:{"font-size":"15px"}},[t._v("NOTE:table1 sebagai table utama")]),e("hr",{staticClass:"style13"}),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"table1"}},[t._v("Table1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table1,expression:"vdata.table1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"table1",name:"table1",placeholder:"table1"},domProps:{value:t.vdata.table1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"table1",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"id1"}},[t._v("ID table 1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id1,expression:"vdata.id1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id1",name:"id1",placeholder:"id1"},domProps:{value:t.vdata.id1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id1",a.target.value)}}})])]),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"table2"}},[t._v("Table2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table2,expression:"vdata.table2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"table2",name:"table2",placeholder:"table2"},domProps:{value:t.vdata.table2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"table2",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"id2"}},[t._v("ID table 2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id2,expression:"vdata.id2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id2",name:"id2",placeholder:"id2"},domProps:{value:t.vdata.id2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id2",a.target.value)}}})])])])]),e("hr",{staticClass:"style3"}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-primary text-center",attrs:{type:"button"},on:{click:function(a){return t.proses()}}},[t._v("PROSES")])]),e("hr",{staticClass:"style3"}),e("h2",{staticClass:"text-center font-bold"},[t._v("HASIL")]),e("pre",[t._v('CARA UNTUK MEMILAH HASIL MENJADI JSON DENGAN LODASH\n\n       _.chain(res.data)\n        // Group the elements of Array based on `id yang sama` property\n        .groupBy("id_tv")\n        // `key` is group\'s name (id), `value` is the array of objects\n        .map((value, key) => ({ id: key, value: value }))\n        .value()\n    ')]),e("pre",[t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{height:"20px",width:"50px"},attrs:{type:"button"},on:{click:function(a){return t.cop(a)}}}),t._v(t._s(t.hasil1))]),e("pre",[t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{height:"20px",width:"50px"},attrs:{type:"button"},on:{click:function(a){return t.cop(a)}}}),t._v(t._s(t.hasil2))]),e("hr",{staticClass:"style13"}),e("h2",{staticClass:"font-bold font-times uppercase"},[t._v("Many To Many")]),t._m(1),e("hr",{staticClass:"style13"}),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"table1"}},[t._v("Table1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table1,expression:"vdata.table1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"table1",name:"table1",placeholder:"table1"},domProps:{value:t.vdata.table1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"table1",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"id1"}},[t._v("ID table 1")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id1,expression:"vdata.id1"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id1",name:"id1",placeholder:"id1"},domProps:{value:t.vdata.id1},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id1",a.target.value)}}})])]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"table2"}},[t._v("Table2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table2,expression:"vdata.table2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"table2",name:"table2",placeholder:"table2"},domProps:{value:t.vdata.table2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"table2",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"id2"}},[t._v("ID table 2")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id2,expression:"vdata.id2"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id2",name:"id2",placeholder:"id2"},domProps:{value:t.vdata.id2},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id2",a.target.value)}}})])]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"table3"}},[t._v("Table3")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.table3,expression:"vdata.table3"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"table3",name:"table3",placeholder:"table3"},domProps:{value:t.vdata.table3},on:{input:function(a){a.target.composing||t.$set(t.vdata,"table3",a.target.value)}}})]),e("div",{staticClass:"sm-form"},[e("label",{attrs:{for:"id3"}},[t._v("ID table 3")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id3,expression:"vdata.id3"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"id3",name:"id3",placeholder:"id3"},domProps:{value:t.vdata.id3},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id3",a.target.value)}}})])])])]),e("hr",{staticClass:"style3"}),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-primary text-center",attrs:{type:"button"},on:{click:function(a){return t.proses2()}}},[t._v("PROSES")])]),e("hr",{staticClass:"style3"}),e("h2",{staticClass:"text-center font-bold"},[t._v("HASIL")]),e("pre",[t._v('CARA UNTUK MEMILAH HASIL MENJADI JSON DENGAN LODASH\n\n       _.chain(res.data)\n        // Group the elements of Array based on `id yang sama` property\n        .groupBy("id_tv")\n        // `key` is group\'s name (id), `value` is the array of objects\n        .map((value, key) => ({ id: key, value: value }))\n        .value()\n    ')]),e("pre",[t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{height:"20px",width:"50px"},attrs:{type:"button"},on:{click:function(a){return t.cop(a)}}}),t._v(t._s(t.hasil3))]),e("pre",[t._v(" "),e("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{height:"20px",width:"50px"},attrs:{type:"button"},on:{click:function(a){return t.cop(a)}}}),t._v(t._s(t.hasil4))])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2",staticStyle:{"border-radius":"20px",width:"200px"},attrs:{src:"http://en.tekstenuitleg.net/media/22949/one-to-many_relationship.png",alt:"top"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2",staticStyle:{"border-radius":"20px",width:"200px"},attrs:{src:"https://fmhelp.filemaker.com/help/17/fmp/en/FMP_Help/images/relational.07.06.1.png",alt:"top"}}),e("p",{staticClass:"font-times font-bold",staticStyle:{"font-size":"15px"}},[t._v("NOTE:table1 sebagai table utama atau yang ditengah")])])}],o={data:function(){return{datanya:[],vdata:{table1:"bamban_tbdomisili",table2:"bamban_tbpenduduk",table3:"bamban_tbperangkat",id1:"PendudukID",id2:"URUTID",id3:"UrutID"},hasil1:"",hasil2:"",hasil3:"",hasil4:""}},methods:{cop:function(){console.dir(e.target.parentElement);var t=e.target.parentElement,a=t.textContent,s=document.createElement("textarea");s.textContent=a,document.body.append(s),s.select(),document.execCommand("copy")},getData:function(){alert("y")},proses:function(){this.hasil1="\n        Select * FROM ".concat(this.vdata.table1," tb1 LEFT JOIN ").concat(this.vdata.table2," tb2 ON tb1.").concat(this.vdata.id1,"= tb2.").concat(this.vdata.id2," ORDER BY tb1.").concat(this.vdata.id1," ASC\n        "),this.hasil2='\n       schemas["'.concat(this.vdata.table1,"\"].aggregate(\n      [\n        {\n          lookup: {\n            from: '").concat(this.vdata.table2,"',\n            localField: '").concat(this.vdata.id1,"',\n            foreignField: '").concat(this.vdata.id2,"',\n            as: 'hasil1'\n          }\n        }\n      ],\n      function(err, data) {\n          if(err)console.log(err)\n          res.json(data)\n      })\n        ")},proses2:function(){this.hasil3="\n        Select * FROM ".concat(this.vdata.table1," tb1 \n        LEFT JOIN ").concat(this.vdata.table2," tb2 ON tb1.").concat(this.vdata.id1,"= tb2.").concat(this.vdata.id2," \n        LEFT JOIN ").concat(this.vdata.table3," tb3 ON tb1.").concat(this.vdata.id1,"= tb2.").concat(this.vdata.id3,"\n        ORDER BY tb1.").concat(this.vdata.id1," ASC\n        "),this.hasil4='\n        schemas["'.concat(this.vdata.table1,"\"].aggregate(\n      [\n        {\n          lookup: {\n            from: '").concat(this.vdata.table2,"',\n            localField: '").concat(this.vdata.id1,"',\n            foreignField: '").concat(this.vdata.id2,"',\n            as: 'hasil1'\n          }\n        },\n        {\n          lookup: {\n            from: '").concat(this.vdata.table3,"',\n            localField: '").concat(this.vdata.id1,"',\n            foreignField: '").concat(this.vdata.id3,"',\n            as: 'hasil2'\n          }\n        }\n      ],\n      function(err, data) {\n          if(err)console.log(err)\n          res.json(data)\n      })\n        ")}}},l=o,r=s("2877"),d=Object(r["a"])(l,i,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=page-testing-auto2.1b39325f.js.map