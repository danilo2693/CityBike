(this["webpackJsonpcitybike-client"]=this["webpackJsonpcitybike-client"]||[]).push([[0],{118:function(t,e){},125:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(24),i=a.n(s),o=(a(72),a(12)),r=a(6),l=a(39),b=a.n(l),j=a(64),d=a(16),m=a(65),h=a.n(m),u=a(128),O=a(129),p=a(127),x=a(130),f=a(7),v=a(1),g=function(t){var e=t.position,a=t.stations,n=t.zoom,c=new f.Icon({iconSize:[20,20],iconUrl:"".concat(".","/bike.png")});return Object(v.jsxs)(u.a,{center:e,zoom:n,children:[Object(v.jsx)(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a&&a.length>0&&a.map((function(t){return Object(v.jsx)(p.a,{position:[t.latitude,t.longitude],icon:c,children:Object(v.jsxs)(x.a,{children:[Object(v.jsxs)("h6",{children:["Name station: ",t.name]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsxs)("p",{children:["Empty slots: ",t.empty_slots]}),Object(v.jsxs)("p",{children:["Free bikes: ",t.free_bikes]})]})]})},t.id)}))]})},y=a(66),N=a.n(y).a.connect("https://app-citybike.herokuapp.com/"),S=c.a.createContext(),k=a(67),w=function(){var t=function(){return JSON.parse(localStorage.getItem("stationsHistory")?localStorage.getItem("stationsHistory"):[])};return{getStations:t,addStations:function(e){var a=t();try{localStorage.setItem("stationsHistory",JSON.stringify([].concat(Object(k.a)(a),[{date:new Date,stations:e}])))}catch(n){console.error("Local storage is full"),localStorage.setItem("stationsHistory",JSON.stringify([{date:new Date,stations:e}]))}},reset:function(){localStorage.setItem("stationsHistory",JSON.stringify([{date:new Date,stations:[]}]))}}},C=function(){var t=Object(n.useContext)(S);console.log(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://app-citybike.herokuapp.com/"}));var e="".concat("https://app-citybike.herokuapp.com/","/cityBikeInformation"),a=Object(n.useState)({lat:51.505,lng:-.09,locationName:"",cityName:""}),c=Object(d.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)([]),r=Object(d.a)(o,2),l=r[0],m=r[1],u=Object(n.useState)(!1),O=Object(d.a)(u,2),p=O[0],x=O[1],f=w().addStations;Object(n.useEffect)((function(){y()}),[]);var y=function(){var t=Object(j.a)(b.a.mark((function t(){var a,n,c,s,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(e);case 2:a=t.sent,n=a.data,c=n.location,s=n.name,o=n.stations,i({lat:c.latitude,lng:c.longitude,locationName:c.city,cityName:s}),m(o),x(!0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){if(p&&l)return t.on("city-bike-stations",(function(t){m(t),f(t)})),function(){return t.off("city-bike-stations")}}),[p]);var N=[s.lat,s.lng];return Object(v.jsxs)("div",{className:"map",children:[""!==s.cityName&&Object(v.jsxs)("h1",{className:"mb-4",children:[s.cityName," - ",s.locationName]}),Object(v.jsx)(g,{position:N,stations:l,zoom:13})]})},E=a(30),_=a.n(E),D=function(){var t=w(),e=t.getStations,a=t.addStations,c=Object(n.useContext)(S),s=Object(n.useState)(e()),i=Object(d.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){return c.on("city-bike-stations",(function(t){a(t),l(e())})),function(){return c.off("city-bike-stations")}}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:"mb-4",children:"History bikes"}),Object(v.jsx)("div",{className:"scrolled-table",children:Object(v.jsxs)("table",{className:"table mt-4",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{className:"fixed-th border-bottom",children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Date"}),Object(v.jsx)("th",{scope:"col",children:"Action"})]})}),Object(v.jsx)("tbody",{children:r.map((function(t,e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e}),Object(v.jsx)("td",{children:_()(t.date).format("MMMM DD YYYY, h:mm:ss a")}),Object(v.jsx)("td",{children:Object(v.jsx)(o.b,{className:"nav-link",activeClassName:"active",to:"/selected-date/".concat(t.date),children:Object(v.jsx)("span",{className:"material-icons",children:"visibility"})})})]},e)}))})]})})]})},H=function(t){var e=t.match.params.date,a=(0,w().getStations)().find((function(t){return t.date===e})),n=a?a.stations:[];return Object(v.jsxs)("div",{className:"map",children:[""!==e&&Object(v.jsxs)("div",{className:"d-flex justify-content-start align-items-center mb-4",children:[Object(v.jsx)(o.b,{className:"btn btn-primary me-2",activeClassName:"active",to:"/history-bikes",children:"Back"}),Object(v.jsx)("h1",{children:_()(e).format("MMMM DD YYYY, h:mm:ss a")})]}),Object(v.jsx)(g,{position:[25.790654,-80.1300455],stations:n,zoom:13})]})},I=function(){var t=w().reset;return Object(n.useEffect)((function(){t()}),[]),Object(v.jsxs)("div",{className:"container mt-4",children:[Object(v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-info bg-gradient justify-content-between mb-4",children:[Object(v.jsx)("span",{className:"navbar-brand p-2",children:"CityBike"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(v.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{className:"nav-link",activeClassName:"active",to:"/",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{className:"nav-link",activeClassName:"active",to:"/history-bikes",children:"History"})})]})})})]}),Object(v.jsxs)(r.c,{children:[Object(v.jsx)(r.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(r.a,{path:"/history-bikes",component:D}),Object(v.jsx)(r.a,{path:"/selected-date/:date",component:H})]}),Object(v.jsxs)("div",{className:"mt-4 mb-4",children:["Icons made by"," ",Object(v.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," ","from"," ",Object(v.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(v.jsx)(S.Provider,{value:N,children:Object(v.jsx)(o.a,{children:Object(v.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},72:function(t,e,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.2d8f7f3e.chunk.js.map