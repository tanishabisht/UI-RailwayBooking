(this["webpackJsonprailway-booking"]=this["webpackJsonprailway-booking"]||[]).push([[0],{10:function(e,t,a){e.exports={TicketCardContainer:"Cards_TicketCardContainer__3KOr_",UserCardContainer:"Cards_UserCardContainer__3BWH2",TicketFindContainer:"Cards_TicketFindContainer__30N8-",SeatTypeContainer:"Cards_SeatTypeContainer__QFLBL",CostPill:"Cards_CostPill__290WC",TicketTitle:"Cards_TicketTitle__3B3AL"}},14:function(e,t,a){e.exports={CenterContainer:"PNRStatus_CenterContainer__3dT1Z",FormContainer:"PNRStatus_FormContainer__2S8G_",FormTitle:"PNRStatus_FormTitle__3X1FA",InputField:"PNRStatus_InputField__27F5B",BtnWide:"PNRStatus_BtnWide__2xd2A"}},15:function(e,t,a){e.exports={Active:"Navbar_Active__34RHQ",Logo:"Navbar_Logo__lqkGA"}},19:function(e,t,a){e.exports={Logo:"Auth_Logo__2Zwsa",FormContainer:"Auth_FormContainer__3pzRV",BtnWide:"Auth_BtnWide__2cNgy"}},24:function(e,t,a){e.exports={Title:"Profile_Title__2GLf5"}},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(35),s=a.n(i),r=a(5),l=a(2),d=a.p+"static/media/logo.df39b905.png",o=a(19),j=a.n(o),b=a(0),h=function(){return Object(b.jsxs)("div",{className:"row valign-wrapper",style:{height:"80vh"},children:[Object(b.jsx)("div",{className:"col m6",children:Object(b.jsx)("img",{className:j.a.Logo,src:d,alt:"logo"})}),Object(b.jsx)("div",{className:"col m6",children:Object(b.jsxs)("div",{className:j.a.FormContainer,children:[Object(b.jsx)("h3",{children:"LOGIN"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsx)("input",{id:"email_id",type:"email",className:"validate"}),Object(b.jsx)("label",{htmlFor:"email_id",children:"Email Id ..."})]}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsx)("input",{id:"pass",type:"password",className:"validate"}),Object(b.jsx)("label",{htmlFor:"pass",children:"Password ..."})]}),Object(b.jsx)("button",{className:"".concat(j.a.BtnWide," waves-effect waves-light btn purple darken-4"),children:"LOGIN"})]})})]})},m=a(11),O=a(14),x=a.n(O),p=a(17),u=a.n(p),N=a(13),f=a.n(N),_=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){u.a.AutoInit()}),[]),Object(b.jsx)("div",{className:x.a.CenterContainer,style:{height:"100vh"},children:Object(b.jsxs)("div",{className:x.a.FormContainer,children:[Object(b.jsx)("p",{className:x.a.FormTitle,children:"CHECK YOUR"}),Object(b.jsx)("h3",{className:x.a.FormTitle,children:"PNR STATUS"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsx)("input",{onChange:function(e){return n(e.target.value)},id:"pnr",type:"number",className:"".concat(x.a.InputField," validate")}),Object(b.jsx)("label",{htmlFor:"pnr",children:"Enter PNR number ..."}),Object(b.jsx)("span",{children:Object(b.jsx)("button",{onClick:function(){var e={method:"GET",url:"https://indianrailways.p.rapidapi.com/index.php",params:{pnr:a},headers:{"x-rapidapi-key":"c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7","x-rapidapi-host":"indianrailways.p.rapidapi.com"}};f.a.request(e).then((function(e){console.log(e.data)})).catch((function(e){return console.error(e)}))},className:"waves-effect waves-light btn purple darken-4",children:"FIND TRAINS"})})]}),Object(b.jsx)("table",{className:"highlight container",children:Object(b.jsx)("tbody",{children:[["PNR Number","22524"],["Date of Journey","22 June 2021"],["From","Kota (KOTA)"],["To","Delhi (NZM)"],["Train Name","Hazrat Nizamuddin SpecialFare SF Special"],["Booking Status","Booked"],["Seat Type","2A Tier (#A)"]].map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e[0]}),Object(b.jsx)("td",{children:e[1]})]},e[0])}))})})]})})},v=a(15),C=a.n(v),T=function(){return Object(b.jsx)("nav",{className:"purple darken-4",children:Object(b.jsxs)("div",{className:"nav-wrapper container",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:C.a.Logo,src:d,alt:"logo"})}),Object(b.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{exact:!0,activeClassName:C.a.Active,to:"/",children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{exact:!0,activeClassName:C.a.Active,to:"/ticket_find",children:"Find Ticket"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{exact:!0,activeClassName:C.a.Active,to:"/pnr_status",children:"PNR Status"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{exact:!0,activeClassName:C.a.Active,to:"/auth",children:"Login"})})]})]})})},g=function(){return Object(b.jsx)("footer",{className:"page-footer grey darken-3",style:{padding:"0"},children:Object(b.jsx)("div",{className:"footer-copyright purple darken-4",children:Object(b.jsxs)("div",{className:"container center-content",children:[Object(b.jsxs)("span",{className:"valign-wrapper",children:[Object(b.jsx)("i",{className:"small material-icons",children:"insert_chart"}),Object(b.jsx)("i",{className:"small material-icons",children:"insert_chart"})]}),Object(b.jsx)("span",{children:"@2020 MAKEMYTRIP PVT. LTD. Country India US UAE"})]})})})},k=a(10),F=a.n(k),y=function(){return Object(b.jsx)("div",{className:F.a.TicketCardContainer,children:Object(b.jsx)("table",{className:"highlight container",children:Object(b.jsx)("tbody",{children:[["PNR Number","22524"],["Train Name","Hazrat Nizamuddin SpecialFare SF Special"],["Ticket Status","Booked"],["Seat Type","2A Tier (#A)"],["Date","22 June 2021"],["Total Price","\u20b9 200"]].map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e[0]}),Object(b.jsx)("td",{children:e[1]})]},e[0])}))})})})},S=function(){return Object(b.jsx)("div",{className:F.a.UserCardContainer,children:Object(b.jsx)("table",{className:"highlight container",children:Object(b.jsx)("tbody",{children:[["User ID","43242351223"],["Name","Sudhanshu Singh"],["Username","sudhimonkey"],["Email","sudhi@gmail.com"],["Age","20"],["Gender","Male"]].map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e[0]}),Object(b.jsx)("td",{children:e[1]})]},e[0])}))})})})},A=function(e){var t=e.idNum,a=e.name,c=e.fromPlace,n=e.toPlace,i=e.timing,s=e.pnrNumber,l=e.state;return Object(b.jsxs)("div",{className:F.a.TicketFindContainer,children:[Object(b.jsx)(r.b,{className:F.a.TicketTitle,to:"/ticket_book/".concat(l,"/").concat(t),children:Object(b.jsx)("h5",{children:a})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"FROM"})," ",c," ",Object(b.jsx)("strong",{children:"TO"})," ",n]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"TIMINGS:"})," ",i]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"PNR NUMBER:"})," ",s]})]})},I=function(e){return Object(b.jsxs)("div",{className:"card purple darken-4",children:[Object(b.jsx)("h6",{children:Object(b.jsxs)("span",{className:F.a.CostPill,children:["\u20b9 ",e.type[0],"00"]})}),Object(b.jsxs)("div",{className:"card-content white-text",style:{padding:"0.5rem 1rem"},children:[Object(b.jsxs)("p",{children:[e.type," Tier (#A)"]}),Object(b.jsx)("p",{children:"Train on time"})]}),Object(b.jsx)("div",{className:"card-action center",style:{padding:"0.5rem"},children:Object(b.jsx)(r.b,{className:"white-text",to:"/",children:"Book Now"})})]})},P=a(24),w=a.n(P),B=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:w.a.Title,children:"USER INFO"}),Object(b.jsx)(S,{}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:w.a.Title,children:"USER'S BOOKED TICKETS"}),Object(b.jsx)(y,{}),Object(b.jsx)(y,{})]})},R=a(7),E=a.n(R),L=function(){var e=Object(l.f)(),t=e.id,a=e.state,n=Object(c.useState)(null),i=Object(m.a)(n,2),s=i[0],r=i[1];return Object(c.useEffect)((function(){var e={method:"POST",url:"https://trains.p.rapidapi.com/",headers:{"content-type":"application/json","x-rapidapi-key":"c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7","x-rapidapi-host":"trains.p.rapidapi.com"},data:{search:a}};f.a.request(e).then((function(e){console.log(e.data[t]),r(e.data[t])})).catch((function(e){return console.error(e)}))}),[t,a]),Object(b.jsx)("div",{className:E.a.CenterContainer,style:{minHeight:"90vh"},children:null!==s?Object(b.jsxs)("div",{className:E.a.TicketInfoContainer,children:[Object(b.jsx)("h3",{children:s.name}),Object(b.jsxs)("p",{children:["[",s.train_from," - ",s.train_to,"]"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"TIME - "}),s.data.departTime]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"PNR - "}),s.data.id]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"row",children:"Unreserved"!==s.data.classes?s.data.classes.map((function(e){return Object(b.jsx)("div",{className:"col m4",children:Object(b.jsx)(I,{type:e})},e)})):null})]}):Object(b.jsx)("h6",{children:"Loading data..."})})},U=a(18),D=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(""),r=Object(m.a)(s,2),l=r[0],d=r[1],o=["Delhi","Mumbai","Rajdhani","Nagpur","Sewagram","Ajni","Pune","Amravati"];return Object(c.useEffect)((function(){u.a.AutoInit()}),[]),Object(b.jsxs)("div",{className:E.a.CenterContainer,style:{minHeight:"90vh",margin:"2rem"},children:[Object(b.jsxs)("div",{className:E.a.FormContainer,children:[Object(b.jsx)("h3",{className:E.a.FormTitle,children:"BOOK"}),Object(b.jsx)("p",{className:E.a.FormTitle,children:"YOUR TICKET"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsxs)("select",{defaultValue:"",children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Choose a state ..."}),o.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("label",{children:"From"})]}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsxs)("select",{defaultValue:"",onChange:function(e){return d(e.target.value)},children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Choose a state ..."}),o.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("label",{children:"To"})]}),Object(b.jsxs)("div",{className:"input-field",children:[Object(b.jsx)("input",{id:"date",type:"text",className:"datepicker"}),Object(b.jsx)("label",{htmlFor:"date",children:"Choose Date ..."})]}),Object(b.jsx)("button",{onClick:function(){var e={method:"POST",url:"https://trains.p.rapidapi.com/",headers:{"content-type":"application/json","x-rapidapi-key":"c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7","x-rapidapi-host":"trains.p.rapidapi.com"},data:{search:l}};f.a.request(e).then((function(e){return i(e.data)})).catch((function(e){return console.error(e)}))},className:"".concat(E.a.BtnWide," waves-effect waves-light btn purple darken-4"),children:"FIND TRAINS"})]}),0!==a.length?Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)("h3",{style:{marginTop:"5rem"},className:E.a.FormTitle,children:"AVAILABILE TRAINS"}),Object(b.jsx)(U.a,{breakpointCols:{default:3,1100:2,700:1,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:a.map((function(e,t){return Object(b.jsx)(A,{idNum:t,name:e.name,state:l,timing:e.data.departTime,pnrNumber:e.data.id,fromPlace:e.train_from,toPlace:e.train_to},t)}))})]}):null]})};a(64),a(65);var M=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{className:"bg",children:[Object(b.jsx)(T,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:B}),Object(b.jsx)(l.a,{exact:!0,path:"/ticket_find",component:D}),Object(b.jsx)(l.a,{exact:!0,path:"/ticket_book/:state/:id",component:L}),Object(b.jsx)(l.a,{exact:!0,path:"/pnr_status",component:_}),Object(b.jsx)(l.a,{exact:!0,path:"/auth",component:h})]})}),Object(b.jsx)(g,{})]})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={CenterContainer:"FindBookTicket_CenterContainer__3Ocws",FormContainer:"FindBookTicket_FormContainer__25v08",TicketInfoContainer:"FindBookTicket_TicketInfoContainer__jcu4J",FormTitle:"FindBookTicket_FormTitle__-g6jv",BtnWide:"FindBookTicket_BtnWide__2tx95"}}},[[66,1,2]]]);
//# sourceMappingURL=main.ada5165e.chunk.js.map