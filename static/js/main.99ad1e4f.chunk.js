(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(24),o=n.n(s),c=(n(31),n(3)),i=n(4),u=n(6),l=n(5),d=(n(32),n(33),n(10)),h=n.n(d),p=n(0),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e.handleClick=function(){e.setState({isVisible:!e.state.isVisible})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.props.event.start.dateTime,n=this.props.event.end.dateTime;return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsx)("h1",{className:"title",children:e.summary}),Object(p.jsx)("h3",{className:"location",children:e.location}),Object(p.jsx)("p",{children:Object(p.jsx)(h.a,{children:t})}),Object(p.jsxs)("div",{className:"details-container",children:[this.state.isVisible&&Object(p.jsxs)("div",{className:"event-details",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"About this event:"})," ",e.description]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Start:"})," ",Object(p.jsx)(h.a,{children:t})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"End:"})," ",Object(p.jsx)(h.a,{children:n})]})]}),this.state.isVisible?Object(p.jsx)("button",{className:"toggle-button",onClick:this.handleClick,children:"Hide Details"}):Object(p.jsx)("button",{className:"toggle-button",onClick:this.handleClick,children:"Get Details"})]})]})}}]),n}(a.Component),f=m,v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),b=v,j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)("input",{type:"text",className:"city",placeholder:"Search for a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),g=j,w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChange=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(void 0,n)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"event-number",children:Object(p.jsx)("input",{type:"text",className:"display-number",value:this.state.numberOfEvents,onChange:this.handleInputChange})})}}]),n}(a.Component),O=w,y=n(7),x=n(8),k=n(26),S=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),C=n(13),T=n.n(C),Z=n(11),E=n.n(Z),N=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},I=function(){var e=Object(x.a)(Object(y.a)().mark((function e(t){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(x.a)(Object(y.a)().mark((function e(t){var n,a,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://pgh1e196j3.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(x.a)(Object(y.a)().mark((function e(){var t,n,a,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",S);case 4:return e.next=6,A();case 6:if(!(t=e.sent)){e.next=16;break}return M(),n="https://pgh1e196j3.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+t,e.next=12,T.a.get(n);case 12:return(a=e.sent).data&&(r=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(x.a)(Object(y.a)().mark((function e(){var t,n,a,r,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=localStorage.getItem("access_token"))&&!I.error){e.next=15;break}return e.next=4,localStorage.removeItem("access_token");case 4:return n=new URLSearchParams(window.location.search),e.next=7,n.get("code");case 7:if(a=e.sent){e.next=14;break}return e.next=11,T.a.get("https://pgh1e196j3.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 11:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 14:return e.abrupt("return",a&&J(a));case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={locations:[],events:[],numberOfEvents:32,selectedLocation:"all"},e.updateEvents=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.selectedLocation,n=arguments.length>1?arguments[1]:void 0;q().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),selectedLocation:t,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,q().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{locations:t,updateEvents:this.updateEvents}),Object(p.jsx)(O,{updateEvents:this.updateEvents}),Object(p.jsx)(b,{events:n})]})}}]),n}(a.Component),B=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};n(25).config("763a937fc87748dabd4ccc41452a1b4a").install(),o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.99ad1e4f.chunk.js.map