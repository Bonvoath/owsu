(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-385943a8"],{"75de":function(t,e,s){},"79ed":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"font-M1",attrs:{colspan:"8"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",{staticClass:"text-right"},[t._v("-")]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price2))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))]),s("td",{staticClass:"text-center",staticStyle:{width:"50px",padding:"6px 10px"}},[void 0!=e.LinkPdf&&null!=e.LinkPdf?s("button",{staticClass:"btn btn-outline-secondary btn-sm link-select no-margin",attrs:{type:"button"}},[t._v("ទាញយក")]):t._e()])]):t._e()]}))],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{rowspan:"2",colspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("តម្លៃសេវា(រៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"},attrs:{rowspan:"2"}},[t._v("រយះពេលអតិបរមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"},attrs:{rowspan:"2"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"50px"},attrs:{rowspan:"2"}},[t._v("ពាក្យស្នើសុំ")])]),s("tr",[s("td",{staticClass:"text-center",staticStyle:{width:"120px"}},[t._v("ខណ្ឌក្នុងរាជធានី"),s("br"),t._v("និងក្នុងស្រុក")]),s("td",{staticClass:"text-center",staticStyle:{width:"120px"}},[t._v("ខណ្ឌជាយរាជធានី"),s("br"),t._v("និងក្រៅក្រុង")])])])}],r={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},c=r,n=s("2877"),l=Object(n["a"])(c,a,i,!1,null,null,null);e["a"]=l.exports},a430:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb breadcrumb-cus"},[s("li",{staticClass:"breadcrumb-item font-kulen"},[void 0!=t.sector.Name?s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.back}},[t._v("តារាងវិស័យថ្នាក់ក្រុង-ស្រុក-ខណ្ឌ")]):s("span",[t._v("តារាងវិស័យថ្នាក់ក្រុង-ស្រុក-ខណ្ឌ")])]),void 0!=t.sector.Name?s("li",{staticClass:"breadcrumb-item font-kulen"},[t._v(t._s(t.sector.Name))]):t._e()])]),s("loading",{attrs:{active:t.isLoading,color:"#0856ab","is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.isDetail?s(t.component,{tag:"component"}):s("table",{staticClass:"table kh"},[t._m(0),s("tbody",t._l(t.list,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[s("a",{staticClass:"link-select",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.select(e)}}},[t._v(t._s(e.Name))])])])})),0)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"font-kulen"},[s("td",{staticStyle:{width:"20px"}},[t._v("ល.រ")]),s("td",[t._v("វិស័យ")])])])}],r=s("79ed"),c=s("b958"),n={components:{ReportForm01:r["a"],ReportForm02:c["a"]},data:function(){return{list:[],sector:{},isDetail:!1,isLoading:!1}},created:function(){var t=this;this.isLoading=!0,this.$api().post("api/service/getservicetype",{ServiceTypeId:2}).then((function(e){200==e.data.StatusCode&&(t.list=e.data.Data,t.isLoading=!1)}))},methods:{back:function(){this.$store.state.services=[],this.isDetail=!1,this.sector={}},select:function(t){var e=this;this.isLoading=!0,this.$api().post("api/service/list",{SectorId:t.Id}).then((function(s){200==s.data.StatusCode&&(e.$store.state.services=s.data.Data,e.isLoading=!1,e.sector=t,e.isDetail=!0)}))}},computed:{component:function(){var t="ReportForm01";return void 0!=this.sector.Id&&16==this.sector.Id&&(t="ReportForm02"),t}}},l=n,d=(s("d018"),s("2877")),o=Object(d["a"])(l,a,i,!1,null,"135f7d0e",null);e["default"]=o.exports},b958:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"font-M1",attrs:{colspan:"8"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price2))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))]),s("td",{staticClass:"text-center",staticStyle:{width:"50px",padding:"6px 10px"}},[void 0!=e.LinkPdf&&null!=e.LinkPdf?s("button",{staticClass:"btn btn-outline-secondary btn-sm link-select no-margin",attrs:{type:"button"}},[t._v("ទាញយក")]):t._e()])]):t._e()]}))],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("តម្លៃសេវា(រៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"},attrs:{rowspan:"2"}},[t._v("រយះពេលអតិបរមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"},attrs:{rowspan:"2"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"50px"},attrs:{rowspan:"2"}},[t._v("ពាក្យស្នើសុំ")])]),s("tr",[s("td",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("តម្លៃអតិបរិមា")]),s("td",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("តម្លៃជាក់លាក់")])])])}],r={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},c=r,n=s("2877"),l=Object(n["a"])(c,a,i,!1,null,null,null);e["a"]=l.exports},d018:function(t,e,s){"use strict";var a=s("75de"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-385943a8.5275d0ee.js.map