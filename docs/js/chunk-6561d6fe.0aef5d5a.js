(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6561d6fe"],{"014b":function(t,e,a){"use strict";var s=a("e53d"),i=a("07e3"),n=a("8e60"),r=a("63b6"),o=a("9138"),l=a("ebfd").KEY,c=a("294c"),u=a("dbdb"),d=a("45f2"),f=a("62a0"),p=a("5168"),h=a("ccb9"),g=a("6718"),m=a("47ee"),v=a("9003"),b=a("e4ae"),y=a("f772"),x=a("241e"),w=a("36c3"),C=a("1bc3"),k=a("aebd"),S=a("a159"),_=a("0395"),$=a("bf0b"),O=a("9aa9"),j=a("d9f6"),I=a("c3a1"),L=$.f,E=j.f,A=_.f,z=s.Symbol,P=s.JSON,N=P&&P.stringify,D="prototype",M=p("_hidden"),F=p("toPrimitive"),T={}.propertyIsEnumerable,q=u("symbol-registry"),R=u("symbols"),U=u("op-symbols"),W=Object[D],B="function"==typeof z&&!!O.f,H=s.QObject,K=!H||!H[D]||!H[D].findChild,J=n&&c((function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=L(W,e);s&&delete W[e],E(t,e,a),s&&t!==W&&E(W,e,s)}:E,Q=function(t){var e=R[t]=S(z[D]);return e._k=t,e},G=B&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof z},V=function(t,e,a){return t===W&&V(U,e,a),b(t),e=C(e,!0),b(a),i(R,e)?(a.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),a=S(a,{enumerable:k(0,!1)})):(i(t,M)||E(t,M,k(1,{})),t[M][e]=!0),J(t,e,a)):E(t,e,a)},Y=function(t,e){b(t);var a,s=m(e=w(e)),i=0,n=s.length;while(n>i)V(t,a=s[i++],e[a]);return t},X=function(t,e){return void 0===e?S(t):Y(S(t),e)},Z=function(t){var e=T.call(this,t=C(t,!0));return!(this===W&&i(R,t)&&!i(U,t))&&(!(e||!i(this,t)||!i(R,t)||i(this,M)&&this[M][t])||e)},tt=function(t,e){if(t=w(t),e=C(e,!0),t!==W||!i(R,e)||i(U,e)){var a=L(t,e);return!a||!i(R,e)||i(t,M)&&t[M][e]||(a.enumerable=!0),a}},et=function(t){var e,a=A(w(t)),s=[],n=0;while(a.length>n)i(R,e=a[n++])||e==M||e==l||s.push(e);return s},at=function(t){var e,a=t===W,s=A(a?U:w(t)),n=[],r=0;while(s.length>r)!i(R,e=s[r++])||a&&!i(W,e)||n.push(R[e]);return n};B||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(a){this===W&&e.call(U,a),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),J(this,t,k(1,a))};return n&&K&&J(W,t,{configurable:!0,set:e}),Q(t)},o(z[D],"toString",(function(){return this._k})),$.f=tt,j.f=V,a("6abf").f=_.f=et,a("355d").f=Z,O.f=at,n&&!a("b8e3")&&o(W,"propertyIsEnumerable",Z,!0),h.f=function(t){return Q(p(t))}),r(r.G+r.W+r.F*!B,{Symbol:z});for(var st="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;st.length>it;)p(st[it++]);for(var nt=I(p.store),rt=0;nt.length>rt;)g(nt[rt++]);r(r.S+r.F*!B,"Symbol",{for:function(t){return i(q,t+="")?q[t]:q[t]=z(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in q)if(q[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),r(r.S+r.F*!B,"Object",{create:X,defineProperty:V,defineProperties:Y,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:at});var ot=c((function(){O.f(1)}));r(r.S+r.F*ot,"Object",{getOwnPropertySymbols:function(t){return O.f(x(t))}}),P&&r(r.S+r.F*(!B||c((function(){var t=z();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))}))),"JSON",{stringify:function(t){var e,a,s=[t],i=1;while(arguments.length>i)s.push(arguments[i++]);if(a=e=s[1],(y(e)||void 0!==t)&&!G(t))return v(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!G(e))return e}),s[1]=e,N.apply(P,s)}}),z[D][F]||a("35e8")(z[D],F,z[D].valueOf),d(z,"Symbol"),d(Math,"Math",!0),d(s.JSON,"JSON",!0)},"0395":function(t,e,a){var s=a("36c3"),i=a("6abf").f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==n.call(t)?o(t):i(s(t))}},"19d9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row bg-black text-white p-6"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"col-sm-3"},[s("p",{staticClass:"text-uppercase",staticStyle:{"font-size":"13px"}},[t._v("Ikuti Kami di :")]),s("ul",{staticClass:"list-unstyled",staticStyle:{"font-size":"14px"}},[s("li",[s("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("b477"),expression:"require('@/assets/svg/social-facebook.svg')"}],staticStyle:{width:"19px"},attrs:{alt:"typcon"}}),t._v(" HuluStore")])]),s("li",[s("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("9e79"),expression:"require('@/assets/svg/social-youtube.svg')"}],staticStyle:{width:"19px"},attrs:{alt:"typcon"}}),t._v("  HuluStore")])]),s("li",[s("a",{staticClass:" no-style",staticStyle:{color:"lightblue"},attrs:{href:"#!"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("8044"),expression:"require('@/assets/svg/social-twitter.svg')"}],staticStyle:{width:"19px"},attrs:{alt:"typcon"}}),t._v("  HuluStore")])]),s("li",[s("a",{staticClass:" no-style",staticStyle:{color:"orange"},attrs:{href:"#!"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a("c692"),expression:"require('@/assets/svg/social-instagram.svg')"}],staticStyle:{width:"19px"},attrs:{alt:"typcon"}}),t._v(" HuluStore")])])])]),t._m(3),t._m(4)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6"},[a("h5",{staticClass:"text-uppercase"},[t._v("Tentang : ")]),a("p",{staticStyle:{"font-size":"13px","font-family":"times new roman"}},[t._v("\n                Dengan menggunakan, berbelanja dan/atau mendaftarkan diri Anda di HuluStore.com, berarti Anda setuju untuk terikat dan patuh pada syarat dan ketentuan yang berlaku.\n                Syarat dan ketentuan ini dapat berubah sewaktu-waktu dan kami tidak berkewajiban untuk memberitahukannya kepada Anda.\n                Syarat dan ketentuan ini kami buat untuk kepentingan bersama, untuk menjaga hak dan kewajiban masing-masing pihak, dan tidak dimaksudkan untuk merugikan salah satu pihak.\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-3"},[a("p",{staticClass:"text-uppercase",staticStyle:{"font-size":"13px"}},[t._v("FAQ :")]),a("ul",{staticClass:"list-unstyled",staticStyle:{"font-size":"14px"}},[a("li",[a("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[a("i",{staticClass:"fas fa-allergies"}),t._v(" Syarat & ketentuan")])]),a("li",[a("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[a("i",{staticClass:"fab fa-adn"}),t._v(" Informasi Produk")])]),a("li",[a("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[a("i",{staticClass:"far fa-window-restore"}),t._v(" Pemesanan dan Pembatalan")])]),a("li",[a("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[a("i",{staticClass:"fas fa-money-bill-wave-alt"}),t._v(" Pembayaran")])]),a("li",[a("a",{staticClass:" no-style",staticStyle:{color:"white"},attrs:{href:"#!"}},[a("i",{staticClass:"fas fa-hand-holding-usd"}),t._v(" Pengembalian Uang (Refund)")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("hr",{staticClass:"style13"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12 mt-4"},[a("div",{staticClass:"text-center"},[t._v("\n              © 2018 Copyright: TA.Maliki\n            ")])])}],n=a("2877"),r={},o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},"355d":function(t,e){e.f={}.propertyIsEnumerable},"384e":function(t,e,a){t.exports=a.p+"img/home-outline.9623b689.svg"},"3ca1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"fixed",width:"100%",top:"0","z-index":"1000"}},[s("div",{staticClass:"bg-white h-10 container flex flex-wrap mx-auto px-4 border md:rounded-b-full",staticStyle:{"z-index":"100",position:"static"}},[s("div",{staticClass:"w-1/2 sm:w-3/5 self-center pl-6"},[s("div",{staticClass:"container flex flex-wrap mx-auto px-4"},[s("div",{staticClass:"flex flex-wrap flex-row"},[s("img",{staticClass:"rounded-full hover:bg-green-light cursor-pointer h-30px",attrs:{src:a("3cd9"),alt:"test"},on:{click:function(e){t.sidebar=!t.sidebar,t.closeCall=!t.closeCall}}}),s("router-link",{staticClass:"d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest",attrs:{to:"/"}},[t._v("HOME")]),s("router-link",{staticClass:"d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest",attrs:{to:"/about"}},[t._v("ABOUT")]),s("router-link",{staticClass:"d-none d-md-inline linkMenu hover:text-green-dark hover:bg-green-lightest",attrs:{to:"/blog"}},[t._v("BLOG")])],1)])]),s("div",{staticClass:"w-1/2 sm:w-2/5 self-center pl-6"},[s("div",{staticClass:"pr-10 flex flex-wrap"},[s("div",{staticClass:"container flex flex-wrap"},[s("div",{staticClass:"w-full d-none d-md-inline pt-1 pr-2",class:[{"sm:w-4/5":t.$store.state.user},{"sm:w-4/5":!t.$store.state.user}]},[s("AutoComplete")],1),s("div",{staticClass:"w-full self-center sm:w-1/5 d-none d-md-inline"},[t.$store.state.user?s("img",{directives:[{name:"imgs",rawName:"v-imgs"}],staticClass:"img-thumbnail cursor-pointer shadow-md",staticStyle:{height:"35px"},attrs:{src:t.$store.state.user.picture,alt:"my picture"},on:{click:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall},mouseover:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall}}}):s("img",{staticClass:"cursor-pointer hover:bg-red-light rounded-full",attrs:{id:"extendscall",src:a("7da1"),alt:"thlist"},on:{click:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall,t.extendaktif(e)},mouseover:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall,t.extendaktif(e)}}})]),s("img",{staticClass:"d-md-none cursor-pointer p-1 hover:bg-red-light rounded-full",attrs:{id:"extendscall2",src:a("efb2"),alt:"thlist"},on:{click:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall,e.target.classList.toggle("active")}}})])])])]),s("no-ssr",[s("div",{staticClass:"text-center d-sm-none"},[s("v-touch",{staticStyle:{width:"40px",background:"transparent",height:"900px",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1)]),s("transition",{staticStyle:{"animation-duration":"0.5s"},attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.navbar,expression:"navbar"}],staticClass:"container pt-3 bg-white boxshadow rounded-b-lg",staticStyle:{"min-height":"250px","animation-duration":"0.5s",position:"absolute",left:"0",right:"0","z-index":"100"},attrs:{id:"navbarextend"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 order-0 d-sm-none sm:order-0 md:order-0 lg:order-0 pb-3"},[s("br"),s("AutoComplete",{staticClass:"d-sm-none"})],1),s("div",{staticClass:"col-sm-12 flex flex-wrap flex-col item-center justify-center order-0 sm:order-1 md:order-1 lg:order-1"},[s("div",{staticClass:"text-center"},[t.$store.state.user?[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("br"),s("br"),s("router-link",{staticClass:"btns btns-xs hover:bg-red-light btn-block no-style",attrs:{to:"/profile/"+t.$store.state.user.name.split(" ").join("-")+"?id="+t.$store.state.user._id}},[t._v("Profile")]),s("router-link",{staticClass:"btns btns-xs hover:bg-red-light btn-block no-style",attrs:{to:"/blog?xx="+t.$store.state.user._id}},[t._v("Note ku")]),s("button",{staticClass:"btns btns-xs hover:bg-red-light btn-block cursor-not-allowed",attrs:{disabled:""}},[t._v("Notifikasi")])],1),s("div",{staticClass:"col-sm-9"},[s("router-link",{staticClass:"tips no-style",attrs:{to:"/profile?id="+t.$store.state.user._id}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$store.state.user.picture,expression:"$store.state.user.picture"}],staticClass:"rounded-full",staticStyle:{width:"100px"},attrs:{alt:""}}),s("br"),s("span",{staticClass:"capitalize font-bold font-times text-lg"},[t._v(t._s(t.$store.state.user.name))]),s("br"),t.$store.state.nossr?s("span",{staticClass:"text-lg text-grey-dark uppercase font-times"},[t._v(t._s(t.$store.state.user.title.split(",").join("-")))]):t._e(),s("span",{staticClass:"tipstextR text-xs"},[t._v("Click Edit Profile")])])],1)])]),s("hr",{staticClass:"style13"}),s("div",{staticClass:"tips"},[t.$store.state.user?s("button",{staticClass:"mb-2 btns btns-sm btn-danger",staticStyle:{width:"100px"},attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._v("logout")]):t._e(),s("span",{staticClass:"tipstextB"},[t._v("Keluar")])])]:[s("hr",{staticClass:"style13"}),s("div",{staticClass:"container flex flex-wrap mx-auto px-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"tips"},[s("router-link",{staticClass:"w-1/5 btns btns-sm text-center font-bold d-md-inline linkMenu hover:text-green-dark hover:bg-grey-light",attrs:{to:"/login"}},[t._v("MASUK/LOGIN")]),s("span",{staticClass:"tipstextB"},[t._v("Masuk")])],1),s("br"),s("br"),s("br"),s("div",{staticClass:"tips"},[s("router-link",{staticClass:"w-1/5 btns btns-sm text-center font-bold d-md-inline linkMenu hover:text-green-dark hover:bg-grey-light",attrs:{to:"/register"}},[t._v("DAFTAR")]),s("span",{staticClass:"tipstextB"},[t._v("Daftar")])],1),s("div",{staticClass:"d-sm-none"},[s("br"),s("hr",{staticClass:"style2"})])]),s("div",{staticClass:"col-sm-6"},[s("LoginStrategy",{staticStyle:{width:"300px"}})],1)])])]],2)])])])])]),s("transition",{attrs:{"enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft",mode:"out-in"}},[t.sidebar?s("div",{staticClass:"sidebar w-240px",staticStyle:{height:"630px",position:"fixed","z-index":"1000"}},[s("div",{staticClass:"container-fluid p-3"},[s("div",{staticClass:"row flex flex-col flex-wrap"},[s("div",{staticClass:"text-right mr-4"},[s("img",{attrs:{src:a("3cd9"),alt:"leaf"}})]),s("hr",{staticClass:"style13"}),s("ul",{staticClass:"list-group list-group-flush"},[s("router-link",{staticClass:"hover:bg-grey-light cursor-pointer list-group-item d-flex justify-content-between align-items-center",attrs:{tag:"li",to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"hover:bg-grey-light cursor-pointer list-group-item d-flex justify-content-between align-items-center",attrs:{tag:"li",to:"/blog"}},[t._v("Blog")])],1)])])]):t._e()]),s("div",{staticClass:"bg-white w-full flex d-sm-none flex-wrap flex-row text-center",staticStyle:{position:"fixed",bottom:"0",width:"100%","border-top":"1px solid grey",height:"35px"},attrs:{id:"menuMobile"}},[s("router-link",{staticClass:"w-1/3 self-center hover:bg-green rounded-lg cursor-pointer",attrs:{to:"/"}},[s("img",{attrs:{src:a("384e"),alt:"svg"}})]),s("div",{staticClass:"w-1/3 self-center font-sant hover:bg-green rounded-lg cursor-pointer p-1",on:{click:function(e){t.navbar=!t.navbar,t.closeCall=!t.closeCall}}},[t._v("MENU")]),s("div",{staticClass:"w-1/3 self-center hover:bg-green rounded-lg cursor-pointer"},[t.$store.state.user?[s("router-link",{attrs:{to:"/profile/"+t.$store.state.user.name.split(" ").join("-")+"?id="+t.$store.state.user._id}},[s("img",{attrs:{src:a("ab5f"),alt:"svg"}})])]:[s("router-link",{staticClass:"no-style p-1",attrs:{to:"/login"}},[t._v("\n          Login\n          "),s("img",{staticStyle:{height:"17px"},attrs:{src:a("8178"),alt:"login"}})])]],2)],1),t.closeCall?s("div",{staticClass:"w-100pr bg-transparent",staticStyle:{height:"900px",position:"absolute","z-index":"1"},on:{click:t.closeAll}}):t._e()],1)},i=[],n={data:function(){return{navbar:!1,closeCall:!1,sidebar:!1}},components:{AutoComplete:function(){return a.e("chunk-ffbbe5de").then(a.bind(null,"8ba8"))},LoginStrategy:function(){return a.e("chunk-2d221439").then(a.bind(null,"ca38"))}},methods:{onSwipeRight:function(){this.sidebar=!0,this.closeCall=!0},closeAll:function(){console.log(this.$el.querySelector("#extendscall")),this.$store.state.user||(this.$el.querySelector("#extendscall").classList.toggle("active",!1),this.$el.querySelector("#extendscall2").classList.toggle("active",!1)),this.navbar=!1,this.sidebar=!1,this.closeCall=!1},search:function(){alert("search")},extendaktif:function(t){t.target.classList.toggle("active")}},computed:{}},r=n,o=(a("ec93"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,"1b23a06d",null);e["a"]=l.exports},"3cd9":function(t,e,a){t.exports=a.p+"img/leaf.d1934a66.svg"},"47ee":function(t,e,a){var s=a("c3a1"),i=a("9aa9"),n=a("355d");t.exports=function(t){var e=s(t),a=i.f;if(a){var r,o=a(t),l=n.f,c=0;while(o.length>c)l.call(t,r=o[c++])&&e.push(r)}return e}},"5d58":function(t,e,a){t.exports=a("d8d6")},6718:function(t,e,a){var s=a("e53d"),i=a("584a"),n=a("b8e3"),r=a("ccb9"),o=a("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=n?{}:s.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:r.f(t)})}},"67bb":function(t,e,a){t.exports=a("f921")},"69d3":function(t,e,a){a("6718")("asyncIterator")},"6abf":function(t,e,a){var s=a("e6f3"),i=a("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,i)}},7618:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a("5d58"),i=a.n(s),n=a("67bb"),r=a.n(n);function o(t){return o="function"===typeof r.a&&"symbol"===typeof i.a?function(t){return typeof t}:function(t){return t&&"function"===typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":typeof t},o(t)}function l(t){return l="function"===typeof r.a&&"symbol"===o(i.a)?function(t){return o(t)}:function(t){return t&&"function"===typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":o(t)},l(t)}},"765d":function(t,e,a){a("6718")("observable")},"7da1":function(t,e,a){t.exports=a.p+"img/export-outline.ee48331b.svg"},8044:function(t,e,a){t.exports=a.p+"img/social-twitter.9731158d.svg"},8178:function(t,e,a){t.exports=a.p+"img/arrow-forward.3b08eec6.svg"},"8e6e":function(t,e,a){var s=a("5ca1"),i=a("990b"),n=a("6821"),r=a("11e9"),o=a("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,s=n(t),l=r.f,c=i(s),u={},d=0;while(c.length>d)a=l(s,e=c[d++]),void 0!==a&&o(u,e,a);return u}})},9003:function(t,e,a){var s=a("6b4c");t.exports=Array.isArray||function(t){return"Array"==s(t)}},"990b":function(t,e,a){var s=a("9093"),i=a("2621"),n=a("cb7c"),r=a("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=s.f(n(t)),a=i.f;return a?e.concat(a(t)):e}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9e79":function(t,e,a){t.exports=a.p+"img/social-youtube.0b10a7fc.svg"},a625:function(t,e,a){t.exports=a.p+"img/cancel.df2ab94b.svg"},a708:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},i=[],n=(a("8e6e"),a("456d"),a("7618")),r=a("bd86"),o=(a("a481"),a("ac6a"),a("bc3a")),l=a.n(o),c=a("f051"),u=a("ee0b"),d=a("19d9"),f=a("3ca1");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={components:{imageku:c["a"],Busy:u["a"],Footer:d["a"],Navbar:f["a"]},data:function(){return{test:1,bearer:"",busy:!1}},methods:{scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},mails:function(t,e,a){var s=this,i=new FormData;i.append("data","select * from tbuser where id='".concat(t,"'")),l.a.post("https://infolayanans.space/api/mysql/auto.php",i,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){if(-1!=t.data[0].email.indexOf("@")){console.log(t.data[0].email);var i=new FormData;i.append("tujuan",t.data[0].email),i.append("subjek",e),i.append("text",a),l.a.post("https://infolayanans.space/send_mail.php",i).then((function(t){console.log(t),s.$forceUpdate()}))}else console.log("kosong")}))},notifikasi:function(t,e,a){var s=new FormData;s.append("data","insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)\n         VALUES ('".concat(t,"','").concat(e,"','").concat(a,"','false','driver','1','").concat(new Date,"')")),s.append("database","infolay2_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",s,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(s){var i={id:uniqid(),target_id:t,app:"driver",text:a,link:e,dibaca:"false"};socket.emit("send-message",i)})).catch((function(s){var i={id:uniqid(),target_id:t,app:"driver",text:a,link:e,dibaca:"false"};socket.emit("send-message",i)}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var a=document.URL.indexOf("xxx");if(-1!=a){var s=document.URL.slice(a).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(s),this.bearer=s,localStorage.setItem("auth._token.local",s),localStorage.setItem("auth.local",s),l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:s}}).then((function(a){console.log(a.data),t.$store.commit("changeUser",a.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var a=new Date;localStorage.setItem("expireDate",new Date(a.getTime()+36e5));var s=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(s.picture=t.$auth.user.picture.data.url,s.verified=!0),t.$auth.loginWith("local",{data:h({},s,{oAuth:!0})}).then((function(a){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),this.cekAuth(),"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},mounted:function(){var t=this,e=this,a=document.createElement("script");a.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"),document.head.appendChild(a),setTimeout((function(){(new WOW).init()}),500),"object"===("undefined"===typeof cordova?"undefined":Object(n["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),window.powerManagement.dim((function(){console.log("Wakelock acquired")}),(function(){console.log("Failed to acquire wakelock")})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))},head:{title:"hello",link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"}]}},m=g,v=a("2877"),b=Object(v["a"])(m,s,i,!1,null,null,null);e["default"]=b.exports},ab5f:function(t,e,a){t.exports=a.p+"img/user-outline.f95f7cea.svg"},b477:function(t,e,a){t.exports=a.p+"img/social-facebook.20d2b007.svg"},bb51:function(t,e,a){},bf0b:function(t,e,a){var s=a("355d"),i=a("aebd"),n=a("36c3"),r=a("1bc3"),o=a("07e3"),l=a("794b"),c=Object.getOwnPropertyDescriptor;e.f=a("8e60")?c:function(t,e){if(t=n(t),e=r(e,!0),l)try{return c(t,e)}catch(a){}if(o(t,e))return i(!s.f.call(t,e),t[e])}},c692:function(t,e,a){t.exports=a.p+"img/social-instagram.0f269f84.svg"},ccb9:function(t,e,a){e.f=a("5168")},d8d6:function(t,e,a){a("1654"),a("6c1c"),t.exports=a("ccb9").f("iterator")},ebfd:function(t,e,a){var s=a("62a0")("meta"),i=a("f772"),n=a("07e3"),r=a("d9f6").f,o=0,l=Object.isExtensible||function(){return!0},c=!a("294c")((function(){return l(Object.preventExtensions({}))})),u=function(t){r(t,s,{value:{i:"O"+ ++o,w:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,s)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[s].i},f=function(t,e){if(!n(t,s)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[s].w},p=function(t){return c&&h.NEED&&l(t)&&!n(t,s)&&u(t),t},h=t.exports={KEY:s,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},ec93:function(t,e,a){"use strict";var s=a("bb51"),i=a.n(s);i.a},ee0b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap flex-col mx-auto text-center",staticStyle:{background:"rgba(31, 29, 29, 0.534)",height:"900px",width:"100%",position:"fixed",top:"0","z-index":"20"}},[s("div",{staticClass:"mx-auto",staticStyle:{"margin-top":"300px"}},[s("div",{staticClass:"spinIn"},[s("img",{staticStyle:{height:"60px",width:"60px"},attrs:{src:a("a625"),alt:""}}),s("img",{staticStyle:{height:"60px",width:"60px"},attrs:{src:a("a625"),alt:""}})]),s("br"),s("br"),s("br"),s("p",{staticClass:"text-white"},[t._v("Loading ...")])])])}],n=a("2877"),r={},o=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports},efb2:function(t,e,a){t.exports=a.p+"img/arrow-sorted-down.2b9db8b7.svg"},f051:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.active&&t.jumlah<2?a("transition",{staticClass:"conTa",staticStyle:{"z-index":"10"},attrs:{tag:"div","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[a("div",{staticClass:"MyImageContainer fixZ",staticStyle:{"z-index":"10"},on:{click:function(e){return t.closeIt(e)}}},[a("button",{staticClass:"btn btn-sm btn-outline-danger rounded-circle waves-effect btnClose",attrs:{type:"button",id:"closeImage"},on:{click:t.close}},[t._v("X")]),a("button",{staticClass:"btn btn-sm btn-outline-success prev",attrs:{type:"button"},on:{click:t.prev}},[a("span",{staticClass:"typcn typcn-arrow-left"})]),a("button",{staticClass:"btn btn-sm btn-outline-success next",attrs:{type:"button"},on:{click:t.next}},[a("span",{staticClass:"typcn typcn-arrow-right"})]),a("v-touch",{on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[a("transition-group",{staticClass:"imgContainer",attrs:{tag:"div","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOutRight",mode:"out-in"}},t._l(t.imgList,(function(e,s){return a("img",{directives:[{name:"show",rawName:"v-show",value:s==t.imgIndex,expression:"index==imgIndex"}],key:s,staticClass:"imgnya animated fadeIn",attrs:{src:e,alt:""}})})),0)],1),a("div",{staticClass:"imgPosList"},t._l(t.imgList,(function(e,s){return a("img",{key:s,staticClass:"imgLitleList",class:[{act:s==t.imgIndex}],staticStyle:{cursor:"pointer"},attrs:{src:e,alt:""},on:{click:function(e){t.imgIndex=s}}})})),0)],1)]):t._e()],1)},i=[],n={data:function(){return{active:!1,imgList:[],imgIndex:0,jumlah:0,swipeDirection:"None"}},mounted:function(){var t=this;this.$nuxt.$on("myimage",(function(e){t.imgList=e}));var e=this;this.$nuxt.$on("closeMyImage",(function(e){t.active=e})),this.$nuxt.$on("myimageactive",(function(a){document.addEventListener("keydown",(function t(a){27==a.keyCode&&(e.$nuxt.$emit("myimagedeactive",!1),document.removeEventListener("keydown",t))})),t.active=!0,t.imgIndex=a})),this.$nuxt.$on("myimagedeactive",(function(e){t.active=e}))},methods:{onSwipeLeft:function(){this.prev()},onSwipeRight:function(){this.next()},prev:function(){this.imgIndex--,this.imgIndex<0&&(this.imgIndex=this.imgList.length-1)},closeIt:function(t){var e=this;t.target.classList.contains("MyImageContainer")&&(setTimeout((function(){e.$nuxt.$emit("closeMyImage",!1)}),500),this.$nuxt.$emit("closeMyImage",!1))},next:function(){this.imgIndex++,this.imgIndex>this.imgList.length-1&&(this.imgIndex=0)},close:function(){var t=this;setTimeout((function(){t.$nuxt.$emit("closeMyImage",!1),t.active=!1}),500),this.active=!1}}},r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=l.exports},f1ae:function(t,e,a){"use strict";var s=a("86cc"),i=a("4630");t.exports=function(t,e,a){e in t?s.f(t,e,i(0,a)):t[e]=a}},f921:function(t,e,a){a("014b"),a("c207"),a("69d3"),a("765d"),t.exports=a("584a").Symbol}}]);
//# sourceMappingURL=chunk-6561d6fe.0aef5d5a.js.map