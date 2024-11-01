!function(){"use strict";var e,t={282:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,l=window.wp.primitives,a=(0,t.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(l.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));window.wp.serverSideRender;var s,i,c,p,d,u,E,f,v,m,_,w=window.React;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}(0,e.registerBlockType)("snap/deezer",{edit:function(e){let{attributes:l,isSelected:s,setAttributes:i}=e,c=!0;const p=l.url;try{new URL(l.url)}catch(e){c=!1}return(0,t.createElement)("div",(0,n.useBlockProps)(),(0,t.createElement)(n.BlockControls,null,p?(0,t.createElement)(o.ToolbarButton,{icon:a,onClick:()=>{i({url:void 0})}}):void 0),l.url&&c?(0,t.createElement)("iframe",{title:"deezer-widget",src:`https://widget.deezer.com/widget/auto/${(()=>{let e=new URL(l.url).pathname.split("/").slice(-2);return`${e[0]}/${e[1]}/${(()=>{if(l.url.includes("artist"))return"top_tracks"})()}`})()}`,frameborder:"0",allowtransparency:"true",allow:"encrypted-media; clipboard-write",width:"100%"}):(0,t.createElement)(o.TextControl,{label:(0,r.__)("Enter a valid Deezer URL below:","jellobow-snap-deezer"),value:l.url,onChange:e=>i({url:e})}))},save:()=>null,icon:function(e){return w.createElement("svg",g({viewBox:"0 0 116 76",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=w.createElement("path",{d:"M115.35.52H90.52v14.49h24.83V.52Z",fill:"#29AB70"})),i||(i=w.createElement("path",{d:"M115.35 20.7H90.52v14.49h24.83V20.7Z",fill:"url(#EQ_svg__a)"})),c||(c=w.createElement("path",{d:"M115.35 40.87H90.52v14.49h24.83V40.87Z",fill:"url(#EQ_svg__b)"})),p||(p=w.createElement("path",{d:"M25.34 61.05H.51v14.49h24.83V61.05Z",fill:"url(#EQ_svg__c)"})),d||(d=w.createElement("path",{d:"M55.34 61.05H30.51v14.49h24.83V61.05Z",fill:"url(#EQ_svg__d)"})),u||(u=w.createElement("path",{d:"M85.35 61.05H60.52v14.49h24.83V61.05Z",fill:"url(#EQ_svg__e)"})),E||(E=w.createElement("path",{d:"M115.35 61.05H90.52v14.49h24.83V61.05Z",fill:"url(#EQ_svg__f)"})),f||(f=w.createElement("path",{d:"M85.35 40.87H60.52v14.49h24.83V40.87Z",fill:"url(#EQ_svg__g)"})),v||(v=w.createElement("path",{d:"M55.34 40.87H30.51v14.49h24.83V40.87Z",fill:"url(#EQ_svg__h)"})),m||(m=w.createElement("path",{d:"M55.34 20.7H30.51v14.49h24.83V20.7Z",fill:"url(#EQ_svg__i)"})),_||(_=w.createElement("defs",null,w.createElement("linearGradient",{id:"EQ_svg__a",x1:104.55,y1:37.09,x2:101.32,y2:18.79,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#2C8C9D"}),w.createElement("stop",{offset:.04,stopColor:"#298E9A"}),w.createElement("stop",{offset:.39,stopColor:"#129C83"}),w.createElement("stop",{offset:.72,stopColor:"#05A475"}),w.createElement("stop",{offset:1,stopColor:"#00A770"})),w.createElement("linearGradient",{id:"EQ_svg__b",x1:90.15,y1:54.63,x2:115.72,y2:41.6,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#2839BA"}),w.createElement("stop",{offset:1,stopColor:"#148CB3"})),w.createElement("linearGradient",{id:"EQ_svg__c",x1:.51,y1:68.29,x2:25.34,y2:68.29,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#F6A500"}),w.createElement("stop",{offset:1,stopColor:"#F29100"})),w.createElement("linearGradient",{id:"EQ_svg__d",x1:30.51,y1:68.29,x2:55.34,y2:68.29,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#F29100"}),w.createElement("stop",{offset:1,stopColor:"#D12F5F"})),w.createElement("linearGradient",{id:"EQ_svg__e",x1:60.52,y1:68.29,x2:85.35,y2:68.29,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#B4197C"}),w.createElement("stop",{offset:1,stopColor:"#472EAD"})),w.createElement("linearGradient",{id:"EQ_svg__f",x1:90.519,y1:68.29,x2:115.35,y2:68.29,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#2839BA"}),w.createElement("stop",{offset:1,stopColor:"#3072B7"})),w.createElement("linearGradient",{id:"EQ_svg__g",x1:59.539,y1:52.03,x2:86.32,y2:44.2,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#B4197C"}),w.createElement("stop",{offset:1,stopColor:"#373AAC"})),w.createElement("linearGradient",{id:"EQ_svg__h",x1:29.64,y1:43.28,x2:56.22,y2:52.95,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#FFCB00"}),w.createElement("stop",{offset:1,stopColor:"#D12F5F"})),w.createElement("linearGradient",{id:"EQ_svg__i",x1:32.61,y1:18.42,x2:53.24,y2:37.46,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#FFCF00"}),w.createElement("stop",{offset:1,stopColor:"#ED743B"})))))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,o,l){if(!r){var a=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],l=e[p][2];for(var s=!0,i=0;i<r.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,o,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,a=r[0],s=r[1],i=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var p=i(n)}for(t&&t(r);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(p)},r=self.webpackChunksnap_deezer=self.webpackChunksnap_deezer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(282)}));o=n.O(o)}();