(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59de3833"],{"2b63":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[t._m(0),n("loading",{attrs:{active:t.isLoading,color:"#0856ab","is-full-page":!1},on:{"update:active":function(a){t.isLoading=a}}}),n("table",{staticClass:"table kh"},[t._m(1),n("tbody",t._l(t.list,(function(a,e){return n("tr",{key:e},[n("td",[t._v(t._s(e+1))]),n("td",[n("router-link",{staticClass:"link-select",attrs:{to:{name:"capital_detail",params:{id:a.Id}}},on:{click:function(n){return t.select(a.Id)}}},[t._v(t._s(a.Name))])],1),n("td",{staticClass:"text-right",staticStyle:{width:"150px",padding:"10px 0"}},[n("router-link",{staticClass:"btn btn-outline-secondary btn-sm link-select no-margin",attrs:{to:{name:"capital_detail",params:{id:a.Id}}}},[t._v("មើលតារាងតម្លៃ")])],1)])})),0)])],1)},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb breadcrumb-cus"},[n("li",{staticClass:"breadcrumb-item font-kulen"},[n("span",[t._v("ថ្នាក់រាជធានី-ខេត្ត")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",{staticClass:"font-kulen"},[n("td",{staticStyle:{width:"20px"}},[t._v("ល.រ")]),n("td",[t._v("វិស័យ")]),n("td")])])}],s=(n("d3b7"),{data:function(){return{list:[],isLoading:!1}},created:function(){var t=this;this.isLoading=!0,this.$api().post("service/types",{ServiceTypeId:1}).then((function(a){200==a.data.StatusCode&&(t.list=a.data.Json.Sectors)})).catch((function(a){t.$toasted.show(a)})).finally((function(){t.isLoading=!1}))}}),c=s,r=(n("7643"),n("2877")),l=Object(r["a"])(c,e,i,!1,null,"428afc0a",null);a["default"]=l.exports},7381:function(t,a,n){},7643:function(t,a,n){"use strict";var e=n("7381"),i=n.n(e);i.a}}]);
//# sourceMappingURL=chunk-59de3833.f45ed5d0.js.map