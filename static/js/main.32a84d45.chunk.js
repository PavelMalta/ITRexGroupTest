(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,n){},3:function(e,t,n){e.exports={app:"App_app__7zkLZ",container:"App_container__37FEV",wrap:"App_wrap__29QOC",rate:"App_rate__3olvJ"}},40:function(e,t){var n=function(e){var t=e.reduce((function(e,t,n){return-1!==t.indexOf("0")?e={y:n,x:t.indexOf("0")}:e}),{});console.log(t);for(var n={},r=0;r<e.length;r++)if(0===r||r===e.length-1)for(var a=0;a<e[r].length;a++)"+"===e[r][a]&&(n={y:r,x:a});else"+"===e[r][0]&&(n={y:r,x:0}),"+"===e[r][e[r].length-1]&&(n={y:r,x:e[r].length-1});console.log(n);var c=[];return function t(n,r){e[n.y][n.x]="1";var a=function(t){var n=t.y,r=t.x,a=[];return void 0!==e[n-1][r]&&a.push({x:r,y:n-1,value:e[n-1][r],route:"top"}),void 0!==e[n+1][r]&&a.push({x:r,y:n+1,value:e[n+1][r],route:"down"}),void 0!==e[n][r-1]&&a.push({x:r-1,y:n,value:e[n][r-1],route:"left"}),void 0!==e[n][r+1]&&a.push({x:r+1,y:n,value:e[n][r+1],route:"right"}),a.filter((function(e){return"+"===e.value}))}(n);if(a.length>0)for(var i=0;i<a.length;i++){var o=a[i],u=o.x===r.x&&o.y===r.y,s="1"!==e[o.y][o.x];if(c.push(o.route),u||s&&t(o,r))return!0}else c=[];return!1}(t,n)?c:"The maze has no exit!!!"}([["#","#","#","#","#","#","#","#","#"],["#","+","+","+","#","+","+","+","#"],["#","#","#","#","#","#","#","#","#"],["#","+","+","+","0","+","+","+","#"],["#","#","#","#","#","#","#","+","#"],["#","#","+","+","+","#","#","+","#"],["#","#","+","#","+","+","+","+","#"],["#","#","+","#","#","#","#","#","#"]]);console.log(n)},41:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(13),i=n.n(c),o=(n(20),n(15)),u=n(3),s=n.n(u),l=n(14),d=n.n(l).a.create({baseURL:"https://www.nbrb.by/api/exrates/"}),h=function(){return d.get("rates/?periodicity=0")},j=n(0),p=function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsxs)("td",{children:[e.unit," ",e.letterCode]}),Object(j.jsx)("td",{className:s.a.rate,children:e.rate})]})},x=n(43),f=function(e){return Object(j.jsx)("div",{className:s.a.wrap,children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b"}),Object(j.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0435\u0434\u0438\u043d\u0438\u0446 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b, \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432\u0430\u043b\u044e\u0442\u044b"}),Object(j.jsx)("th",{children:"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441"})]}),e.data.map((function(e){return Object(j.jsx)(p,{name:e.Cur_Name,unit:e.Cur_Scale,rate:e.Cur_OfficialRate,letterCode:e.Cur_Abbreviation},Object(x.a)())}))]})})};n(40);var b=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){h().then((function(e){a(e.data)}))}),[]);var c=(new Date).toLocaleDateString("ru",{day:"2-digit",month:"2-digit",year:"numeric"});return Object(j.jsx)("div",{className:s.a.app,children:Object(j.jsxs)("div",{className:s.a.container,children:[Object(j.jsxs)("h1",{children:["\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0440\u0443\u0431\u043b\u044f \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u043c \u0432\u0430\u043b\u044e\u0442\u0430\u043c, \u043d\u0430 ",c]}),Object(j.jsx)(f,{data:n})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.32a84d45.chunk.js.map