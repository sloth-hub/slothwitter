(this.webpackJsonpslothwitter=this.webpackJsonpslothwitter||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(31),i=a.n(s),o=a(8),u=a(21),l=a(6),j=a(9),b=a.n(j),d=a(16),p=a(23);a(40),a(42),a(52);p.a.initializeApp({apiKey:"AIzaSyDHQVlk5ct60RWdvcy48Y_oULgf2TjxifI",authDomain:"slothwitter.firebaseapp.com",databaseURL:"https://slothwitter.firebaseio.com",projectId:"slothwitter",storageBucket:"slothwitter.appspot.com",messagingSenderId:"993214720050",appId:"1:993214720050:web:9585fa358af3e8d8c3742b"});var f=p.a,O=p.a.auth(),h=p.a.firestore(),m=p.a.storage(),x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),p=Object(o.a)(j,2),f=p[0],h=p[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),v=x[0],g=x[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?r(n):"password"===a&&l(n)},y=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(a,u);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(a,u);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:y,className:"container",children:[Object(n.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),Object(n.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(n.jsx)("input",{type:"submit",className:"authInput authSubmit",value:f?"Create Account":"Sign In"}),v&&Object(n.jsx)("span",{className:"authError",children:v})]}),Object(n.jsx)("span",{onClick:function(){h((function(e){return!e}))},className:"authSwitch",children:f?"Sign In":"Create Account"})]})},v=a(10),g=a(22),w=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new f.auth.GoogleAuthProvider:"github"===a&&(n=new f.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(n.jsx)(x,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{name:"google",className:"authBtn",onClick:e,children:["Continue with Google ",Object(n.jsx)(v.a,{icon:g.b})]}),Object(n.jsxs)("button",{name:"github",className:"authBtn",onClick:e,children:["Continue with Github ",Object(n.jsx)(v.a,{icon:g.a})]})]})]})},y=a(33),N=a(18),S=function(e){var t=e.sweetObj,a=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),p=j[0],f=j[1],O=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this sweet?")){e.next=7;break}return e.next=4,h.doc("sweets/".concat(t.id)).delete();case 4:if(""===t.fileUrl){e.next=7;break}return e.next=7,m.refFromURL(t.fileUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))};return Object(n.jsx)("div",{className:"sweet",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.doc("sweets/".concat(t.id)).update({text:p}),u(!1)},className:"container sweetEdit",children:[Object(n.jsx)("input",{type:"text",placeholder:"Edit your sweet",value:p,required:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"update sweet",className:"formBtn"})]}),Object(n.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"cancel"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:t.text}),t.fileUrl&&Object(n.jsx)("img",{src:t.fileUrl}),a&&Object(n.jsxs)("div",{className:"sweet__actions",children:[Object(n.jsx)("span",{onClick:O,children:Object(n.jsx)(v.a,{icon:N.d})}),Object(n.jsx)("span",{onClick:x,children:Object(n.jsx)(v.a,{icon:N.a})})]})]})})},k=a(54),I=function(e){var t=e.userObj,a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],p=l[1],f=function(){var e=Object(d.a)(b.a.mark((function e(a){var n,c,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===j){e.next=10;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=6,c.putString(j,"data_url");case 6:return r=e.sent,e.next=9,r.ref.getDownloadURL();case 9:n=e.sent;case 10:return o={text:s,createdAt:Date.now(),creatorId:t.uid,fileUrl:n},e.next=13,h.collection("sweets").add(o);case 13:i(""),p("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput__container",children:[Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){var t=e.target.value;i(t)},placeholder:"What's on your mind?",maxLength:120,className:"factoryInput__input"}),Object(n.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Add photos"}),Object(n.jsx)(v.a,{icon:N.b})]}),Object(n.jsx)("input",{type:"file",id:"attach-file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},a.readAsDataURL(t)},style:{opacity:0}}),j&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{src:j,alt:"thumbnail",style:{backgroundImage:j}}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:function(){p(""),document.querySelector("input[type='file']").value=""},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(v.a,{icon:N.c})]})]})]})},A=function(e){var t=e.userObj,a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){h.collection("sweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(I,{userObj:t}),Object(n.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(n.jsx)(S,{sweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},C=function(e){var t=e.userObj,a=e.refreshUser,r=Object(l.g)(),s=Object(c.useState)(t.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],p=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(n.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;j(t)},placeholder:"Display Name",defaultValue:u,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(n.jsx)("span",{onClick:function(){O.signOut(),r.push("/")},className:"formBtn cancelBtn logOut",children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"nav",children:[Object(n.jsx)("li",{className:"navHome",children:Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(n.jsx)("li",{className:"navProfile",children:Object(n.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(n.jsx)("span",{className:"profileName",children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.isLoggedIn,a=e.userObj,c=e.refreshUser;return Object(n.jsxs)(u.a,{children:[t&&Object(n.jsx)(F,{userObj:a}),Object(n.jsx)(l.d,{children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",children:Object(n.jsx)(A,{userObj:a})}),Object(n.jsx)(l.b,{exact:!0,path:"/profile",children:Object(n.jsx)(C,{userObj:a,refreshUser:c})}),Object(n.jsx)(l.a,{from:"*",to:"/"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",children:Object(n.jsx)(w,{})}),Object(n.jsx)(l.a,{from:"*",to:"/"})]})})]})},_=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];Object(c.useEffect)((function(){O.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[a?Object(n.jsx)(U,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){var e=O.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"initializing...",Object(n.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Slothwitter "]})]})};a(50);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.235b8213.chunk.js.map