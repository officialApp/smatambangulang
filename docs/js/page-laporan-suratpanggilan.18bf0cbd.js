(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-laporan-suratpanggilan"],{"03a0":function(a,t,e){var n=e("25bb"),r=e("d309");a.exports={distanceInWords:n(),format:r()}},1435:function(a,t,e){"use strict";var n=e("fb8d"),r=e.n(n);r.a},"25bb":function(a,t){function e(){var a={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function t(t,e,n){var r;return n=n||{},r="string"===typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:t}}a.exports=e},"68e4":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticStyle:{"font-family":"times new roman"}},[n("div",{staticClass:"no-print bg-black",staticStyle:{color:"White"}},[n("hr"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2"},[n("button",{staticClass:"btn btn-sm btn-outline-danger no-print mt-4",attrs:{type:"button"},on:{click:function(t){return a.back()}}},[a._v("Go Back!")]),n("br"),n("br")]),n("div",{staticClass:"col-sm-4"},[a._v("\n         Mengetahui :\n          "),n("tr",[n("td",[a._v("Jabatan ")]),n("td",[a._v(" : ")]),n("td",[n("div",{staticClass:"sm-form "},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.jabatan,expression:"vdata.jabatan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Jabatan",name:"Jabatan",placeholder:"Jabatan"},domProps:{value:a.vdata.jabatan},on:{input:function(t){t.target.composing||a.$set(a.vdata,"jabatan",t.target.value)}}})]),n("div",{staticClass:"sm-form "},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"Nama",name:"Nama",placeholder:"Nama"},domProps:{value:a.vdata.nama},on:{input:function(t){t.target.composing||a.$set(a.vdata,"nama",t.target.value)}}})])])])]),n("div",{staticClass:"col-sm-6"},[n("button",{staticClass:"btn btn-sm btn-primary float-right pr-4 mt-4",attrs:{type:"button"},on:{click:function(t){return a.print()}}},[n("span",{staticClass:"typcn typcn-printer"}),a._v(" Print")])])])]),n("hr",{staticClass:"style13"})]),n("div",{},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2",staticStyle:{"margin-left":"10px",position:"absolute",left:"20px",height:"80px"},attrs:{src:"https://infolayanans.space/"+a.info[0].gambar,alt:"no found"}})]),a._m(0)]),n("img",{staticClass:"img-fluid",staticStyle:{width:"100%",height:"20px"},attrs:{src:e("f703")}}),n("br"),n("p",{staticClass:"text-center underline text-uppercase",staticStyle:{"font-size":"21px","font-weight":"bold"}},[a._v("SURAT TUGAS")]),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"offset-9 col-3"},[n("p",[a._v("Kepada")]),n("p",[a._v("Yth. Bapak Ibu Orang tua/wali")]),n("p",[a._v("a.n "+a._s(a.$store.state.print2[0].nama_siswa))]),n("p",[a._v("di")]),n("p",{staticClass:"pl-2"},[a._v("- Tempat")])])]),a._m(1),n("div",{staticClass:"row"},a._l(a.pembatas,(function(t,e){return n("div",{key:e,staticClass:"col-sm-6"},[n("table",{staticStyle:{"margin-left":"50px"}},a._l(a.datanya,(function(t,r){return a.less.includes(t[0])?a._e():n("tr",{key:r+"item"},[n("td",{staticClass:"text-capitalize"},[a._v(a._s(a._f("nounderline")(t[e])))]),n("td",[a._v(" : ")]),n("td",{staticClass:"px-3"},[a._v(a._s(a.$store.state.print2[0][t[e]]))])])})),0)])})),0),a._m(2),n("br"),n("br"),n("div",{staticClass:"float-right",staticStyle:{"padding-right":"70px","font-size":"19px"}},[n("p",[a._v("Tambang Ulang, "+a._s(a.format(new Date)))]),n("p",[a._v(a._s(a.vdata.jabatan))]),n("br"),n("br"),n("p",{staticClass:"underline font-bold",staticStyle:{"font-size":"19px"}},[a._v(a._s(a.vdata.nama))])])])])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-7"},[e("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"25px","line-height":"1.5","line-spacing":"3px"}},[a._v("\n          SMA NEGERI 1 TAMBANG ULANG\n          "),e("br"),a._v("KALIMANTAN SELATAN\n          "),e("br")]),e("p",{staticClass:"pl-3 text-center",staticStyle:{"font-size":"18px"}}),e("p",{staticClass:"text-center",staticStyle:{"font-size":"18px"}},[a._v("Tambang Ulang, Kabupaten Tanah Laut, Kalimantan Selatan 70854")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"p-2"},[e("p",[a._v("Assalamualaiukum WR WB")]),e("p",[a._v("Dengan ini kami mengharapkan kehadiran Bapak Ibu atau Wali dari : ")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"p-2"},[e("p",[a._v("Demikian surat panggilan ini disampaikan dan atas perhatiannya kami ucapkan terima kasih. ")])])}],s=(e("28a5"),e("ac6a"),e("456d"),e("a481"),e("bc3a")),i=e.n(s),o=e("03a0"),l={data:function(){return{datanya:[],pembatas:1,info:{},less:["UrutID","Gambar","_id"],thnya:[],records:"",key:[],vdata:{jabatan:"Kepala Bagian",nama:"....................................."},listnya:[{Nama:"Taufik",Jabatan:"Programmer"},{Nama:"Akbar",Jabatan:"Desainer"},{Nama:"Maliki",Jabatan:"Web Master"},{Nama:"Kino",Jabatan:"Traveller"}],ttd:{Nama:".................................",Jabatan:"Kepala Bagian"}}},filters:{nounderline:function(a){if(a)return a.replace("_"," ")}},methods:{getKeys:function(){var a=this.$store.state.print2[0];a=Object.keys(a),this.key=a},scramble:function(a){for(var t="",e="",n=0;n<a.length;n++)t="",t=a.charAt(n),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),e+=t;return e},ganti:function(a){console.log(a),this.ttd.Nama=JSON.parse(a).Nama,this.ttd.Jabatan=JSON.parse(a).Jabatan,this.$forceUpdate()},print:function(){window.print()},back:function(){this.$router.go(-1)},format:function(a){return this.$datefns.format(a,"DD MMMM YYYY",{locale:o})}},mounted:function(){var a=this;this.less=this.$route.query.less.split(",");var t=new FormData;t.append("data","select * from sekolah"),t.append("database","infolay3_test"),i.a.post("https://infolayanans.space/api/mysql/auto.php",t,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){a.info=t.data,console.log(t),a.$forceUpdate()}));var e=Object.keys(this.$store.state.print2[0]);e.length>20?this.pembatas=2:e.length>30&&(this.pembatas=3),this.datanya=this.$_.chunk(e,this.pembatas),console.log(this.pembatas,this.datanya),setTimeout((function(){a.getKeys()}),500)}},c=l,u=(e("1435"),e("2877")),p=Object(u["a"])(c,n,r,!1,null,"f32ab6a2",null);t["default"]=p.exports},d309:function(a,t,e){var n=e("90e5");function r(){var a=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],t=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],i=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=["AM","PM"],l=["am","pm"],c=["a.m.","p.m."],u={MMM:function(t){return a[t.getMonth()]},MMMM:function(a){return t[a.getMonth()]},dd:function(a){return e[a.getDay()]},ddd:function(a){return r[a.getDay()]},dddd:function(a){return i[a.getDay()]},A:function(a){return a.getHours()/12>=1?o[1]:o[0]},a:function(a){return a.getHours()/12>=1?l[1]:l[0]},aa:function(a){return a.getHours()/12>=1?c[1]:c[0]}},p=["M","D","DDD","d","Q","W"];return p.forEach((function(a){u[a+"o"]=function(t,e){return s(e[a](t))}})),{formatters:u,formattingTokensRegExp:n(u)}}function s(a){switch(a){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+a}}a.exports=r},f703:function(a,t,e){a.exports=e.p+"img/line.6a5ee0b6.jpg"},fb8d:function(a,t,e){}}]);
//# sourceMappingURL=page-laporan-suratpanggilan.18bf0cbd.js.map