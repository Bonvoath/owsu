(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26c32180"],{2765:function(t,e,s){},"2b63":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb breadcrumb-cus"},[s("li",{staticClass:"breadcrumb-item font-kulen"},[void 0!=t.sector.Name?s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.back}},[t._v("តារាងវិស័យខេត្តកំពង់ចាម")]):s("span",[t._v("តារាងវិស័យខេត្តកំពង់ចាម")])]),void 0!=t.sector.Name?s("li",{staticClass:"breadcrumb-item font-kulen"},[t._v(t._s(t.sector.Sector))]):t._e()])]),s("loading",{attrs:{active:t.isLoading,color:"#0856ab","is-full-page":!1},on:{"update:active":function(e){t.isLoading=e}}}),t.isDetail?s("TableListService"):s("table",{staticClass:"table kh"},[t._m(0),s("tbody",t._l(t.list,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[s("a",{staticClass:"link-select",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.select(e)}}},[t._v(t._s(e.Name))])])])})),0)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",{staticClass:"font-kulen"},[s("td",{staticStyle:{width:"20px"}},[t._v("ល.រ")]),s("td",[t._v("វិស័យ")])])])}],r=(s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.records,(function(e){return[1==e.ListTypeId?s("ReportForm01",{key:e.ListTypeId,attrs:{vmodel:e.ServiceReportViewerDataLists}}):t._e(),2==e.ListTypeId?s("ReportForm02",{key:e.ListTypeId,attrs:{vmodel:e.ServiceReportViewerDataLists}}):t._e(),3==e.ListTypeId?s("ReportForm03",{key:e.ListTypeId,attrs:{vmodel:e.ServiceReportViewerDataLists}}):t._e(),4==e.ListTypeId?s("ReportForm04",{key:e.ListTypeId,attrs:{vmodel:e.ServiceReportViewerDataLists}}):t._e()]}))],2)}),c=[],l=s("79ed"),d=s("b958"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"font-M1",attrs:{colspan:"9"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"8"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"8"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",{staticClass:"text-right"},[t._v("-")]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price2))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price3))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))])]):t._e()]}))],2)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{rowspan:"2",colspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t._v("តំលៃសេវា(ជារៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"},attrs:{rowspan:"2"}},[t._v("រយះពេលអតិបរិមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"},attrs:{rowspan:"2"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")])]),s("tr",[s("td",{staticClass:"text-center"},[t._v("ខណ្ឌក្នុងរាជធានី"),s("br"),t._v("និងស្រុក")]),s("td",{staticClass:"text-center"},[t._v("ខណ្ឌជាយរាជធានី"),s("br"),t._v("និងទីរួមស្រុក")]),s("td",{staticClass:"text-center"},[t._v("ខណ្ឌជាយរាជធានី"),s("br"),t._v("និងក្រៅទីរួមស្រុក")])])])}],_={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},v=_,u=s("2877"),m=Object(u["a"])(v,n,o,!1,null,null,null),p=m.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"font-M1",attrs:{colspan:"7"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"6"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"6"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",{staticClass:"text-right"},[t._v("-")]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))])]):t._e()]}))],2)])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{colspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"}},[t._v("តំលៃសេវា(ជារៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"}},[t._v("រយះពេលអតិបរិមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")])])])}],b={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},C=b,y=Object(u["a"])(C,x,h,!1,null,null,null),f=y.exports,g={components:{ReportForm01:l["a"],ReportForm02:d["a"],ReportForm03:p,ReportForm04:f},computed:{records:function(){return this.$store.state.services}}},w=g,S=Object(u["a"])(w,r,c,!1,null,null,null),I=S.exports,L={components:{TableListService:I},data:function(){return{list:[],sector:{},isDetail:!1,isLoading:!1}},created:function(){var t=this;this.isLoading=!0,this.$api().post("api/service/getservicetype",{ServiceTypeId:1}).then((function(e){200==e.data.StatusCode&&(t.list=e.data.Data,t.isLoading=!1)})).catch((function(e){t.$toasted.show(e)})).finally((function(){t.isLoading=!1}))},methods:{back:function(){this.$store.state.services=[],this.isDetail=!1,this.sector={}},select:function(t){var e=this;this.isLoading=!0,this.$api().post("api/service/list",{SectorId:t.Id}).then((function(s){console.log(s),200==s.data.StatusCode&&(e.$store.state.services=s.data.Data,e.isLoading=!1,e.sector=t,e.isDetail=!0)}))}}},k=L,N=(s("b7e7"),Object(u["a"])(k,a,i,!1,null,"59ee4bde",null));e["default"]=N.exports},"79ed":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"font-M1",attrs:{colspan:"8"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td"),s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"7"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",{staticClass:"text-right"},[t._v("-")]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price2))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))])]):t._e()]}))],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{rowspan:"2",colspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("តំលៃសេវា(ជារៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"},attrs:{rowspan:"2"}},[t._v("រយះពេលអតិបរិមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"},attrs:{rowspan:"2"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")])]),s("tr",[s("td",{staticClass:"text-center",staticStyle:{width:"120px"}},[t._v("ខណ្ឌក្នុងរាជធានី"),s("br"),t._v("និងក្នុងស្រុក")]),s("td",{staticClass:"text-center",staticStyle:{width:"120px"}},[t._v("ខណ្ឌជាយរាជធានី"),s("br"),t._v("និងក្រៅក្រុង")])])])}],r={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},c=r,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=d.exports},b7e7:function(t,e,s){"use strict";var a=s("2765"),i=s.n(a);i.a},b958:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-data table-bordered table-condensed",staticStyle:{"margin-bottom":"0"}},[t._m(0),s("tbody",[t._l(t.records,(function(e){return[0==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"font-M1",attrs:{colspan:"7"}},[t._v(t._s(e.Name))])]):t._e(),1==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-right",staticStyle:{width:"50px"}},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"6"}},[s("b",[t._v(t._s(e.Name))])])]):t._e(),2==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-right"},[t._v(t._s(e.SubNum))]),s("td",{attrs:{colspan:"6"}},[t._v(t._s(e.Name))])]):t._e(),3==e.LevelId?s("tr",{key:e.Id},[s("td",{staticClass:"text-center"},[t._v(t._s(e.Num))]),s("td",[t._v(t._s(e.Name))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price1))]),s("td",{staticClass:"text-right"},[t._v(t._s(e.Price2))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Duration))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Limitation))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.Unit))])]):t._e()]}))],2)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"font-M1"},[s("tr",[s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ល.រ")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("បរិយាយ")]),s("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("តំលៃសេវា(ជារៀល)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"120px"},attrs:{rowspan:"2"}},[t._v("រយះពេលអតិបរិមា"),s("br"),t._v("នៃកាផ្តល់សេវា​"),s("br"),t._v("(ថ្ងៃធ្វើការ)")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"90px"},attrs:{rowspan:"2"}},[t._v("សុពលភាព")]),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle",width:"70px"},attrs:{rowspan:"2"}},[t._v("ចំនួន")])]),s("tr",[s("td",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("តម្លៃអតិបរិមា")]),s("td",{staticClass:"text-center",staticStyle:{width:"100px"}},[t._v("តម្លៃជាក់លាក់")])])])}],r={props:{vmodel:Array},data:function(){return{records:this.vmodel}},watch:{vmodel:function(t){this.records=t}}},c=r,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-26c32180.737cf14a.js.map