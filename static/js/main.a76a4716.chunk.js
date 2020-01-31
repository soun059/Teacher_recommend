(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{42:function(e,a,t){e.exports=t(53)},47:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(10),o=t.n(n),s=(t(47),t(20)),i=t(12),c=t(25),d=t(26),m=t(31),h=t(11),u=(t(48),t(74)),p=t(88),E=t(77),g=t(78),b=t(79),y=t(19),f=t(87),k=t(80),C=t(81),x=t(86),N=t(82),w=t(83),v=t(84),j=t(85),O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={dark:!0,forgot:!1,signup:!1},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"handleColorChange",value:function(){this.setState({dark:!this.state.dark})}},{key:"handleForgotClose",value:function(){this.setState({forgot:!this.state.forgot})}},{key:"handleSignUpClose",value:function(){this.setState({signup:!this.state.signup})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login-body",style:{background:this.state.dark?"#131419":"white"}},r.a.createElement(u.a,{container:!0,className:"Grid-body"},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",{className:"switch"},"Dark Mode",r.a.createElement(p.a,{color:"inherit",checked:this.state.dark,onChange:this.handleColorChange.bind(this),inputProps:{"aria-label":"secondary checkbox"}}))),r.a.createElement(u.a,{item:!0,container:!0,xs:12,sm:6,lg:6,className:"headers"},r.a.createElement(u.a,{item:!0,xs:"12"},r.a.createElement("h1",{className:"Login-header",style:{color:this.state.dark?"white":"#868686"}},"Welcome to Teacher-Search Engine")),r.a.createElement(u.a,{item:!0,xs:"12"},r.a.createElement("div",{className:"Login-sub-header"},"Find your best tutor for your projects today"))),r.a.createElement(u.a,{item:!0,xs:"12",sm:"6",lg:"6",className:"card-login"},r.a.createElement(E.a,{className:"card-box",raised:!0,elevation:3,style:{background:this.state.dark?"#131419":"white"}},r.a.createElement(g.a,{title:"Login",className:"card-text"}),r.a.createElement(b.a,null,r.a.createElement(y.a,{className:"card-text"},"Enter Your College ID and password to continue")),r.a.createElement(b.a,null,r.a.createElement(f.a,{id:"standard-adornment-amount",fullWidth:!0,type:"email",placeholder:"Email",style:{color:"#868686",borderRadius:"50px"},className:"inputEmail",color:"secondary"}),r.a.createElement(f.a,{id:"standard-adornment-amount",fullWidth:!0,type:"password",placeholder:"Password",style:{color:"#868686",borderRadius:"50px"}})),r.a.createElement("div",{style:{marginLeft:"20px"}},r.a.createElement(k.a,{className:"card-links",onClick:this.handleForgotClose.bind(this)},"Forgot Password?"," ")," "),r.a.createElement(b.a,Object(h.a)({className:"button-pos"},"className","card-text-button"),r.a.createElement(C.a,{variant:"outlined",color:"inherit"},"Submit")),r.a.createElement(b.a,{className:"card-text"},"Not a member yet?"," ",r.a.createElement(k.a,{className:"card-links",onClick:this.handleSignUpClose.bind(this)},"Sign Up"))))),this.state.forgot?r.a.createElement(x.a,{open:this.state.forgot,onClose:this.handleForgotClose.bind(this),"aria-labelledby":"form-dialog-title",fullWidth:345,PaperProps:{style:{backgroundColor:this.state.dark?"#131419":"white",borderRadius:"20px"}}},r.a.createElement(N.a,{className:"card-text"},"Forgot Password?"),r.a.createElement(w.a,null,r.a.createElement(v.a,{style:{color:"#868686"}},"Enter the registered mail id"),r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",placeholder:"Email",style:{color:"#868686",borderRadius:"50px"},color:"inherit",fullWidth:!0})),r.a.createElement(j.a,null,r.a.createElement(C.a,{onClick:this.handleForgotClose.bind(this),color:"secondary"},"Cancel"),r.a.createElement(C.a,{onClick:this.handleForgotClose.bind(this),color:"primary"},"Next"))):null,this.state.signup?r.a.createElement(x.a,{open:this.state.signup,onClose:this.handleSignUpClose.bind(this),"aria-labelledby":"form-dialog-title",fullWidth:345,PaperProps:{style:{backgroundColor:this.state.dark?"#131419":"white",borderRadius:"20px"}}},r.a.createElement(N.a,{className:"card-text"},"New User?"),r.a.createElement(w.a,null,r.a.createElement(v.a,{style:{color:"#868686"}},"Enter Details of the College ID and Password to register"),r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"name",placeholder:"Name",style:{color:"#868686",borderRadius:"50px",marginBottom:"10px"},color:"inherit",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"name",label:"Email Address",type:"email",placeholder:"Email",style:{color:"#868686",borderRadius:"50px",marginBottom:"10px"},color:"inherit",fullWidth:!0}),r.a.createElement(f.a,{margin:"dense",id:"name",label:"Password",type:"password",placeholder:"Password",style:{color:"#868686",borderRadius:"50px"},color:"inherit",fullWidth:!0})),r.a.createElement(j.a,null,r.a.createElement(C.a,{onClick:this.handleSignUpClose.bind(this),color:"secondary"},"Cancel"),r.a.createElement(C.a,{onClick:this.handleSignUpClose.bind(this),color:"primary"},"Next"))):null)}}]),a}(r.a.Component),P=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null)}}]),a}(r.a.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a76a4716.chunk.js.map