(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{628:function(n,e,t){"use strict";t.d(e,{FH:function(){return o}});var r=["Bad","Worse","Worst"],o=function(n){return r.includes(n)}},3610:function(n,e,t){"use strict";var r=t(5485),o=t(160),i=t(1533),c=t(5893);e.Z=function(n){var e=n.children,t=n.headerDetails,a=n.headerTitle,u=n.minHeight,l=n.scrollable;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.VH,{children:(0,c.jsxs)(r.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,c.jsx)(o.ZP,{bold:!0,children:a}),t&&(0,c.jsx)(o.ZP,{children:t})]})}),(0,c.jsx)(i.$B,{minHeight:u,scrollable:l,children:e})]})}},4190:function(n,e,t){"use strict";var r=t(7294),o=t(733),i=t.n(o),c=t(987),a=t(2125),u=t(515),l=t(5893);e.Z=function(n){var e=n.fullScreen,t=n.large,o=n.left,d=void 0===o?0:o,s=n.relative,f=n.right,v=void 0===f?0:f,h=n.small,b=n.top,p=void 0===b?0:b,x=(0,r.useState)(void 0),m=x[0],g=x[1],j=(0,r.useState)(void 0),_=j[0],Z=j[1],y=(0,r.useContext)(a.Ni),w=3*u.iI;if(t?w=5*u.iI:h&&(w=2*u.iI),(0,r.useEffect)((function(){g(window.document.body.offsetHeight),Z(window.document.body.offsetWidth)}),[m,_]),m&&_){var k=m-u.tr,O=(0,l.jsx)(i(),{color:(y.loader||c.Z.loader).color,height:w,type:"spin",width:w});return e?(0,l.jsx)("div",{style:{left:s?null:d+(_-w)/2-v,position:"fixed",top:p+k/2-w/2,zIndex:50},children:O}):O}return(0,l.jsx)("div",{})}},1180:function(n,e,t){"use strict";var r=t(9499),o=t(4730),i=t(7294),c=t(2125),a=t(7618),u=t(5485),l=t(8276),d=t(515),s=t(2631),f=t(5363),v=t(987),h=t(4190),b=t(1896),p=t(5893),x=["afterIcon","beforeIcon","children","disabled","loading","onClick"];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j=c.ZP.button.withConfig({displayName:"Button__ButtonStyle",componentId:"sc-1idlfoi-0"})(["background-color:",";border:none;border-color:",";color:",";display:block;font-family:",";padding:7px 16px;position:relative;z-index:0;"," "," "," "," "," "," "," "," "," "," "," "," "," "," ",""],v.Z.background.row,v.Z.interactive.defaultBorder,v.Z.content.active,f.nF,(function(n){return n.padding&&"\n    padding: ".concat(n.padding,";\n  ")}),(function(n){return!n.basic&&"\n    border-style: solid;\n    border-width: 1px;\n  "}),(function(n){return!n.borderRadiusLeft&&!n.borderRadiusRight&&!n.noBorder&&"\n    border-radius: ".concat(s.n_,"px;\n  ")}),(function(n){return!n.borderRadiusLeft&&n.borderRadiusRight&&"\n    border-radius: 0px ".concat(s.n_,"px ").concat(s.n_,"px 0px;\n  ")}),(function(n){return n.borderRadiusLeft&&!n.borderRadiusRight&&"\n    border-radius: ".concat(s.n_,"px 0px 0px ").concat(s.n_,"px;\n  ")}),(function(n){return n.noBorderRight&&"\n    border-right: none;\n  "}),(function(n){return!n.iconOnly&&n.large&&"\n    ".concat(b.ln,"\n  ")}),(function(n){return!n.iconOnly&&!n.large&&!n.small&&"\n    ".concat(b.iD,"\n  ")}),(function(n){return!n.iconOnly&&n.small&&"\n    ".concat(b.HC,"\n  ")}),(function(n){return n.transparent&&"\n    background-color: transparent; !important\n  "}),(function(n){return!n.disabled&&"\n    &:hover {\n      border-color: ".concat(v.Z.interactive.hoverBorder,";\n    }\n    &:active {\n      border-color: ").concat(v.Z.content.active,";\n    }\n  ")}),(function(n){return n.primary&&!n.disabled&&"\n    background-color: ".concat(v.Z.interactive.linkPrimary,";\n    color: ").concat(v.Z.monotone.white,";\n    border-color: ").concat(v.Z.interactive.linkPrimary,";\n    &:hover {\n      border-color: ").concat(v.Z.monotone.black,";\n    }\n    &:active {\n      background: ").concat(v.Z.interactive.focusBackground,";\n    }\n  ")}),(function(n){return n.disabled&&"\n    color: ".concat(v.Z.interactive.disabledBorder,";\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")}),(function(n){return n.selected&&"\n    border-color: ".concat(v.Z.content.active,";\n  ")}),(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")}));e.Z=function(n){var e,t,r=n.afterIcon,c=n.beforeIcon,s=n.children,f=n.disabled,v=n.loading,b=n.onClick,m=(0,o.Z)(n,x),_={disabled:f,size:3*d.iI};return(0,p.jsx)(j,g(g({},m),{},{disabled:f,onClick:function(n){null===n||void 0===n||n.preventDefault(),null===b||void 0===b||b(n)},children:(0,p.jsxs)(u.Z,{alignItems:"center",justifyContent:"center",children:[!v&&c&&(0,p.jsx)(l.Z,{mr:1,children:(0,p.jsx)(a.Z,{children:i.cloneElement(c,g(g({},_),{},{size:(null===(e=c.props)||void 0===e?void 0:e.size)||_.size}))})}),v&&(0,p.jsx)(h.Z,{}),!v&&(0,p.jsx)(a.Z,{children:s}),!v&&r&&(0,p.jsx)(l.Z,{ml:1,children:(0,p.jsx)(a.Z,{children:i.cloneElement(r,g(g({},_),{},{size:(null===(t=r.props)||void 0===t?void 0:t.size)||_.size}))})})]})}))}},5828:function(n,e,t){"use strict";t.r(e);var r=t(6835),o=t(1163),i=t.n(o),c=t(7294),a=t(1180),u=t(5485),l=t(3481),d=t(8670),s=t(5009),f=t(3610),v=t(8276),h=t(160),b=t(8302),p=t(7851),x=t(515),m=t(686),g=t(628),j=t(5893);e.default=function(){var n,e=(0,o.useRouter)().query.slug,t=b.ZP.feature_sets.detail(e).data,_=(0,c.useMemo)((function(){return t}),[t]),Z=(0,c.useState)({id:e,metadata:{column_types:{}},statistics:{}}),y=Z[0],w=Z[1];(0,c.useEffect)((function(){return w(_)}),[_]);var k=(0,m.vI)(y),O=Object.entries((null===y||void 0===y||null===(n=y.metadata)||void 0===n?void 0:n.column_types)||{}),P=(0,j.jsx)(u.Z,{alignItems:"justify-right",flexDirection:"row-reverse",children:(0,j.jsx)(a.Z,{onClick:function(){return i().push("/datasets/".concat(e))},children:(0,j.jsx)(h.ZP,{bold:!0,children:" Dataset view "})})});return(0,j.jsxs)(l.Z,{centerAlign:!0,header:(0,j.jsx)(v.Z,{mt:x.iI}),children:[P,(0,j.jsx)(v.Z,{pb:3,pt:3,children:(0,j.jsx)(f.Z,{headerTitle:"columns",children:O.map((function(n,t){var o=(0,r.Z)(n,2),c=o[0],a=o[1],l=y.statistics["".concat(c,"/quality")],f=k[c];return(0,j.jsx)(d.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){i().push("/datasets/[slug]/features/[column]","/datasets/".concat(e,"/features/").concat(f))},preventDefault:!0,children:(0,j.jsxs)(s.Z,{columnFlexNumbers:[.5,.2,9,2,1],noHorizontalPadding:!0,secondary:t%2===1,children:[(0,j.jsx)(u.Z,{fullWidth:!0,justifyContent:"center",children:(0,j.jsx)(h.ZP,{children:t+1})}),(0,j.jsx)(p.sg,{secondary:!0}),(0,j.jsx)(h.ZP,{maxWidth:50*x.iI,overflowWrap:!0,children:c}),(0,j.jsx)(h.ZP,{maxWidth:20*x.iI,children:a}),(0,j.jsx)(h.ZP,{bold:(0,g.FH)(l),danger:(0,g.FH)(l),children:l})]})},"".concat(c,"-").concat(t))}))})})]})}},686:function(n,e,t){"use strict";function r(n){var e,t;return n?null===(e=n.insights)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.reduce((function(n,e,t){return n[((null===e||void 0===e?void 0:e.feature)||{}).uuid]=t,n}),{}):{}}function o(n){var e,t;return n?null===(e=n.insights)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.reduce((function(n,e,t){var r=(null===e||void 0===e?void 0:e.feature)||{};return n[t]=r,n}),{}):{}}function i(n,e){if(!n)return{};var t=n.statistics;return{average:t["".concat(e,"/average")],completeness:t["".concat(e,"/completeness")],count:t["".concat(e,"/count")],count_distinct:t["".concat(e,"/count_distinct")],invalid_value_count:t["".concat(e,"/invalid_value_count")],invalid_value_rate:t["".concat(e,"/invalid_value_rate")],max:t["".concat(e,"/max")],max_null_seq:t["".concat(e,"/max_null_seq")],median:t["".concat(e,"/median")],min:t["".concat(e,"/min")],null_value_count:t["".concat(e,"/null_value_count")],null_value_rate:t["".concat(e,"/null_value_rate")],outlier_count:t["".concat(e,"/outlier_count")],quality:t["".concat(e,"/quality")],skew:t["".concat(e,"/skew")],sum:t["".concat(e,"/sum")],validity:t["".concat(e,"/validity")]}}t.d(e,{Tx:function(){return i},kx:function(){return o},vI:function(){return r}})},6562:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/[slug]/features",function(){return t(5828)}])}},function(n){n.O(0,[195,733,493,774,888,179],(function(){return e=6562,n(n.s=e);var e}));var e=n.O();_N_E=e}]);