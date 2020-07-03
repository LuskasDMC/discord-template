(this["webpackJsonpdiscord-template"]=this["webpackJsonpdiscord-template"]||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/hacker-icon.97207deb.png"},13:function(n,e,t){n.exports=t(21)},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),l=t(1),c=t(2);function u(){var n=Object(l.a)(["\n    *{\n        margin:0;\n        padding:0;\n        box-sizing:border-box;\n        font-family: Roboto, sans-serif;\n    }\n\n    :root {\n        --primary: #36393f;\n        --secondary: #2f3136;\n        --tertiary: rgb(32,34,37);\n        --quaternary: #292b2f;\n        --quinary: #393d42;\n        --senary: #828386;\n       \n        --white: #fff;\n        --gray: #8a8c90;\n        --chat-input: rgb(64,68,75);\n        --symbol: #74777a;\n     \n        --notification: #f84a4b;\n        --discord: #6e86d6;\n        --mention-detail: #f9a839;\n        --mention-message: #413f3f;\n     \n        --link: #5d80d6;\n     \n        --rocketseat: #6633cc;\n      }\n\n"]);return u=function(){return n},n}var s=Object(c.a)(u());function p(){var n=Object(l.a)(["\n    display:grid;\n    grid-template-columns: 71px 240px calc(100vw - 551px) 240px;\n    grid-template-rows: 46px calc(100vh - 99px)  53px;\n    grid-template-areas: 'SL SN CI CI'\n                         'SL SC CC SU'\n                         'SL UC CC SU';\n    height:100vh;\n    width:100vw;    \n"]);return p=function(){return n},n}var d=c.b.div(p()),f=t(11),m=t.n(f);function h(){var n=Object(l.a)(["\n    height: 2px;\n    width: 32px;\n    background:var(--quinary);\n    flex-shrink:0;\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n    cursor:pointer;\n    margin:5px 0px;\n    flex-shrink:0;\n    background:",";\n    border-radius:",";\n    width:48px;\n    height:48px;\n    position:relative;\n    &:hover{\n        border-radius:10px;\n        background:var(--discord);\n    }\n    &::before {\n        content:'';\n        width:9px;\n        height:9px;\n        background:var(--white);\n        position:absolute;\n        border-radius:50px;\n        top:50%;\n        left:-17px;\n        display:",';\n        transform: translate(0,-50%)\n    }\n    &::after{\n        content:"','";\n        width:16px;\n        height:16px;\n        font-size:9px;\n        color:var(--white);\n        line-height:1.7;\n        border:5px solid var(--tertiary);\n        font-weight:bold;\n        text-align:center;\n        background:var(--notification);\n        position:absolute;\n        border-radius:50px;\n        bottom:-7px;\n        right:-7px;\n        display:',";\n    }\n    &:active {\n        top:2px;\n    }\n"]);return b=function(){return n},n}function x(){var n=Object(l.a)(["\n    flex-flow: column nowrap;\n    grid-area: SL;\n    display:flex;\n    align-items:center;\n    background-color:var(--tertiary);\n    overflow-y: scroll;\n    max-height:100vh;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]);return x=function(){return n},n}var g=c.b.div(x()),v=c.b.div(b(),(function(n){return n.isHome?"var(--discord)":"var(--primary)"}),(function(n){return n.isHome?"10px":"50px"}),(function(n){return n.hasMessage?"block":"none"}),(function(n){return n.qty}),(function(n){return n.hasMention?"block":"none"})),E=c.b.div(h()),y=function(){return a.a.createElement(g,null,a.a.createElement(v,{isHome:!0,hasMention:!0,onMouseOver:function(){return console.log("kkk")}},a.a.createElement("img",{src:m.a,width:"100%",height:"100%",alt:""})),a.a.createElement(E,null),a.a.createElement(v,null),a.a.createElement(v,{hasMessage:!0}),a.a.createElement(v,{hasMention:!0,qty:4}),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,{hasMention:!0,qty:10}),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,{hasMention:!0,hasMessage:!0,qty:32}),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,null),a.a.createElement(v,null))};function w(){var n=Object(l.a)(["\n    background-color:var(--secondary);\n    grid-area:SN;\n    display:flex;\n    align-items:center;\n    font-weight:bold;\n    font-size:16px;\n    padding:0px 16px;\n    justify-content:space-between;\n    color:var(--white);\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\n    z-index:5;\n    > i{\n        cursor:pointer;\n    }\n"]);return w=function(){return n},n}var k=c.b.div(w()),j=function(){return a.a.createElement(k,null,"Server of pentesting",a.a.createElement("i",{className:"fas fa-chevron-down"}))};function O(){var n=Object(l.a)(["\n    height:24px;\n    width:1px;\n    margin:0px 13px;\n    background:#42454B;\n\n"]);return O=function(){return n},n}function C(){var n=Object(l.a)(["\n    background: var(--primary);\n    grid-area:CI;  \n    display:flex;\n    align-items:center;\n    color:var(--white);\n    height:46px;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\n    z-index:10;\n    padding:0px 17px;\n    > span {\n        color:var(--gray);\n    }\n    > i {\n        color:var(--symbol);\n        margin-right:7px;\n    }\n"]);return C=function(){return n},n}var S=c.b.div(C()),z=c.b.div(O()),N=function(){return a.a.createElement(S,null,a.a.createElement("i",{className:"fas fa-hashtag"}),"chat-free",a.a.createElement(z,null),a.a.createElement("span",null,"Channel open for talking"))},q=t(12);function M(){var n=Object(l.a)(["\n  grid-area: SC;\n  flex-flow:column nowrap;\n  display:flex;\n  align-items:stretch;\n  background:var(--secondary);\n  padding:20px 10px;\n  > div {\n    display:flex;\n    justify-content:space-between;\n    color:var(--symbol);\n    font-size:12px;\n    padding-bottom:15px;\n    & i {\n      cursor:pointer;\n    }\n  }\n"]);return M=function(){return n},n}var I=c.b.div(M());function L(){var n=Object(l.a)(["\n    background:",";\n    padding: 0px 5px;\n    border-radius:5px;\n    height: 32px;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    &:hover{\n        & span:nth-child(1) {\n            color:var(--white);\n        }\n    }\n    & i {\n        cursor:pointer;\n        color:var(--symbol);\n    }\n    & span:nth-child(1) {\n        font-size:15px;\n        cursor:pointer;\n        color:",";\n        & i {\n            margin-right:7px;\n        }\n    }\n    & span:nth-child(2) {\n        & i:nth-child(1){\n            margin-right:6px;\n        }\n    }\n\n"]);return L=function(){return n},n}var U=c.b.div(L(),(function(n){return n.isSelected?"rgba(24, 22, 25, 0.5)":"var(--secondary)"}),(function(n){return n.isSelected?"var(--white)":"var(--symbol)"})),A=function(n){return a.a.createElement(U,{onClick:n.handleClick(n.id),isSelected:n.isSelected},a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-hashtag fa-lg"}),n.title),a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-user-plus"}),a.a.createElement("i",{className:"fas fa-cog"})))},H=["chat-free","work","games","friends","family"],B=function(){var n=Object(r.useState)(-1),e=Object(q.a)(n,2),t=e[0],i=e[1];function o(n){return function(){i(n)}}return a.a.createElement(I,null,a.a.createElement("div",null,a.a.createElement("span",null,"CANAIS DE TEXTO"),a.a.createElement("i",{className:"fas fa-plus"})),H.map((function(n,e){var r=t==e;return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{key:e,title:n,id:e,isSelected:r,handleClick:o}))})))};function J(){var n=Object(l.a)(["\n    width:60px;\n    display:flex;\n    justify-content:space-between;\n    & i {\n        cursor:pointer;\n        color:var(--senary);\n        &:hover {\n            color:var(--white);\n        }\n    }\n"]);return J=function(){return n},n}function T(){var n=Object(l.a)(["\n    width:120px;\n    padding-left:10px;\n    color:var(--gray);\n    & span:nth-child(1) {\n        color:var(--white);\n        font-weight:bold;\n    }\n    \n"]);return T=function(){return n},n}function D(){var n=Object(l.a)(['\n    width:32px;\n    height:32px;\n    border-radius:50px;\n    background:var(--white);\n    position:relative;\n    &::after{\n        content:"-";\n        width:10px;\n        height:10px;\n        border-radius:5px;\n        text-align:center;\n        line-height:.45;\n        font-weight:bold;\n        font-size:20px;\n        color:var(--quaternary);\n        background-color:var(--notification);\n        position:absolute;\n        bottom:0px;\n        right:0px;\n        z-index:10;\n    }\n']);return D=function(){return n},n}function F(){var n=Object(l.a)(["\n  background: var(--quaternary);\n  padding:0px 10px;\n  height: 52px;\n  display:flex;\n  align-items:center;\n  grid-area: UC;\n"]);return F=function(){return n},n}var R=c.b.div(F()),W=c.b.div(D()),X=c.b.div(T()),G=c.b.div(J()),K=function(){return a.a.createElement(R,null,a.a.createElement(W,null),a.a.createElement(X,null,a.a.createElement("span",null,"Chaos Code"),a.a.createElement("br",null),a.a.createElement("span",null,"#6666")),a.a.createElement(G,null,a.a.createElement("i",{className:"fas fa-microphone"}),a.a.createElement("i",{className:"fas fa-headset"}),a.a.createElement("i",{className:"fas fa-cog"})))};function P(){var n=Object(l.a)(["\n    outline:none;\n    border:none;\n    border-radius:0px 7px 7px 0px;\n    font-size:19px;\n    background:var(--chat-input);\n    width:85%;\n    height:34px;\n"]);return P=function(){return n},n}function Q(){var n=Object(l.a)(['\n    height:70px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    &::before {\n        content:"@";\n        position:relative;\n        font-size:23px;\n        color:var(--symbol);\n        padding:0px 0px;\n        left:0px;\n        height:34px;\n        line-height:1.3;\n        padding-right:20px;\n        padding-left:20px;\n        border-radius:7px 0px 0px 7px;\n        background:var(--chat-input);\n    }\n']);return Q=function(){return n},n}function V(){var n=Object(l.a)(["\n    height:calc(100% - 70px);\n    overflow-y: scroll;\n    padding-left:15px;\n    &::-webkit-scrollbar {\n        width: 7px;\n    }\n    &::-webkit-scrollbar-track {\n        border-radius: 10px;\n        box-shadow: inset 0 0 5px var(--quaternary); \n    }\n    &::-webkit-scrollbar-thumb {\n        background: var(--tertiary); \n        border-radius: 10px;\n    }\n"]);return V=function(){return n},n}function Y(){var n=Object(l.a)(["\n    grid-area: CC;\n    background: var(--primary);\n"]);return Y=function(){return n},n}var Z=c.b.div(Y()),$=c.b.div(V()),_=c.b.div(Q()),nn=c.b.input(P());function en(){var n=Object(l.a)(["\n    color:var(--senary);\n    font-size: 13px;\n    margin-left:10px;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n    color:var(--white);\n    > strong:hover { \n        cursor:pointer;\n        text-decoration:underline;\n    }\n"]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n    cursor:pointer;\n    width:40px;\n    height:40px;\n    background-color:var(--secondary);\n    border-radius:50px;\n    margin-right:15px;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n    display:flex;\n    height:50px;\n    align-items:center;\n    &:hover {\n        background: var(--quinary);\n    }\n"]);return an=function(){return n},n}var on=c.b.div(an()),ln=c.b.div(rn()),cn=c.b.div(tn()),un=c.b.span(en()),sn=function(n){return a.a.createElement(on,null,a.a.createElement(ln,null),a.a.createElement(cn,null,a.a.createElement("strong",null,n.user),a.a.createElement(un,null,n.date),a.a.createElement("br",null),n.content))},pn={user:"Anonymous",date:"06/06/6666",content:"errat hoc systema, ratio errorem ego sum"},dn=function(){return a.a.createElement(Z,null,a.a.createElement($,null,function(){for(var n=[],e=0;e<20;e++)n.push(a.a.createElement(sn,pn));return n}().map((function(n){return n}))),a.a.createElement(_,null,a.a.createElement(nn,{type:"text",placeholder:"Write here."})))},fn=function(){return a.a.createElement(d,null,a.a.createElement(y,null),a.a.createElement(j,null),a.a.createElement(N,null),a.a.createElement(B,null),a.a.createElement(K,null),a.a.createElement(dn,null))};t(20);var mn=function(){return a.a.createElement("div",null,a.a.createElement(fn,null),a.a.createElement(s,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(mn,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1df01735.chunk.js.map